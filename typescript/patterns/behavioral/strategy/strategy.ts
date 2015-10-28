export interface IMovable {
	move(): void;
}

export class WalkingStrategy implements IMovable {
	public move(): void {
		console.log('I AM WALKING');
	}
}

export class RunningStrategy implements IMovable {
	public move(): void {
		console.log('I AM RUNNING');
	}
}

export class Person {
	
	constructor(private movingStrategy: IMovable) {}

	public move(): void {
		this.movingStrategy.move();
	}
}