class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    print(){
        console.log(this.fname,this.lname);
    }
}
var person =new Person("Amitabh","bachan");
//Person.print();
console.log(person);