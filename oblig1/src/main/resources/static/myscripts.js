const movieOrders=[];
function showOrders(){     //show registered orders
    let output= "<table><tr><th>Movie</th><th>Quantity</th><th>First Name</th><th>Surname</th><th>Phone Number</th><th>Email</th></tr>"
        for (let m of movieOrders){
            output += "<tr>";
            output += "<td>"+m.film+"</td>" +
                "<td>"+m.quantity+"</td>"+
                "<td>"+m.firstName+"</td>"+
                "<td>"+m.surname+"</td>"+
                "<td>"+m.phoneNumber+"</td>"+
                "<td>"+m.email+"</td>";
                output += "</tr>";
        }
    output += "</table>";
    document.getElementById("newOrder").innerHTML=output;
    console.log(output);
    }


function newOrder() {   //register new orders
    const film = document.getElementById("film").value;
    const quantity = document.getElementById("quantity").value;
        if(quantity <= 0){
            document.getElementById("wrongQt").innerHTML="Please input a valid quantity.";
        }
        if(quantity===""){
            document.getElementById("wrongQt").innerHTML="Quantity cannot be empty.";
        }
        else{
            document.getElementById("wrongQt").innerHTML="";
        }
    const firstName = document.getElementById("firstName").value;
        if(firstName===""){
            document.getElementById("noName").innerHTML="Please input a name.";
        }
        else{document.getElementById("noName").innerHTML = "";}
    const surname = document.getElementById("surname").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;


    const order = {
        film: film,
        quantity: quantity,
        firstName: firstName,
        surname: surname,
        phoneNumber: phoneNumber,
        email: email
    };
    movieOrders.push(order);
    //reset input
    document.getElementById("film").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";
    showOrders()
}
