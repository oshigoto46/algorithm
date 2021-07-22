//
// Stack (LIFO)
//

// class Stack2 extends Array{
//    if(self.prototype)
// }


function Stack() {
	this.__a = new Array();
}

Stack.prototype.push = function(o) {
	this.__a.push(o);
}

Stack.prototype.pop = function() {
	if( this.__a.length > 0 ) {
		return this.__a.pop();
	}
	return null;
}

Stack.prototype.size = function() {
	return this.__a.length;
}

Stack.prototype.toString = function() {
	return '[' + this.__a.join(',') + ']';
}

var i;
var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log( s.toString() );

while( i = s.pop() ) {
	console.log( i );
}