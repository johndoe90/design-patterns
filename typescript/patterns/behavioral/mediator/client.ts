/**
 * Define an object that encapsulates how a set of objects interact.Mediator promotes
 * loose coupling by keeping objects from referring toeach other explicitly, and
 * it lets you vary their interactionindependently
 * 
 * Usecase: 
 * 	--> used to handle complex communication between objects
 * 	--> if the objects should or cannot know from each other (loose coupling)
 *
 * Advantage:
 * 	--> all communication is handled by the mediator and the subjects dont need to
 * 			know anything about each other
 * 	--> centralized point where communication between subjects is defined
 * 	--> you can change the type of communication by simply creating a new mediator
 * 			without having to change the subjects code
 */

'use strict';

import {Chatroom} from './mediator';
import {ChatroomClient} from './mediator';

let chat = new Chatroom();
let anton = new ChatroomClient('Anton', chat);
let thomas = new ChatroomClient('Thomas', chat);

chat.addClient(anton);
chat.addClient(thomas);

anton.sendMessage(thomas, 'Hello, Thomas!');
thomas.sendMessage(anton, 'Hi Thomas, what do you want?');