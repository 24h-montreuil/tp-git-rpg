# tp-git-rpg

TP d'entraînement d'utilisation de Git : Création d'un RPG

## Authors

indyteo
Cedric-F

## Getting started

_Clone the repository_

```
git clone https://github.com/24h-montreuil/tp-git-rpg.git
```

### Dependencies

Requires the following packages:

* [babel-cli](https://babeljs.io/docs/en/babel-cli)
* [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

```
npm install
```

Start the server with

```
npm start
```

The server listens to the port 12345.

### Production build

This project might require to be transpiled from ES6 to ES5 for node to run it.

You can do so by running the following command

```
npm run build
```

It will create a build/ directory containing the transpiled project.

### Structure

├── README.md\
├── package.json\
├── server.js\
└── src/\
    └── Entities\
        └── entity.js\
    └── client.js

## TODO

You are provided with a server and a basic starter class (Entity).
The purpose of this exercise is to connect 2 clients to this server and make your characters fight in a turn-by-turn duel.
You are free to modify the characters' constructors in any way you like as long as you follow these guidelines:
- A duel is finished when one of the opponents is dead (life points hit 0)
- At each turn, the client asks the user what action they'll play on their turn. (e.g: attack, defend, evade, etc...)
- Feel free to add any features as long as you create branches, and commit accordingly
- Make sure you read any piece of comment you see, as they can add some perspective to the projet

### Hints

Here are some features we ask you to create:
- Each entity should have a list of abilities (2 or 3)
- The abilities are divided in 2 categories, each subdivided in 2 subcategories:
	- Attacks abilities:
		- Damage abilities, which cause damage to the enemy
		- Debuff abilities, which apply negative effect to the enemy
	- Support abilities:
		- Heal abilities, which restore HP
		- Buff abilities, which give us positive effect
- A list a effect which can be apply to entities
- The effects are devided in 2 categories:
	- Negative effect, which disadvantage entities
	- Positive effect, which advantage entities
- Each effect last during N turns, where N is defined in the ability that apply the effect

### Server communication

#### Connecting

When connectiing to the server, if the game isn't started yet, you'll receive your number (1 or 2).
After that, you'll have to send to the server a string representing your character:

```
entityType;name[;...]
```

where `[;...]` represent any information that you choose to add to the Entity's constructor.
When the game start, the server will send the following message:

```
1:Starting game
```

#### Exchanging information

Each turn, you'll receive the game state, as detailed after, and if it's your turn, a message as follow:

```
2:Waiting action
```

You'll have to respond with the index of the ability you want to use.

Otherwise, if it's the enemy's turn, you'll receive information after his action:

```
3:Got attacked
4:Got debuffed
5:Enemy healed
6:Enemy buffed
```

At the end, you'll receive `7:Victory` or `8:Defeated`, according to the game winner.

Here is an example of a game: (R for receive and S for send)

**First client**

```
# First client connecting
R: 1
S: entitytype1;entity1

# Game start
R: 1:Starting game

# C1's turn
R: # Game state, as detailed after
R: 2:Waiting action
S: 2 # Let's say it's a direct attack ability

# C2's turn
R: # Game state, as detailed after
R: 5:Enemy healed

# ...

# Game end: victory
R: 7:Victory
R: 0:End of connection
# Connection closed by the server
```

**Second client**

```
# Second client connecting
R: 2
S: entitytype2;entity2

# Game start
R: 1:Starting game

#C1's turn
R: # Game state, as detailed after
R: 3:Got attacked

#C2's turn
R: # Game state, as detailed after
R: 2:Waiting action
S: 1 # Let's say it's a healing ability

# ...

# Game end: defeated
R: 8:Defeated
R: 0:End of connection
# Connection closed by the server
```

**Third client**

```
# Third client connecting
R: 0:End of connection
# Connection closed by the server
```

#### Game state

The game state is constructed like this:

```
ID;entityType;currentHP;effects
```

where `effects` is a list:

```
effect|effect|...
```

with `effect` like:

```
effectName:turn
```

### Helpful link(s)

[ReadLine](https://nodejs.org/api/readline.html#readline_readline) helps you read user inputs in NodeJS.

## Licence

N/A