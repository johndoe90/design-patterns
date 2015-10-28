
/**
 * interfaces for the concrete "Products"
 */
interface IPlant { name: string; }
interface IAnimal { name: string }

/**
 * concrete "Products"
 */
class Fern implements IPlant { public name = 'Fern'; }
class Tiger implements IAnimal { public name = 'Tiger'; }

class Grass implements IPlant { public name = 'Grass'; }
class Kamel implements IAnimal { public name = 'Kamel'; }

/**
 * Abstract factory (could also be just a plain interface)
 */
interface HabitatFactory {
	createPlant(): IPlant;
	createAnimal(): IAnimal;
}

/**
 * concrete Factories (could be Singletons)
 */
export class RainforestHabitatFactory implements HabitatFactory {
	public createPlant(): IPlant {
		return new Fern();
	}

	public createAnimal(): IAnimal {
		return new Tiger();
	}
}

export class DesertHabitatFactory implements HabitatFactory {
	public createPlant(): IPlant {
		return new Grass();
	}

	public createAnimal(): IAnimal {
		return new Kamel();
	}
}
