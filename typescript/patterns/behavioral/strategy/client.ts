'use strict';

import {Person} from './strategy';
import {WalkingStrategy} from './strategy';
import {RunningStrategy} from './strategy';

let sprinter = new Person(new RunningStrategy());
let walker = new Person(new WalkingStrategy());

walker.move();
sprinter.move();