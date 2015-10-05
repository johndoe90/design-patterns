/*
		                   A
	                  _______
                   |       |
rotate Left <--  D |       | B --> rotate right
                   |       |
                   |_______|

                       C
 */

interface SquareState {
	print();
	rotateLeft();
	rotateRight();
}

class AOnTopState implements SquareState {
		constructor(private _square: Square) {}

	public rotateLeft() {
		this._square.setState(new BOnTopState(this._square));
	}

	public rotateRight() {
		this._square.setState(new DOnTopState(this._square));
	}

	public print() {
		console.log('A is on top');
	}
}

class BOnTopState implements SquareState {
		constructor(private _square: Square) {}

	public rotateLeft() {
		this._square.setState(new COnTopState(this._square));
	}

	public rotateRight() {
		this._square.setState(new AOnTopState(this._square));
	}

	public print() {
		console.log('B is on top');
	}
}

class COnTopState implements SquareState {
		constructor(private _square: Square) {}

	public rotateLeft() {
		this._square.setState(new DOnTopState(this._square));
	}

	public rotateRight() {
		this._square.setState(new BOnTopState(this._square));
	}

	public print() {
		console.log('C is on top');
	}
}

class DOnTopState implements SquareState {	
	constructor(private _square: Square) {}

	public rotateLeft() {
		this._square.setState(new AOnTopState(this._square));
	}

	public rotateRight() {
		this._square.setState(new COnTopState(this._square));
	}

	public print() {
		console.log('D is on top');
	}
}

export class Square {
	private _state: SquareState;

	constructor() {
		this._state = new AOnTopState(this);
	}

	public rotateLeft() {
		this._state.rotateLeft();
	}

	public rotateRight() {
		this._state.rotateRight();
	}

	public print() {
		this._state.print();
	}

	public setState(state: SquareState) {
		this._state = state;
	}
}