
    var order1 = 
        {
            customer:"Saif Marwan",
            address:{
                latitude:33.3266,
                longitude:44.3761
            },
            items:
                {
                    name:"Milk",
                    count:1,
                    price:1.5,
                    total:1.5
                }
            ,
            total:1.5,
            discount:0,
            totalAfterDiscount:1.5
        };

    var order2 =  
        {
            customer:"Adel Ahmed",
            address:{
                latitude:33.3266,
                longitude:44.3761
            },
            items:
                {
                    name:"Eggs",
                    count:30,
                    price:0.20,
                    total:6
                }
            ,
            total:6,
            discount:20,
            totalAfterDiscount:4.8
        };

    console.log(order1.customer, '\n', order1.address.latitude, order1.address.longitude, '\n',
     order1.items.name, order1.items.count, order1.items.price, order1.items.total, '\n', order1.total, order1.discount, order1.totalAfterDiscount);

     console.log(order2.customer, '\n', order2.address.latitude, order2.address.longitude, '\n',
     order2.items.name, order2.items.count, order2.items.price, order2.items.total, '\n', order2.total, order1.discount, order2.totalAfterDiscount);

