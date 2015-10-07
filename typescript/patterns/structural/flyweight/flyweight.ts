export class LetterFactory {

	private _letterCache: Object = Object.create(null);

	public createLetter(letter: string) {
		let letterObj = this._letterCache[letter];

		if ( !letterObj )
			letterObj = this._letterCache[letter] = new Letter(letter); 

		return letterObj;
	}
}

export class Letter {
	private _letter: string;

	constructor(letter: string) {
		this._letter = letter;

		console.log('Creating new letter: ' + letter);
	}
}