"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * entity.js
 *
 * Regroups the characters constructors.
 * An entity has a name and is lvl 0 when created.
 * More methods can be added to the Entity (super class), any sub class will receive it.
 */

var Entity = function () {
	function Entity(name) {
		_classCallCheck(this, Entity);

		this.name = name;
		this.level = 0;
	}

	/*
 function funcName() {}
 */

	_createClass(Entity, [{
		key: "toString",
		value: function toString() {
			return "The " + this.constructor.name + " named " + this.name + " is Lvl." + this.level;
		}
	}]);

	return Entity;
}();

// any class we use in another file needs to be exported

var Wizard = exports.Wizard = function (_Entity) {
	_inherits(Wizard, _Entity);

	function Wizard(name) {
		_classCallCheck(this, Wizard);

		return _possibleConstructorReturn(this, (Wizard.__proto__ || Object.getPrototypeOf(Wizard)).call(this, name));
	}

	return Wizard;
}(Entity);

var Troll = exports.Troll = function (_Entity2) {
	_inherits(Troll, _Entity2);

	function Troll(name) {
		_classCallCheck(this, Troll);

		return _possibleConstructorReturn(this, (Troll.__proto__ || Object.getPrototypeOf(Troll)).call(this, name));
	}

	return Troll;
}(Entity);

/*

export class ClassName extencs Entity {
	
	constructor(){}

}

*/