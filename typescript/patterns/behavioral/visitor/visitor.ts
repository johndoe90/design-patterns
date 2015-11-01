interface Visitor {
	visit(liqour: Liquor): number;
	visit(tobacco: Tobacco): number;
}

export class TaxVisitor implements Visitor {
	public visit(param: Liquor | Tobacco): number {
		
		if ( param instanceof Liquor ) {
			let item: Liquor = <Liquor> param;

			return item.price * 1.30;
		} else if ( param instanceof Tobacco ) {
			let item: Tobacco = <Tobacco> param;

			return item.price * 1.50;
		}
	}
}

export class HolidayTaxVisitor implements Visitor {
	public visit(param: Liquor | Tobacco): number {
		
		if ( param instanceof Liquor ) {
			let item: Liquor = <Liquor> param;

			return item.price * 1.20;
		} else if ( param instanceof Tobacco ) {
			let item: Tobacco = <Tobacco> param;

			return item.price * 1.40;
		}
	}
}

interface Visitable {
	accept(visitor: Visitor): number;
}

export class Liquor implements Visitable {

	constructor(public name: string, public price: number) {}

	public accept(visitor: Visitor): number {
		return visitor.visit(this);
	}
}

export class Tobacco implements Visitable {

	constructor(public name: string, public price: number) {}

	public accept(visitor: Visitor): number {
		return visitor.visit(this);
	}
}