const orders=[];
let html=""
for(let i of orders){
    html+=
        "<td>"+i.film+"</td>"
}
html+="";
function addOrders(){
    let film = document.getElementById("film").value;
    orders.push({film:film});
    document.getElementById("newOrders").innerHTML = html;
}