function Rectangle(width,height) {
    this.width=width;
    this.height=height;
}
Rectangle.prototype.square=function() {
    return this.width*this.height;
}
Rectangle.prototype.perimeter=function() {
    return this.width*2+this.height*2;
}
const rectangle=new Rectangle(3,5);
console.log(rectangle.square());
console.log(rectangle.perimeter());
//re.displ();