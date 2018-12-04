
           
           function fun(){
        var num=prompt("Select your choice to perform operation: \n"+"1.Add \n"+ "2.Subract \n"+"3.Multiply \n"+"4.Divide \n"+"5.Exponent \n"+"6.Mean \n"+"7.Quit\n");
           if(num<=7)
           {
           
               if(num==1)
               {
                   var a= prompt("Enter 1st number to Add:");
                   var b= prompt("Enter 2nd number to Add:");
                   var Addition =parseInt(a)+parseInt(b);
                   document.getElementById("res").value=Addition;
               } 
               
               if(num==2)
               {
                   var a= prompt("Enter 1st number to Subtraction:");
                   var b= prompt("Enter 2nd number to Subtraction:");
                   var Sub = a-b;
                   document.getElementById("res").value=Sub;
               }     
               
               if(num==3)
               {
                   var a= prompt("Enter 1st number to Multiply:");
                   var b= prompt("Enter 2nd number to Multiply:");
                   var Mul = a*b;
                   document.getElementById("res").value=Mul;
               }
               
               if(num==4)
               {
                   var a= prompt("Enter 1st number for Division:");
                   var b= prompt("Enter 2nd number for Division:");
                   var Div = a/b;
                   document.getElementById("res").value=Div;
               }  
               
               if(num==5)
               {
                   var a= prompt("Enter 1st number");
                   var b= prompt("Enter 2nd number");
                   var Expo = Math.pow(a,b);
                   document.getElementById("res").value=Expo;
               }
               
               if(num==6)
               {
                   var sum=0;
                   var no=0;
                   var Mean;
                   for(var i=1;i<='***';i++){
                       sum[i] = prompt('Enter Element ' + (i+1));
                       no=no+1;

                   var x= prompt("Enter elements to find mean:");
                   sum= sum+x;
                   if(x=='***')
                   {
                       Mean =sum/no;
                   }
                   else{
                       Mean =sum/no;
                   }
                   
                   document.getElementById("res").value=Mean;
               } 
           }
               if(num==7)
               {
                   alert(" Please go home and sleep ");
               }  
                 
         }
           else{
               document.write("Please choose from 1 to 7");
           }
       }
       