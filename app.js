/* function Person(name){
    this.name = name
}
var p1=new Person("twinkle cats")
console.log(p1); */

/* var Person=function(name,age){
    this.name=name;
    this.age=age

    this.profile=function(){
        console.log('My Details is : '+this.name+' ('+this.age+')');        
    }
}
var p1=new Person('Mahamud Hasan Imon',24);
p1.profile()
var p2=new Person('Shegufa Taranjum',21)
p2.profile() */
/* console.log(person) */
/* 
for(var i in person){
    console.log(i);
} */
/* console.log(Object.keys(person)); */
/* 
var descriptor=Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor); */
/* let baseObj=Object.getPrototypeOf(person)
let descriptor=Object.getOwnPropertyDescriptor(baseObj, 'toString')
console.log(descriptor); */
/* Object.defineProperty(person, 'name',{
    enumerable:false,
    writable:false,
    configurable:false,
    value:'Mahamud Hasan Imon'
}) */

/* function Person(name){
    this.name=name
}
Person.prototype.PI=3.1416
var p1=new Person('HM Nayem')
var p2=new Person('Mahamud')
console.log(p1);
console.log(p2); */
/* console.log(Object.getPrototypeOf(p1));
console.log(Person.prototype); */
/* var Square=function(width){
    this.width=width;
    this.getWidth=function(){
        console.log('My width is '+this.width);
        this.draw();
    }
} */
/* Square.prototype={
    draw:function(){
        this.getWidth()
        console.log('Draw')
    },
    toString:function(){
        return 'My width is = '+this.width
    }
}
var sqr1=new Square(10)
var sqr2=new Square(15)
console.log(sqr1.hasOwnProperty('draw'));
console.log(Object.keys(sqr1)) */
function Shape() {}
Shape.prototype = {
  common: function () {
    console.log("I am common");
  },
};

function Square(width) {
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function () {
  console.log("Drawing");
};

var shape = new Shape();
var sqr1 = new Square(10);


//shape-Shape-Object
//sqr-Square-Object
//sqr-Square-shape-object

function Circle(){

}
Circle.prototype=Object.create(Shape.prototype)

var circle=new Circle()