var savings = {
    accountNumber:1234,
    accountHolderName:"Jaffar",accountBalance:100000, isSalary:true, withdraw(amount){
        if(amount<=this.accountBalance){
            this.accountBalance-=amount;
        }
        else{
            console.log("insufficient balance");
        }
        },
        getCurrentBalance(){
            console.log(this.accountBalance);
        }
    }
    var current = {
        accountNumber:1234,
        accountHolderName:"Jaffar",
        accountBalance:10000,
        odLimit:70000,
        withdraw(amount){
            var limit = parseInt(this.accountBalance+this.odLimit);
            console.log(limit);
            if(amount<=limit){
                this.accountBalance-=amount;

            }
            else{
                console.log("Insufficient Balance");
            }
        },
        getCurrentBalance(){
            console.log(this.accountBalance);
        }
    }
    savings.withdraw(600);
    savings.getCurrentBalance();

    current.withdraw(10000);
    current.getCurrentBalance();
