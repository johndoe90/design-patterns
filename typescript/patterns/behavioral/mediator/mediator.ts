interface IChatroomClient {
	name: string;
	sendMessage(sink: ChatroomClient, message: string): void;
	receiveMessage(source: ChatroomClient, message: string): void;
}

export class ChatroomClient implements IChatroomClient {
	constructor(public name: string, private chatroom: Chatroom) {}

	public sendMessage(sink: ChatroomClient, message: string) {
		console.log(`${this.name} sends message (${message}) to ${sink.name}`);

		this.chatroom.sendMessageTo(this, sink, message);
	}

	public receiveMessage(source: ChatroomClient, message: string): void {
		console.log(`${this.name} received a message (${message}) from ${source.name}`);
	}
}

interface IChatroom {
	addClient(client: ChatroomClient): void;
	sendMessageTo(source: ChatroomClient, sink: ChatroomClient, message: string): void;
}

export class Chatroom implements IChatroom {

	private clients: ChatroomClient[] = [];

	public addClient(client: ChatroomClient): void {
		let index = this.clients.indexOf(client);

		if ( index === -1 )
			this.clients.push(client);
	}

	public sendMessageTo(source: ChatroomClient, sink: ChatroomClient, message: string) {
		let index = this.clients.indexOf(sink);

		if ( index !== - 1 )
			this.clients[index].receiveMessage(source, message);
	}
}