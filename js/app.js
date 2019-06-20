// Starting position Players
const initPlayerX = 204;
const initPlayerY = 400;

// Positioning Enemy
const enemyBoundary = 500;
const resetEnemy = -100;

// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = -100;
        this.y = y + 60;
    }

    /**
     * @Description - Apply enemy movement
     * @param {string} dt - Apply delta time
     */
    update(dt) {
        setTimeout(() => {
            if (this.x < enemyBoundary ) {
                this.x += 250 * dt;
            } else {
                this.x = resetEnemy;
            }
        }, 500);
    }

    /**
     * @Description - Draw enemy image on the page
     */
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/**
 *
 * @type {Enemy[]} - Spawn three bugs on different rows
 */
const allEnemies = [
    new Enemy(-100, 0),
    new Enemy(-100, 83),
    new Enemy(-100, 166)
];

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// };

// Draw the enemy on the screen, required method for game

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.boy = 'images/char-boy.png';
        this.score = 0;
    }
    update() {

    }

    /**
     * @Description: Render the player image on the x and y position
     */
    render() {
        ctx.drawImage(Resources.get(this.boy), this.x, this.y);
    }

    /**
     * @Description: Handle event listener
     * @Param {string} arrowEvent : Update player position when key is pressed
     */
    handleInput(arrowEvent) {
        switch (arrowEvent) {
            case 'left':
                if (this.x > 4) {
                    this.x -= 100;
                    console.log('Left');
                }
                break;
            case 'up':
                if (this.y > 60) {
                    this.y -= 85;
                    console.log('Up');
                }
                break;
            case 'right':
                if (this.x < 400) {
                    this.x += 100;
                    console.log('Right');
                }
                break;
            case 'down':
                if (this.y < 400) {
                    this.y += 85;
                    console.log('Down');
                }
                break;
        }
    }
}

const player = new Player(initPlayerX, initPlayerY);

function resetPlayer() {
    this.x = 204;
    this.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
