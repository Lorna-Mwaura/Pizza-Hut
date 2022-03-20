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
