/* function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

function getName() {
  console.log(5)
}

Foo.getName() // 2
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new (Foo().getName)() // 1
new Foo().getName() // 3 (new Foo()).getName()
new new Foo().getName()// 3 new ((new Foo()).getName)()
 */

function Foo() {
	this.getName = function() {
		console.log(3);
		return {
			getName: getName 
		}
	}; 
	getName = function() {
		console.log(1);
	};
	return this
}
Foo.getName = function() {
	console.log(2);
};
Foo.prototype.getName = function() {
	console.log(6);
};
var getName = function() {
	console.log(4);
};

function getName() {
	console.log(5);
} 

Foo.getName(); 
getName(); 
console.log(Foo())
Foo().getName(); 
getName(); 
new Foo.getName(); 
new Foo().getName(); 

new Foo().getName().getName(); 
new new Foo().getName();             