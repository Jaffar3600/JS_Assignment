var person1={
    fname:"Jaffar",lname:"Shaik",age:22,
    skills:["Java","dot Net"],
    address: {city:"Guntur",Pincode:522002},
    dateOfBirth:new Date("1996-10-30").toDateString(), Married:false,
    profession:"Analyst",
    prints(){
        console.log(this.fname,this.lname,this.age,this.skills,
        this.address,this.dateOfBirth,this.Married,this.profession)
    }
}

var person2 = { fname:"Pawan Kalyan",lname:"Konidela",age:45,skills:["actor","politician"],
address: add={city:"Hyderabad",Pincode:533022},
dateOfBirth:new Date("1967-09-02").toDateString(),Married:true,
profession:"politics",
prints(){
    console.log(this.fname,this.lname,this.age,this.skills,
        this.address,this.dateOfBirth,this.Married,this.profession)

}
}
person1.prints();
person2.prints();
console.log(this.lname);