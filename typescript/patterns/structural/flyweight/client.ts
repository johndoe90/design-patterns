'use strict';

import {LetterFactory} from './flyweight';

let factory = new LetterFactory();
let text = 'this is the text to create';

text.split('').forEach((letter) => {
	factory.createLetter(letter);
});