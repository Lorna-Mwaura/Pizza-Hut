(function () {


    function Pizza(name = '', size={}, crust={}, topping={}, orders = 1) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.orders = orders;
        this.orders = parseInt(orders)
    }

    let pizzaSizes = [{
            type: 'Large',
            price: 1500

        },
        {
            type: 'Medium',
            price: 1200

        },
        {
            type: 'Small',
            price: 800

        }
    ];

    let pizzaCrusts = [

        {
            type: 'Crispy',
            price: 150

        },
        {
            type: 'Stuffed',
            price: 100

        },
        {
            type: 'Glutten-Free',
            price: 120

        }

    ];

    let pizzaToppings = [

        {
            type: 'Bacon',
            price: 150

        },
        {
            type: 'Cheese',
            price: 100

        },
        {
            type: 'Mushroom',
            price: 100
        },
        {
            type: 'Avocado',
            price: 80
        }

    ];

    let pizzaSizeInput = document.getElementById('size');
    let  pizzaCrustInput = document.getElementById('crust')
     let pizzaToppingInput = document.getElementById('topping');
      let  pizzaNameInput = document.getElementById('name');
      let  customerInput = document.getElementById('customer');
       let phoneNumberInput = document.getElementById('contact-info');
       let orderNumberInput = document.getElementById('order-number');
     let  deliveryInput = document.getElementById('delivery');

        for (let i = 0; i < pizzaSizes.length; i++) {
            let el = document.createElement("option");
            el.textContent = `${pizzaSizes[i].type} - Ksh. ${pizza_sizes[i].price}`;
            el.value = pizzaSizes[i].type;
 
        };
  
        for (let i = 0; i < pizzaCrusts.length; i++) {
            let el = document.createElement("option");
            el.textContent = `${pizzaCrusts[i].type} - Ksh. ${pizza_crusts[i].price}`;
            el.value = pizza_crusts[i].type;
            
        }
        for (let i = 0; i < pizzaToppings.length; i++) {
            let el = document.createElement("option");
            el.textContent = `${pizzaToppings[i].type} - Ksh. ${pizza_toppings[i].price}`;
            el.value = pizzaToppings[i].type;
            
    };
    let pizzaName = '';
       let pizzaCrust = {};
       let pizzaTopping = {};
       let pizzaSize = {};
       let customerName = '';
       let customerPhoneNumber = '';
      let  orders = 0;
        let deliveryOption = '';
        pizzaSizeInput.addEventListener('change', (e) => {
            pizzaSize = e.target.value;
        });
            pizzaNameInput.addEventListener('change', (e) => {
                pizzaName = e.target.value;
            });
       
        pizzaCrustInput.addEventListener('change', e => {
            pizzaCrust = e.target.value;
        });
            pizzaToppingInput.addEventListener('change', e => {
                pizzaTopping = e.target.value;
            });

            customerInput.addEventListener('change', e => {
                customerName = e.target.value;
            });

            phoneNumberInput.addEventListener('change', e => {
                customerPhoneNumber = e.target.value;
            });

            orderNumberInput.addEventListener('change', e => {
                orders = e.target.value;
            });

            deliveryInput.addEventListener('change', e => {
                deliveryOption = e.target.value;
            });

            document.getElementById('order-form').addEventListener('submit', (e) => {
                document.getElementById('order-forms').addEventListener('submit', (e) => {
                    e.preventDefault();
                    console.log(`Pizza Name: ${JSON.stringify(pizza_name)}`);
                    console.log(`Pizza Size: ${JSON.stringify(pizza_size)}`);
                    console.log(`Pizza Crust: ${JSON.stringify(pizza_crust)}`);
                    console.log(`Pizza Topping: ${JSON.stringify(pizza_topping)}`);
                    alert('Form Submitted !');
                    if (
                        pizzaCrustInput.value === "" ||
                        pizzaSizeInput.value === "" ||
                        pizzaToppingInput.value === "" ||
                        nameInput.value === "" ||
                        pizzaNameInput.value === "" ||
                        phoneNumberInput.value === "" ||
                        orderNumberInput.value === "" ||
                        deliveryInput.value === ""
                    ) {
                        alert("Please fill all the fields !");
                    }

                    Pizza.prototype.getTotal = function () {
                        return (this.size.price + this.crust.price + this.topping.price) * this.orders;
                    };
                    let pizza = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping, orders);

                    console.log(`Pizza:`);
                    console.log(pizza);
                    alert(total);
                });
            });

        });
    });
});