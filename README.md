# tp-git-rpg
TP d'entraînement d'utilisation de Git : Création d'un RPG

## Autors
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
├── README.md
├── package.json
├── server.js
└── src/
    └── Entities
        └── entity.js
    └── client.js

## TODO
You are provided with a server and a basic starter class (Entity).
The purpose of this exercise is to connect 2 clients to this server and make your characters fight in a turn-by-turn duel.
You are free to modify the characters' constructors in any way you like as long as you follow these guidelines:
- A duel is finished when one of the opponents is dead (life points hit 0)
- At each turn, the client asks the user what action they'll play on their turn. (e.g: attack, defend, evade, etc...)
- Feel free to add any features as long as you create branches, and commit accordingly
- Make sure you read any piece of comment you see, as they can add some perspective to the projet

### Helpful link(s)
[ReadLine](https://nodejs.org/api/readline.html#readline_readline) helps you read user inputs in NodeJS.

## Licence
N/A