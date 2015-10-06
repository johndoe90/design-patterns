export interface Observer {
	update(): void;
}

export interface Subject {
	getState(): Object;
	attach(observer: Observer);
	detach(observer: Observer);
}

export class Stock implements Subject {

	private _prize: number;

	private _observers: Observer[] = [];

	constructor() {
		this._prize = 10;

		setInterval(() => {
			let sign = Math.random() < 0.5 ? -1 : 1;
			let value = Math.floor(Math.random() * 10 + 1);

			this._prize += sign * value;
			this.notify();
		}, 1000);
	}

	public getState() {
		return this._prize;
	}

	private notify() {
		this._observers.forEach((observer) => {
			observer.update();
		});
	}

	private indexOfObserver(observer: Observer) {
		for ( let i = 0; i < this._observers.length; i++ ) 
			if ( this._observers[i] === observer )
				return i;

		return -1;
	}

	public attach(observer: Observer) {
		if ( this.indexOfObserver(observer) != -1 )
			return;

		this._observers.push(observer);
	}

	public detach(observer: Observer) {
		let index = this.indexOfObserver(observer);
		if ( index == -1 )
			return;

		this._observers.splice(index, 1);
	}
}

export class Graph implements Observer {
	
	private _subject: Subject;

	constructor(subject: Subject) {
		this._subject = subject;
		this._subject.attach(this);
	}

	public update() {
		let prize = <number> this._subject.getState();

		console.log(prize);
	}
}