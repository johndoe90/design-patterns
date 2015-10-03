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