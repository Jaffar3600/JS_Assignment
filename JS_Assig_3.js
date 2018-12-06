var amitabh ={
    fname:amitabh="amitabh",
    lname:"Bachan",
    age:70,
    skills:["Actor","Entrepreneur"],
    address:{city:"Mumbai",Pincode:533002},
    DateOfBirth:new Date("1955-08-09").toDateString(),Married:true,
    Profession:"Actor"}
    amitabh.print=function(){
        console.log(this.fname,this.lname,this.age,this.skills,this.address,this.DateOfBirth,this.Married,this.Profession);

    }

var abhishek = Object.create(amitabh);
abhishek.fname="abhishek";
abhishek.age=45;
DateOfBirth:new Date("1970-06-04").toDateString();

var aradhya = Object.create(abhishek);
aradhya.fname="Aradhya Papa";
aradhya.age=10;
aradhya.skills=["dancing"];
aradhya.DateOfBirth=new Date("2008-06-04").toDateString();
aradhya.Married="false";

Profession="student";
 aradhya.print();
 amitabh.print();
 abhishek.print();