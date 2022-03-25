let userData = document.querySelector("#form1")
function Order(pizzaSizes,crust,toppings,delivery) {
    this.pizzaSizes = pizzaSizes;
    this.crust = crust;
    this.toppings = toppings;
    this.delivery = delivery;
    this.total =parseInt(pizzaSizes) + parseInt(crust) + parseInt(toppings)
}

userData.addEventListener("submit", (e) => { 
e.preventDefault()
let pizzaSizes = userData.pizzaSizes.value
let crust = userData.crust.value
let toppings = userData.toppings.value
let delivery = userData.delivery.value
let order = new Order (pizzaSizes,crust,toppings)

if (delivery == "delivery") {
    let totalFee = order.total + 150 
    document.querySelector("#bill").textContent = "Your order amount is " + totalFee
    document.querySelector("#customer").style.display = "block"
} else {
    document.querySelector("#bill").textContent = "Your order amount is " + order.total
}
})
let customerData = document.querySelector("#customer")
customerData.addEventListener("submit",(e) => {
e.preventDefault()
let userName = customerData.userName.value
let location = customerData.location.value
alert ("Hi "+ userName + " your delivery will be done at " + location)
})