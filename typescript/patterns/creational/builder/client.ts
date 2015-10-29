/**
 * Separate the construction of a complex object from its representation so that
 * the same construction process can create different representations.
 *
 * Usecase:
 * 	--> the algorithm for creating a complex object should be independent of the 
 * 			parts that make up the object and how they're assembled
 *
 * 	--> the construction process must allow different representations for the 
 * 			object that's constructed
 */

'use strict';

import {Director} from './builder';
import {LowercaseFormatter} from './builder';
import {UppercaseFormatter} from './builder';

let director, concreteBuilder;
let text = 'My name is Phillip and I am from Hollabrunn';

concreteBuilder = new LowercaseFormatter();
director = new Director(concreteBuilder);
director.process(text);

console.log(concreteBuilder.getLowercaseResult());

concreteBuilder = new UppercaseFormatter();
director = new Director(concreteBuilder);
director.process(text);

console.log(concreteBuilder.getUppercaseResult());