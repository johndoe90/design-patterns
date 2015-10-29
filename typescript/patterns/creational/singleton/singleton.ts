/**
 * Ensure a class only has one instance, and provide a global point of access to 
 * it
 *
 * Usecase:
 * 	--> there must be exactly one instance of a class, and it must be accessible 
 * 			to clients from a well-known access point
 *
 * 	--> when the sole instance should be extensible by subclassing, and clients 
 * 			should be able to use an extended instance without modifying their code
 */

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