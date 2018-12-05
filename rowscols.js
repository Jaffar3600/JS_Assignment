function cTable()
{
    rn = window.prompt("Enter no.of Rows",1);
    cn = window.prompt("Enter No.of Columns:",1);
    for(var r=0;r<parseInt(rn,10);r++)
    {
        var x=document.getElementById("myTable").insertRow(r);
        for(var c=0;c<parseInt(cn,10);c++)
        {
            var y = x.insertCell(c);
            y.innerHTML="Row-"+r+"column-"+c;
        }
    }
}