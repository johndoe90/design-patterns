/**
 * Usecase: 
 * 	--> when all all of the potential classes are in the same subclass hierarchy
 * 	--> when you dont know ahead of time what class object you need
 *
 * Advantage:
 * 	--> centralize class selection code
 * 	--> encapsulate object creation
 * 	--> the client does not have to know all the subclasses
 */

'use strict';

import {ProductFactory} from './factory';

//simulate dynamic object creation
let supported = ['A', 'B', 'C'];
let productFactory = new ProductFactory();
let randomIndex = Math.floor(Math.random() * supported.length);
let product = productFactory.createProduct(supported[randomIndex]);

console.log(`You dynamically created ${product.name}`);