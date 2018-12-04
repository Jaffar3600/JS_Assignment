function Person(fname,lname){
this.fname = fname;
this.lname = lname;
this.fun = function(){
        console.log(this.fname);
        console.log(this.lname);
    }
}
var person = new Person("amitabh","Bachan");
var person2 = new Person("abhishek","Bachan");

console.log(person);
console.log(person2);

person.fun();
person2.fun();