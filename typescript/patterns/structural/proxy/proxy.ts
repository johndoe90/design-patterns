interface Restricted {
	getPublic(): string;
}

export class Sensitive implements Restricted {
	
	private publicData = 'public';

	private privateData = 'private';

	public getPrivate(): string {
		return this.privateData;
	}

	public getPublic(): string {
		return this.publicData;
	}
}

export class Proxy implements Restricted {

	private sensitive: Sensitive;

	constructor() {
		this.sensitive = new Sensitive();
	}

	public getPublic(): string {
		return this.sensitive.getPublic();
	}
}