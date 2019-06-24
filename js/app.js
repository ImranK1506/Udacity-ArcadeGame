// Starting position Players
const initPlayerX = 204;
const initPlayerY = 400;

// Positioning Enemy
const enemyBoundary = 500;
const resetEnemy = -100;

// Timer
let timerOff = true;

/**
 * @Description - Enemy class with it's methods
 */
class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y + 60;
        this.speed = speed;
    }

    /**
     * @Description - Apply enemy movement
     * @param {string} dt - Apply delta time
     */
    update(dt) {
        setTimeout(() => {
            if (this.x < enemyBoundary ) {
                this.x += this.speed * dt;
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
 * @type {Enemy[]} - Spawn three bugs on different rows with individual speeds
 */
const allEnemies = [
    new Enemy(-100, 0, 200),
    new Enemy(-100, 85, 280),
    new Enemy(-100, 170, 220)
];

/**
 * @Description - Player class with it's methods
 *                > reset()       - reset the x and y positioning
*                 > update()      - check if Player reaches water or enemy and resets it's position
 *                > render()      - render the image and it's starting position to the screen
 *                > handleInput() - handle eventListeners on user input
 */
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.boy = 'images/char-boy.png';
    }
    reset(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @Description - Checks the following:
     *                > User collides with water and resets the player to it's initial position
     *                > Updates the score
     */
    update() {
        if (this.y <= 0) {
            this.reset(initPlayerX, initPlayerY);

            console.log('Collide with water');
            // console.log('Score dropped by ' + score + ' point(s)!');
        }
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
                if (this.y > 0) {
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

/**
 * @Description - Rating
 */
const heartsCounter = document.querySelector('.hearts');
const starImage = `<li><i class="fab fa-gratipay"></i></li>`;
heartsCounter.innerHTML = starImage + starImage + starImage;

/**
 * @Description - Checks collision between Player and Enemy
 */
const checkCollisions = () => {
    // Collision space between Player and Enemy
    const collision = 70;
    for (let enemy of allEnemies) {
        // console.log(enemy);
        if ((player.y >= enemy.y - collision && player.y <= enemy.y + collision)
            &&
            (player.x >= enemy.x - collision && player.x <= enemy.x + collision)) {

            player.reset(initPlayerX, initPlayerY);

            // reduceHearts();
            console.log('Collide with enemy');
            // console.log('Score dropped by ' + score + ' point(s)!');
        }
        // console.log('Player ' + player.y + ', Enemy ' +  enemy.y)
    }
};

/**
 * @Description - Timer function
 */
const showTimer = () => {
    const timer = document.querySelector('.timer');
    timer.innerHTML = minute + ' min ' + second + ' sec '
};

/**
 * @Description - Set the timer
 */
let interval;
let second = 0, minute = 0;

const setTimer = () => {
    interval = setInterval(() => {
        showTimer();
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
    },1000);
};

/**
 * @Description - Clear the timer
 */
const clearTimer = () => {
    clearInterval(interval);
};

/**
 * @Description - Reset the timer
 */
const resetTimer = () => {
    clearTimer();
    timerOff = true;
    second = 0;
    minute = 0;
    showTimer();
};

/**
 * @Description - Reset button
 */
const resetButton = () => {
    document.querySelector('.restart').addEventListener('click', () => {
        player.reset(initPlayerX, initPlayerY);
        this.x = resetEnemy;
        resetGame();
    })
};

/**
 * @Description - Reset the game
 */
const resetGame = () => {
    // Reset the timer
    resetTimer();
    // Reset the hearts
    // Reset enemies
    // Reset player
};

/**
 * @Description - Toggle modal
 */
const toggleModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hidden');
};

/**
 * @Description - Close modal
 */
const closeModal = () => {
    document.querySelector('.modal-close').addEventListener('click', () => {
        canvas.innerHTML = '';
        replayGame();
    });
};

const endGame = () => {
    toggleModal();
};

/**
 * @Description - Replay the game
 */
function replayGame() {
    resetGame();
    toggleModal();
}

/**
 * @Description - Reset button
 */
resetButton();


/*
 * Increment moves
 */
// const reduceHearts = () => {
//     const heartsCounter = document.querySelector('.hearts');
//     heartsCounter.innerHTML = score + starImage;
//     score--;
//     console.log('Score ' + score);
// };

// const gemCollection = () => {
//
//     let gemList = [
//         {
//             name: 'blue',
//             image: 'images/gem-blue.png'
//         },
//         {
//             name: 'green',
//             image: 'images/green-blue.png'
//         },
//         {
//             name: 'orange',
//             image: 'images/gem-orange.png'
//         }
//     ];
//
//     let arrayOfGems = [...gemList];
//     console.log(arrayOfGems);
//
//     const shuffleGems = shuffle(arrayOfGems);
//         for (let g = 0; g < shuffleGems.length; g++) {
//             const gems = document.getElementsByClassName('li');
//             gems.innerHTML = `<i class="${arrayOfGems[g]}"></i>`
//         }
// };

// gemCollection();

// const shuffle = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]]
//     }
//     return array;
// };

// /**
//  * @Description - Check score
//  */
// const checkScore = () => {
//     if (moves <= 16 ) {
//         heartsCounter.innerHTML = starImage + starImage + starImage;
//     } else if (moves <= 24) {
//         heartsCounter.innerHTML = starImage + starImage;
//     } else {
//         heartsCounter.innerHTML = starImage;
//     }
// };

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    // Set the timer
    if(timerOff) {
        setTimer();
        timerOff = false;
    }
});
