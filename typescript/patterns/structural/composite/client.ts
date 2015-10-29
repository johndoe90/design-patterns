/**
 * Compose objects into tree structures to represent part-whole hierarchies.
 * Composite lets clients treat individual objects and compositions of objects
 * uniformly
 *
 * Usecase:
 * 		--> you want to represent part-whole hierarchies of objects
 * 		--> you want clients to be able to ignore the difference between compositions
 *   			of objects and individual objects. Clients will treat all objects in the
 * 				composite structure uniformly
 */

'use strict';

import {Manager} from './composite';
import {Employee} from './composite';

let managerStephy = new Manager('Stephy', 123);
let managerThomas = new Manager('Thomas', 1234);
let employeeThomas = new Employee('Thomas', 24);
let employeePhillip = new Employee('Phillip', 2345);

managerThomas.add(employeeThomas);
managerThomas.add(employeePhillip);

managerStephy.add(managerThomas);

console.log(managerStephy.getNumberOfEmployees());
managerStephy.print();