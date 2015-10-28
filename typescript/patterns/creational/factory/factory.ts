interface IProduct {
	name: string;
}

class ProductA implements IProduct {
	public name = 'Product A';
}

class ProductB implements IProduct {
	public name = 'Product B';
}

class ProductC implements IProduct {
	public name = 'Product C';
}

export class ProductFactory {
	public createProduct(type: string): IProduct {
		switch ( type ) {
			case 'A':
				return new ProductA();
			case 'B':
				return new ProductB();
			case 'C': 
				return new ProductC();
			default:
				throw new Error(`Unknown product ${type}!`);
		}
	}
}