class Singleton {
	private static _instance: Singleton;

	constructor() {
		if ( Singleton._instance )
			throw new Error('This class is a singleton and must not be newd');

		Singleton._instance = this;
	}

	public getInstance () : Singleton {
		if ( !Singleton._instance )
			Singleton._instance = new Singleton();

		return Singleton._instance;
	} 
}