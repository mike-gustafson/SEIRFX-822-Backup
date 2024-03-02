from flask import Flask, request
from pymongo import MongoClient
import datetime
from pprint import pprint
from bson.objectid import ObjectId
import requests
from bs4 import BeautifulSoup
import json

# using the request module
r = requests.get('https://api.github.com/users/romebell')
# print('----- github requests ----', r.json())
# pprint(r.json())

# TODO make a request to access your project 3 api (deployed)
# - Find 3 routes that you can access (GET, GET, POST)
# 1.
mike_response = requests.get('https://any-time-flix-1073e070d12f.herokuapp.com/movies/test')
# pprint(mike_response.json())
rodrigo_response = requests.get('https://aitales-a5e082c276bb.herokuapp.com/characters/collection/507f1f77bcf86cd799439011')
# pprint(rodrigo_response.json())
# spoti_chat_payload = data={'firstName': 'Rome', 'lastName': 'Bell', 'username': 'rome', 'email': 'rome.bell@me.com', 'password': 'password98!11'}
# spoti_chat_response = requests.post('https://spoti-chat-41fc1f2f3950.herokuapp.com/users/signup', spoti_chat_payload)
# pprint(spoti_chat_response.json())

# Access data on a website
# example_response = requests.get('http://example.com')
# print('----- example.com -----')
# # pprint(example_response.text)
# # split the string above
# example_string = example_response.text.split("\n")
# pprint(example_string)
# print('--- length of example string ---', len(example_string))

#TODO



def parse_financial_data():
    response = requests.get('http://google.com/finance')
    soup = BeautifulSoup(response.text, 'html.parser')

    # symbols
    symbols = soup.find_all('div', class_="COaKTb")
    symbols_list = []
    for s in symbols:
        symbols_list.append(s.get_text())
    symbols_list = symbols_list[:6]
    # print('----- symbols_list -----', symbols_list)
    
    # companies
    companies = soup.find_all("div", class_="ZvmM7")
    companies_list = []
    for c in companies:
        companies_list.append(c.get_text())
    companies_list = companies_list[:6]
    # print('----- companies_list -----', companies_list)

    # price list
    prices = soup.find_all("div", class_="YMlKec")
    prices_list = []
    for p in prices:
        prices_list.append(p.get_text())
    prices_list = prices_list[10:16]
    for i in range(len(prices_list)):
        if "$" in prices_list[i]:
            updated_price = float(prices_list[i].split('$')[1])
            prices_list[i] = updated_price
        elif ',' in prices_list[i]:
            updated_price = float(prices_list[i].split(',')[0] + prices_list[i].split(',')[1])
            prices_list[i] = updated_price
    # print('----- prices_list -----', prices_list)


    # price change
    price_change = soup.find_all("span", class_=["P2Luy", "Ebnabc"])
    price_change_list = []
    for pc in price_change:
        price_change_list.append(pc.get_text())
    price_change_list = price_change_list[5:]
    for i in range(len(price_change_list)):
        if "+$" in price_change_list[i]:
            updated_price_change = float(price_change_list[i].split('+$')[1])
            price_change_list[i] = updated_price_change
        elif '-$' in price_change_list[i]:
            updated_price_change = float(price_change_list[i].split('-$')[1])
            price_change_list[i] = updated_price_change
        elif '-' in price_change_list[i]:
            updated_price_change = float(price_change_list[i].split('-')[1])
            price_change_list[i] = updated_price_change
        elif '+' in price_change_list[i]:
            updated_price_change = float(price_change_list[i].split('+')[1])
            price_change_list[i] = updated_price_change
    # print('----- price_change_list -----', price_change_list)

    # high low percentage
    high_low_percentage = soup.find_all("div", class_="JwB6zf")
    high_low_percentage_list = []
    for hl in high_low_percentage:
        high_low_percentage_list.append(hl.get_text())
    high_low_percentage_list = high_low_percentage_list[16:22]
    
    for i in range(len(high_low_percentage_list)):
        if "%" in high_low_percentage_list[i]:
            updated_percentage = float(high_low_percentage_list[i].split('%')[0])
            high_low_percentage_list[i] = updated_percentage
    # print('----- high_low_percentage_list -----', high_low_percentage_list)


    # final round -> ready.... fight...
    result_list = []
    for i in range(6):
        obj = {
            "symbol": symbols_list[i],
            "company": companies_list[i],
            "price": prices_list[i],
            "price_change": price_change_list[i],
            "high_low_percentage": high_low_percentage_list[i]
        }
        result_list.append(obj)
    
    # pprint(result_list)



parse_financial_data()

client = MongoClient("localhost", 27017)

db = client["flash_api"]
collection = db["users"]

users = db.users

# list of all collections
print('all collections', db.list_collection_names())

# using pprint
pprint(users.find_one())
# using standard print
print('---using python print ---', users.find_one())

# flask
# python3 -m flask run
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Welcome to the A Team"

@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # print(request.form['firstName'])
        # print(request.form['lastName'])
        # print(request.form['username'])
        # print(request.form['email'])
        # print(request.form['password'])
        spoti_chat_payload = {
            'firstName': request.form['firstName'], 
            'lastName': request.form['lastName'], 
            'username': request.form['username'], 
            'email': request.form['email'], 
            'password': request.form['password']
        }
        spoti_chat_response = requests.post('https://spoti-chat-41fc1f2f3950.herokuapp.com/users/signup', spoti_chat_payload)
        return spoti_chat_response.json()
    else:
        # import json at the top
        return json.dumps({"message": "You have reached the signup route"})

@app.route('/users', methods=['GET', 'POST'])
def create_user():
    if request.method == 'POST':
        payload = {
            "firstName": request.form['firstName'],
            "lastName": request.form['lastName'],
            "email": request.form['email'],
            "role": request.form['role']
        }
        new_user_id = users.insert_one(payload).inserted_id
        new_user = users.find_one({ '_id': new_user_id })
        new_user['_id'] = str(new_user['_id'])
        pprint(new_user)
        return (new_user)