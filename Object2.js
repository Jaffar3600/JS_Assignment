var amitabh = {name:"amitabh", surname:"bachan"}
var abhishek = Object.create(amitabh);
console.log(amitabh.name);
console.log(amitabh.surname);
abhishek.name= "abhishek";
console.log(abhishek.name);
//abhishek.name= "abhishek";
console.log(abhishek.surname);