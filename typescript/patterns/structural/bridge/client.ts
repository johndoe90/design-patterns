/**
 * Decouple an abstraction from its implementation so that the two can vary 
 * independently
 *
 * Usecase:
 * 		--> you want to avoid a permanent binding between an abstraction and its
 *   			implementation. This might be the case, for example, when the implementation
 *      	must be selected or switched at run-time
 *    --> both the abstractions and their implementations should be extensible by 
 *    		subclassing. In this case, the Bridge pattern lets you combine the different 
 *    		abstractions and implementations and extend them independently
 *    --> you have a proliferation (starke vermehrung) of classes as shown earlier in 
 *    		the first Motivation diagram. Such a class hierarchy indicates the need for 
 *      	splitting an object into two parts. Rumbaugh uses the term "nested generalizations" 
 *      	[RBP+91] to refer to such class hierarchies
 */

'use strict';

import {Tv} from './bridge'; 
import {Radio} from './bridge';
import {Remote} from './bridge';
import {MuteRemote} from './bridge';
import {PauseRemote} from './bridge';
import {EntertainmentDevice} from './bridge';

let device: EntertainmentDevice, remote: Remote;

device = new Tv();
remote = new MuteRemote(device);

remote.pressUp();
remote.pressDown();
remote.pressSpecial();

device = new Radio();
remote = new PauseRemote(device);

remote.pressUp();
remote.pressDown();
remote.pressSpecial();