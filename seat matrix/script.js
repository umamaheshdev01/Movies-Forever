document.getElementById("hifu").innerHTML= localStorage.getItem("theatre")

let seats=""
let count=0
let total=0

function seat(p)
{
    let a = document.getElementById(p)

    if(a.className=="seat selected")
    {
        count-=1;
        total-=150;

        document.getElementById("count").innerHTML=count
        document.getElementById("total").innerHTML=total

        a.className="seat"

      seats= seats.replace(p+" ","")

    }


    
    else
    {
        count+=1;
        total+=150;

        document.getElementById("count").innerHTML=count
        document.getElementById("total").innerHTML=total

        a.className="seat selected"


        seats+=p+" "
    }


}

function final(){
    {
        if(count!=0)
        {
        localStorage.setItem("seats",seats)
        localStorage.setItem("price",String(total))
        localStorage.setItem("persons",String(total/150))

        let x= confirm("Booking Confirmation")

        if(x==true)
        {
            location.assign('../payment portal/payment.html')
        }
    }
    }
}