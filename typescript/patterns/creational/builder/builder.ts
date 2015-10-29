/**
 * this is the abstract builder class
 */
abstract class Formatter {
	public addCharacter(char: string): void {}
}

/**
 * concrete builder that handles some kind of representation
 */
export class LowercaseFormatter extends Formatter {
	private buffer:string[] = [];

	public addCharacter(char: string): void {
		this.buffer.push(char.toLowerCase());
	}

	public getLowercaseResult(): string {
		return this.buffer.join('');
	}
}

export class UppercaseFormatter extends Formatter {
	private buffer:string[] = [];

	public addCharacter(char: string): void {
		this.buffer.push(char.toUpperCase());
	}

	public getUppercaseResult(): string {
		return this.buffer.join('');
	}
}

/**
 * you can see that the construction process remains the same for different
 * representations
 */
export class Director {
	constructor(private formatter: Formatter) {}

	public process(text: string): void {
		text.split('').forEach((char) => {
			this.formatter.addCharacter(char);
		}); 
	}
}