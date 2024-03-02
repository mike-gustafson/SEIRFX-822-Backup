import asyncio
from pyppeteer import launch
import os
from dotenv import load_dotenv
from pymongo import MongoClient
import datetime, time
from pprint import pprint
from bs4 import BeautifulSoup
from bson import ObjectId

load_dotenv()

USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')
MONGO_URI= os.getenv('MONGO_URI')
print('----MONGO_URI ----', MONGO_URI)

client = MongoClient(MONGO_URI)
db = client['wallmine_wrapper']
print(db.list_collection_names())

class Wallmine():
    
    def __init__(self):
        self.db = db
        self.sector_overview = self.db['sector_overview']
        self.top_gainers = self.db['top_gainers']
        self.html = self.db['html']
        self.browser = None
        self.page = None
        self.client = None
        self.urls = {
        'login': 'https://wallmine.com/users/sign-in',
        'profile': 'https://wallmine.com/profile/new',
        'markets': 'https://wallmine.com/market/us',
        'homepage': 'https://wallmine.com/',
    }
    
    async def main(self):
        self.browser = await launch({ "headless": False })
        self.page = await self.browser.newPage()
        time.sleep(5)
        # run login
        await self.login()
        await self.parse_sector_overview()

    async def login(self):
        print('----login starting----')
        await self.page.setViewport({ "width": 1920, "height": 1080 })
        await self.page.goto(self.urls['homepage'])
        time.sleep(5) # or we can use self.page.waitFor(5000)
        homepage_html = await self.page.content()
        self.html.insert_one({'webpage': 'homepage', 'html': homepage_html})
        #add screenshot
        await self.page.screenshot({
            'path': 'homepage.png',
            'quality': 100,  # Set quality to 100% (maximum)
            'fullPage': True  # Capture the entire page
        })
        time.sleep(2)     

        # go to login page and log in
        await self.page.goto(self.urls['login'])
        time.sleep(5)
        login_html = await self.page.content()
        self.html.insert_one({'webpage': 'login', 'html': login_html})
        #add screenshot
        await self.page.screenshot({
            'path': 'login.png',
            'quality': 100,  # Set quality to 100% (maximum)
            'fullPage': True  # Capture the entire page
        })
        password_button = await self.page.waitForSelector('#new_user > div.form-group.form-actions > div:nth-child(1) > div.col-sm-6.text-center.secondary-action.js-auth-use-password > a')
        
        await password_button.click()
        time.sleep(2)
        email_input = await self.page.waitForSelector('#user_email')
        await email_input.click()
        time.sleep(0.5)
        await self.page.keyboard.type(USERNAME)
        time.sleep(0.25)
        password_input = await self.page.waitForSelector('#user_password')
        await password_input.click()
        time.sleep(0.5)
        await self.page.keyboard.type(PASSWORD)
        time.sleep(0.25)
        submit_button = await self.page.waitForSelector('#new_user > div.form-group.form-actions > div:nth-child(2) > div.col-sm-6.primary-action > button')
        await submit_button.click()
        time.sleep(5)
        #screenshot time!
        await self.page.screenshot({
            'path': 'login_success.png',
            'quality': 100,  # Set quality to 100% (maximum)
            'fullPage': True  # Capture the entire page
        })

    async def parse_sector_overview(self):
        await self.page.goto(self.urls['markets'])
        time.sleep(5)
        markets_html = await self.page.content()
        time.sleep(1)
        self.html.insert_one({'webpage': 'markets', 'html': markets_html})
        #add screenshot
        await self.page.screenshot({
            'path': 'markets.png',
            'quality': 100,  # Set quality to 100% (maximum)
            'fullPage': True  # Capture the entire page
        })
        soup = BeautifulSoup(markets_html, 'html.parser')
        table = soup.find_all(['table', 'table-sm', 'table--no-margin', 'table-striped'])
        print('----table----')
        print(table)
        for t in table:
            print(t)

    def parse_markets_html_for_sector(self, markets_html_id):
        # go to the database and grab the html 
        # pass into function '65bb0f4cdabfeeb2dfdf1ae6'
        markets_html = self.html.find_one({ '_id': ObjectId(markets_html_id) })
        soup = BeautifulSoup(markets_html['html'], 'html.parser')
        table = soup.find('div', class_='sector-overview')

        rows = table.find_all('tr')
        for row in rows:
            cells = row.find_all('td')
            # print("-------- cells --------")
            # pprint(cells)
        
            # get all text from cells
            overview = {}
            for cell in cells:
                if cell is not None:
                    # print('-------- text ------')
                    # print(cell.get_text())
                    if '-' in cell.get_text() or '+' in cell.get_text():
                        overview['intraday_change'] = float(cell.get_text().split('%')[0])
                        # ['-0.78', '']
                    elif '\n\n' in cell.get_text():
                        # do nothing
                        pass
                    else:
                        overview['sector'] = cell.get_text().strip()
                    
            self.sector_overview.insert_one(overview)

            


    
wallmine_wrapper = Wallmine()
asyncio.get_event_loop().run_until_complete(wallmine_wrapper.main())
wallmine_wrapper.parse_markets_html_for_sector('65bb0f4cdabfeeb2dfdf1ae6')
