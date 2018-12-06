var amitabh= new Object();
amitabh.fname="Amitabh";
amitabh.lname="Bachan";
amitabh.age=70;
amitabh.skills=["Actor","entrepreneur"];
amitabh.address={city:"Mumbai",pincode:533302};
amitabh.dateOfBirth=new Date("1955-08-05").toDateString();
amitabh.married=true;
amitabh.profession="Actor";
amitabh.print=function(){
    console.log(this.fname,this.lname,this.age,this.skills,this.address,this.dateOfBirth,this.married,this.profession);
}
var abhishek=Object.create(amitabh);
abhishek.fname="Abhishek";
abhishek.age=45;
abhishek.dateOfBirth=new Date("1970-03-09").toDateString();

amitabh.print();
abhishek.print();


