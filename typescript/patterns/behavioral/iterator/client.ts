///<reference path="../../../typings/tsd.d.ts" />

/**
 * Provide a way to access the elements of an aggregate objectsequentially without 
 * exposing its underlying representation
 *
 * Usecase:
 * 		--> to access an aggregate object's contents without exposing its 
 * 				internalrepresentation
 * 		--> to support multiple traversals of aggregate objects
 * 		--> to provide a uniform interface for traversing different 
 * 				aggregatestructures (that is, to support polymorphic iteration)
 */

import {Iterator} from './iterator';
import {WeirdDataStructure} from './iterator';

let structure = new WeirdDataStructure<number>();
structure.add(1);
structure.add(2);
structure.add(3);
structure.add(2);
structure.add(1);

let it = structure.iterator();

while ( it.hasNext() ) 
	console.log(it.next());