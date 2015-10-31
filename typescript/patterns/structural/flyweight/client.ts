/**
 * Use sharing to support large numbers of fine-grained objects efficiently
 *
 * Usecase:
 * 		The Flyweight pattern's effectiveness depends heavily on how and where it's used. 
 * 		Apply the Flyweight pattern when all of the following are true
 *
 * 		--> An application uses a large number of objects
 * 		--> Storage costs are high because of the sheer quantity of objects
 * 		--> Most object state can be made extrinsic
 * 		--> Many groups of objects may be replaced by relatively few shared objects 
 * 				once extrinsic state is removed
 * 		--> The application doesn't depend on object identity. Since flyweight objects 
 * 				may be shared, identity tests will return true for conceptually distinct
 * 				objects
 */

'use strict';

import {LetterFactory} from './flyweight';

let factory = new LetterFactory();
let text = 'this is the text to create';

text.split('').forEach((letter) => {
	factory.createLetter(letter);
});