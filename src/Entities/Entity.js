class Entity {
	
	constructor(name) {
		this.name = name;
		this.level = 0;
	}

	toString() {
		return `The ${this.constructor.name} named ${this.name} is Lvl.${this.level}`;
	}

}

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