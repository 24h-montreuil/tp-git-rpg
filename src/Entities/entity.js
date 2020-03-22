/**
 * entity.js
 *
 * Regroups the characters constructors.
 * An entity has a name and is lvl 0 when created.
 * More methods can be added to the Entity (super class), any sub class will receive it.
 */

class Entity {
	
	constructor(name) {
		this.name = name;
		this.level = 0;
	}

	/*
	function funcName() {}
	*/

	toString() {
		return `The ${this.constructor.name} named ${this.name} is Lvl.${this.level}`;
	}

}

// any class we use in another file needs to be exported

export class Wizard extends Entity {

	constructor(name) {
		super(name);
	}

}

export class Troll extends Entity {

	constructor(name) {
		super(name);
	}

}

/*

export class ClassName extencs Entity {
	
	constructor(){}

}

*/