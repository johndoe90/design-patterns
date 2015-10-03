///<reference path="../../../typings/tsd.d.ts" />

'use strict';

export interface Iterable<T> {
	iterator(): Iterator<T>;
}

export interface Iterator<T> {
	next(): T;
	hasNext(): boolean;
}

class WeirdDataStructureIterator<T> implements Iterator<T> {
	
	private _pos;
	private _data;

	constructor(data: T[]) {
		this._pos = 0;
		this._data = data;
	}

	public next() {
		return this._data[this._pos++];
	}

	public hasNext() {
		return this._pos < this._data.length;
	}
}

export class WeirdDataStructure<T> implements Iterable<T> {

	private _data: T[] = [];

	public iterator() {
		return new WeirdDataStructureIterator<T>(this._data);
	}

	public add(item: T) {
		this._data.push(item);
	}

	public remove(item: T): boolean {
		for ( let i = 0, length = this._data.length; i < length; i++ ) {
			if ( item == this._data[i] ) {
				this._data.splice(i, 1);
				return true;
			}
		}

		return false;
	}
}