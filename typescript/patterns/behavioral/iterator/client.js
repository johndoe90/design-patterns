///<reference path="../../../typings/tsd.d.ts" />
var iterator_1 = require('./iterator');
var structure = new iterator_1.WeirdDataStructure();
structure.add(1);
structure.add(2);
structure.add(3);
structure.add(2);
structure.add(1);
var it = structure.iterator();
while (it.hasNext())
    console.log(it.next());
