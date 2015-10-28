/**
 * Usecase:
 * 	--> a system should be independent of how its products are created, composed,
 * 			and represented
 * 	--> a system should be configured with one of multiple families of products
 * 	--> a family of related product objects is designed to be used together, and
 * 			you need to enforce this constraint
 * 	--> you want to provide a class library of products, and you want to reveal
 * 			just their interfaces, not their implementations
 *
 * Advantage:
 * 	--> it isolates concrete classes (the client only works with the abstraction
 * 			and has no idea of the concrete implementation)
 * 	--> it makes exchanging product families easy
 * 	--> it promotes consistency among products ( only products of the same family 
 * 			will be used ie no kamels and ferns )
 *
 * Disadvantage:
 * 	--> supporting new kinds of products is difficult since you have to change the 
 * 			interface of the abstract factory which means you have to change pretty much
 * 			everything
 */

'use strict';

import {DesertHabitatFactory} from './abstract-factory';
import {RainforestHabitatFactory} from './abstract-factory';

let factory, animal, plant;

// the client instantiates the factory once, the rest of the code is the same
factory = new DesertHabitatFactory();
animal = factory.createAnimal();
plant = factory.createPlant();

console.log(`In a desert there grows ${plant.name} and there live ${animal.name}s`);

factory = new RainforestHabitatFactory(); 
animal = factory.createAnimal();
plant = factory.createPlant();

console.log(`In a rainforest there grow ${plant.name}s and there live ${animal.name}s`);