const orders=[];
let html=""
for(let i of orders){
    html+=
        "<td>"+i.film+"</td>"+
        "<td>"+i.firstName+"</td>"+
        "<td>"+i.quantity+"</td>"+
        "<td>"+i.firstName+"</td>"+
        "<td>"+i.surname+"</td>"+
        "<td>"+i.phoneNumber+"</td>"+
        "<td>"+i.email+"</td>";
}
html+="";
document.write(html);
function addOrders(){
    let film = document.getElementById("film").value;
    let quantity = document.getElementById("quantity").value;
    let firstName = document.getElementById("firstName").value;
    let surname = document.getElementById("surname").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    orders.push({film:film,
        quantity:quantity,
        firstName:firstName,
        surname: surname,
    phoneNumber:phoneNumber,
    email:email});
    console.log("check the array after you added one more object");
    for(let i of orders){
        console.log(i.film, i.quantity, i.firstName, i.surname, i.phoneNumber, i.email);
    }
    document.getElementById("newOrders").innerHTML = html;
}