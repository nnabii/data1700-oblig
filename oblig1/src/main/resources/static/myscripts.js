const movieOrders=[];  //empty array for movie orders
function showOrders(){   //function to show registered orders in a table
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
        //show the table where the id="newOrder"
    document.getElementById("newOrder").innerHTML=output;
    console.log(output);
    }

    //input validations for all the input boxes and dropdown list
function validateFilm(film){  //validate a movie is chosen
    const option=document.getElementById("optionzero").value;
    if(film === option){
        document.getElementById("noMovie").innerHTML="You must choose a movie.";
        return false;
    }
    if(film === ""){
        document.getElementById("noMovie").innerHTML="You must choose a movie.";
        return false;
    }else{
        document.getElementById("noMovie").innerHTML="";
        return true;
    }
}

function validateQuantity(quantity){ //validate the right quantity
    const value=Number(quantity);
    if(quantity === ""){
        document.getElementById("wrongQt").innerHTML="You must enter a quantity.";
        return false;
    }if(value === 0){
        document.getElementById("wrongQt").innerHTML="Quantity cannot be 0.";
        return false;
    }if(0 > value ){
        document.getElementById("wrongQt").innerHTML="Quantity cannot be less than 0.";
        return false;
    }else{
        document.getElementById("wrongQt").innerHTML="";
        return true;
    }
}
function validatefirstName(firstName){  //validate input name with at least 2 letters
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}/;
    const ok = regexp.test(firstName);
    if(firstName === ""){
        document.getElementById("noName").innerHTML="You must enter a first name.";
        return false;
    }if(!ok){
        document.getElementById("noName").innerHTML="Please input a valid first name.";
        return false;
    }                else{
        document.getElementById("noName").innerHTML="";
        return true;
    }
}

function validateSurname(surname){  //validate input name with at least 2 letters
    const regexp = /^[a-zA-ZæøåÆØÅ. \-]{2,20}/;
    const ok = regexp.test(surname);
    if(surname===""){
        document.getElementById("noSurname").innerHTML="You must enter a surname.";
        return false;
    }if(!ok){
        document.getElementById("noSurname").innerHTML="Please input a valid surname.";
        return false;
    }                else{
        document.getElementById("noSurname").innerHTML="";
        return true;
    }
}

function validatePhonenumber(phoneNumber){  //validate number with 8 digits
    const regexp = /^[0-9]{8}/;
    const ok = regexp.test(phoneNumber);
    if(phoneNumber==="") {
        document.getElementById("noNumber").innerHTML="You must input a phone number";
        return false;
    }if(!ok){
        document.getElementById("noNumber").innerHTML="Phone number has to be of 8 digits.";
        return false;
    }else{
        document.getElementById("noNumber").innerHTML="";
        return true;
        }

}

function validateEmail(email){   //validate email with a pattern
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]{2}/;
    const ok = regexp.test(email);
    if(email===""){
        document.getElementById("noEmail").innerHTML="You must input an email.";
        return false;
    }if(!ok){
        document.getElementById("noEmail").innerHTML="Please input a valid email.";
        return false;
    }else{
        document.getElementById("noEmail").innerHTML="";
        return true;
    }
}


function newOrder() {   //function to register new orders
    const film = document.getElementById("film").value;
    const quantity = document.getElementById("quantity").value;
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    const filmOK = validateFilm(film);
    const quantityOK = validateQuantity(quantity);
    const fnameOK = validatefirstName(firstName);
    const surnameOK = validateSurname(surname);
    const phoneOK = validatePhonenumber(phoneNumber);
    const emailOK = validateEmail(email);

    //to check if all input has values
    if(filmOK && quantityOK && fnameOK && surnameOK && phoneOK && emailOK){
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
        showOrders();
    }
}

function deleteOrders(){   //function to delete all the orders registered
    movieOrders.splice(0,movieOrders.length);
    showOrders();
}
