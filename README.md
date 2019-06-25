# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

* Use the keyboard arrows to reach the water.
* If you reach the water, you get 1 Score.
* If you get caught by the enemies, a modal with your results will appear.
* When you click the modal away, the game will be reset

## Methods

#### class Enemy
````
update()        -   Apply enemy movement

render()        -   Render the enemy
````

#### class Player
````
reset()         -   Reset player starting position

update()        -   Checks when the player collides with the water and updates the score

render()        -   Render the player

handleInput()   -   Handle keyboard events
````

## Descriptions

Used [jsdoc](https://devhints.io/jsdoc) as a reference to describe functions in app.js
