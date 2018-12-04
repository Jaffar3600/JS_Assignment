var n=100;
count=0;
for( var i=2;i < n/2;i++){
    if(n%i==0)
    count =count+1;
    
}
if(count==0)
console.log("prime number");
else
console.log("non prime");