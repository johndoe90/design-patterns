'use strict';

import {Square} from './state';

let square = new Square();
square.rotateLeft();
square.rotateRight();
square.rotateLeft();
square.rotateLeft();
square.rotateLeft();

square.print();