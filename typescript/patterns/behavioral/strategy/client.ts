/**
 * Usecase:
 * 	--> Define a family of algorithms, encapsulate each one, and make theminterchangeable.
 *		Strategy lets the algorithm vary independently fromclients that use it.
 *		
 *	--> many related classes differ only in their behavior. Strategies provide a
 *		way to configure a class with one of many behaviors.
 *
 *	-->	you need different variants of an algorithm. For example, you might
 *		definealgorithms reflecting different space/time trade-offs.Strategies
 *		can be used when these variants are implemented as a classhierarchy of
 *		algorithms 
 *
 *	-->	an algorithm uses data that clients shouldn't know about. Use theStrategy
 *		pattern to avoid exposing complex, algorithm-specific datastructures.
 *
 *	--> a class defines many behaviors, and these appear as multipleconditional
 *		statements in its operations. Instead of manyconditionals, move related
 *		conditional branches into their ownStrategy class.
 *
 * Advantage:
 * 	-->	context and algorithm can change independently
 *
 * 	-->	eliminates conditional statements
 */

'use strict';

import {Person} from './strategy';
import {WalkingStrategy} from './strategy';
import {RunningStrategy} from './strategy';

let sprinter = new Person(new RunningStrategy());
let walker = new Person(new WalkingStrategy());

walker.move();
sprinter.move();