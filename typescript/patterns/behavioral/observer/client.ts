/**
 * Define a one-to-many dependency between objects so that when oneobject changes 
 * state, all its dependents are notified and updatedautomatically
 *
 * Usecase:
 * 		--> When an abstraction has two aspects, one dependent on the 
 * 				other.Encapsulating these aspects in separate objects lets you vary 
 * 				and reuse them independently
 * 		--> When a change to one object requires changing others, and you don't know 
 * 				how many objects need to be changed
 * 		--> When an object should be able to notify other objects without 
 * 				making assumptions about who these objects are. In other words, you don't want 
 * 				these objects tightly coupled
 */

'use strict';

import {Stock} from './observer';
import {Graph} from './observer';

let stock = new Stock();
let graph = new Graph(stock);

