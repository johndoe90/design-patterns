///<reference path="../../../typings/tsd.d.ts" />
'use strict';
var WeirdDataStructureIterator = (function () {
    function WeirdDataStructureIterator(data) {
        this._pos = 0;
        this._data = data;
    }
    WeirdDataStructureIterator.prototype.next = function () {
        return this._data[this._pos++];
    };
    WeirdDataStructureIterator.prototype.hasNext = function () {
        return this._pos < this._data.length;
    };
    return WeirdDataStructureIterator;
})();
var WeirdDataStructure = (function () {
    function WeirdDataStructure() {
        this._data = [];
    }
    WeirdDataStructure.prototype.iterator = function () {
        return new WeirdDataStructureIterator(this._data);
    };
    WeirdDataStructure.prototype.add = function (item) {
        this._data.push(item);
    };
    WeirdDataStructure.prototype.remove = function (item) {
        for (var i = 0, length_1 = this._data.length; i < length_1; i++) {
            if (item == this._data[i]) {
                this._data.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    return WeirdDataStructure;
})();
exports.WeirdDataStructure = WeirdDataStructure;
