/**
 * Represent an operation to be performed on the elements of an objectstructure.
 * Visitor lets you define a new operation without changing the classes of the elements
 * on which it operates
 *
 * Usecase:
 * 		--> an object structure contains many classes of objects with differing
 * 				interfaces, and you want to perform operations on these objects that depend
 * 		  	on their concrete classes
 * 		--> many distinct and unrelated operations need to be performed on objectsin
 * 				an object structure, and you want to avoid "polluting" theirclasses with
 * 				these operations. Visitor lets you keep related operationstogether by
 * 				defining them in one class. When the object structure isshared by many
 * 				applications, use Visitor to put operations in just thoseapplications that
 * 				need them
 * 		--> the classes defining the object structure rarely change, but you oftenwant
 * 				to define new operations over the structure. Changing the objectstructure
 * 				classes requires redefining the interface to all visitors,which is
 * 				potentially costly. If the object structure classes changeoften, then it's
 * 				probably better to define the operations in those classes
 */

'use strict';

import {TaxVisitor, HolidayTaxVisitor, Liquor, Tobacco} from './visitor';

let liquor = new Liquor('Vodka', 11.99);
let tobacco = new Tobacco('Cigars', 19.99);

let taxVisitor = new TaxVisitor();
console.log(`Vodka including taxes: ${liquor.accept(taxVisitor)}`);
console.log(`Cigars including taxes: ${tobacco.accept(taxVisitor)}`);

let holidayTaxVisitor = new HolidayTaxVisitor();
console.log(`Vodka including taxes during holidays: ${liquor.accept(holidayTaxVisitor)}`);
console.log(`Cigars including taxes during holidays: ${tobacco.accept(holidayTaxVisitor)}`);
