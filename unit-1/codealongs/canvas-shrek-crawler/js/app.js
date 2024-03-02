// GLOBAL DOM / VARIABLES
const mushroomImage = document.querySelector('#mush');
const movement = document.querySelector('#movement');
const game = document.querySelector('#game');
const score = document.querySelector('#score');
const status = document.querySelector('#status');
const ctx = game.getContext('2d');
let shrek;
let donkey;

const shrekImage = document.querySelector('#shrek');

// ====================== PAINT INTIAL SCREEN ======================= //
// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function () {
    // load the donkey and shrek on page
    shrek = new Character(shrekImage, 100, 100, '#bada55', 200, 200);
    donkey = new Crawler(10, 20, 'brown', 25, 25);

    let runGame = setInterval(gameLoop, 60);
});

document.addEventListener('keydown', movementHandler);

// ====================== SETUP FOR CANVAS RENDERING ======================= //
// 2D rendering context for canvas element
// This is used for drawing shapes, text, images, etc.
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);


// ====================== ENTITIES ======================= //
class Crawler {
    constructor(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function () {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
    }
}

class Character extends Crawler {
    constructor(image, ...args) {
        super(...args);
        this.image = image;
        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

const mushroom = new Character(mushroomImage, 200, 300, 'blue', 50, 50);
console.log(mushroom);
mushroom.render();

// let testCrawler = new Crawler(150, 20, 'blue', 100, 100);
// testCrawler.render();

// KEYBOARD LOGIC
function movementHandler(e) {
    console.log('movement:', e.key);
    // make a conditional for each direction
    if (e.key === 'w' || e.key === 'ArrowUp') {
        donkey.y - 10 >= 0 ? (donkey.y -= 10) : null;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
        donkey.y + 10 <= game.height - donkey.height ? (donkey.y += 10) : null;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
        donkey.x - 10 >= 10 ? (donkey.x -= 10) : null;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
        donkey.x + 10 <= game.width - donkey.width ? donkey.x += 10 : null;
    }
}



// ====================== HELPER FUNCTIONS ======================= //
function addNewShrek() {
    // shrek.alive = false;
    // use a setTimeout function create a new Shrek after 1 second (1000 milliseconds)
    setTimeout(function() {
        // random x and y position
        let randomX = Math.floor(Math.random() * game.width - 40);
        let randomY = Math.floor(Math.random() * game.height - 80);
        // random color
        const colors = ['pink', 'purple', 'red', 'cyan', 'magenta', 'teal', 'green'];
        let randomIndex = Math.floor(Math.random() * colors.length - 1);
        let randomColor = colors[randomIndex]; // we have our random color
        // create a new shrek
        shrek = new Crawler(randomX, randomY, randomColor, 50, 100);
    }, 1000);

    return true;
}

// ====================== GAME PROCESSES ======================= //
function gameLoop() {
    // clear the canvas
    ctx.clearRect(0, 0, game.width, game.height);
    // display x and y coordinates for our donkey
    movement.textContent = `X: ${donkey.x}\nY: ${donkey.y}`;

    // check to see if shrek is alive
    if (shrek.alive) {
        // render the shrek
        shrek.render();
        // check for collision between donkey and shrek
        let hit = detectHit(donkey, shrek);
    }
    // render the donkey
    donkey.render();

}
// ====================== COLLISION DETECTION ======================= //
function detectHit(player, opp) {
    let hitTest = (
        player.y + player.height > opp.y && // 
        player.y < opp.y + opp.height &&
        player.x + player.width > opp.x &&
        player.x < opp.x + opp.width
    );

    if (hitTest) {
        // add 100 points to the current score
        let newScore = Number(score.textContent) + 100;
        score.textContent = newScore;
        // return a new Shrek with the addNewShrek function
        return addNewShrek();
    } else {
        return false;
    }
}



// ====================== EXTRAS ======================= //
// 
// let shrekMovement = setInterval(shrekAIMovement, 2000);
/*
function shrekAIMovement() {
    // make a conditional for each direction
    // first move the shrek up, then move to the right, then to the left, the down and repeat
    console.log('Shrek AI');
    moveUp();
    moveUp();
    
   setTimeout(() => {
    moveRight();
    moveRight();
   }, 500);

   setTimeout(() => {
    moveDown();
    moveDown();
   }, 1000);
   
}

function moveUp() {
    if (shrek.y - 10 >= 0) {
        shrek.y -= 10;
    } else {
        shrek.y = 100
    }
}

function moveRight() {
    if (shrek.x + 10 <= game.width - shrek.width) {
        shrek.x += 10;
    } else {
        shrek.x = 100;
    }
}

function moveDown() {
    if (shrek.y + 10 <= game.height - shrek.height) {
        shrek.y += 10
    } else {
        shrek.y = 100;
    }
}

function moveLeft() {
    if (shrek.x - 10 >= 10) {
        shrek.x -= 10
    } else {
        shrek.x = 100;
    }
}
*/ 