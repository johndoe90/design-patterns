///<reference path="../../../typings/tsd.d.ts" />

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