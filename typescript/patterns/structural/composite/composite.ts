///<reference path="../../../typings/tsd.d.ts" />

'use strict';

export abstract class AbstractEmployee {
	constructor ( private _name: string, private _tel: number ) {}

	get name() {
		return this._name;
	}

	get tel() {
		return this._tel;
	}

	public abstract print() : void;

	public abstract getNumberOfEmployees() : number;
}

export class Employee extends AbstractEmployee {
	constructor ( _name: string, _tel: number ) {
		super(_name, _tel);
	}

	public print() {
		console.log('Employee: ' + this.name);
	}

	public getNumberOfEmployees() {
		return 1;
	}
}

export class Manager extends AbstractEmployee  {
	private _employees : AbstractEmployee[] = [];

	constructor ( _name: string, _tel: number ) {
		super(_name, _tel);
	}

	public print() {
		console.log('Manager: ' + this.name);
		this._employees.forEach((employee) => {
			employee.print();
		});
	}

	public getNumberOfEmployees() {
		let numOfEmployees = 1;
		this._employees.forEach((employee) => {
			numOfEmployees += employee.getNumberOfEmployees();
		});

		return numOfEmployees;
	}

	public add( employee: AbstractEmployee ) {
		this._employees.push(employee);
	}

	public remove( index: number ) {
		this._employees.splice(index, 1);
	}

	public get( index: number ) : AbstractEmployee {
		return this._employees[index];
	}
}