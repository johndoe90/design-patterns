/**
 * Allow an object to alter its behavior when its internal state changes.The object
 * will appear to change its class
 *
 * Usecase:
 * 		--> An object's behavior depends on its state, and it must change itsbehavior
 * 				at run-time depending on that state
 * 		--> Operations have large, multipart conditional statements that depend onthe
 * 				object's state. This state is usually represented by one or moreenumerated
 * 				constants. Often, several operations will contain thissame conditional
 * 				structure. The State pattern puts each branch of theconditional in a
 * 				separate class. This lets you treat the object'sstate as an object in its
 * 				own right that can vary independently fromother objects
 */

'use strict';

import {Square} from './state';

let square = new Square();
square.rotateLeft();
square.rotateRight();
square.rotateLeft();
square.rotateLeft();
square.rotateLeft();

square.print();