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