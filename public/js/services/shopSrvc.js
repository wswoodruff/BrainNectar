/*
    Rule of simplicity and seperation of concerns:
    This module breaks it, but just a tiny bit.
    
    I might be breaking it in other places but I got rid of a service to
    consolidate it with this one, since it was overkill to have a service
    just to keep track of one integer (qtyInCart) per shop item.
    
    This module holds the items in the shop and holds a function to return
    the number of items in the cart.
    
    Seperation of concerns is probably something I could use some work on.
    I'd appreciate any *pointers. Hah. Ha... Yeeah.
*/

module.exports = function() {
    
    var shopItems = [
        {
            name: "Brain Nectar Case of 6",
            price: "10.00",
            image: {
                src: "../../img/can.jpg",
                alt: "Brain Nectar can"
            },
            qtyInCart: 0
        },
        {
            name: "Shirt",
            price: "15.00",
            image: {
                src: "../../img/shirt.png",
                alt: "Brain Nectar shirt"
            },
            qtyInCart: 0
        },
        {
            name: "Mug",
            price: "10.00",
            image: {
                src: "../../img/mug.jpg",
                alt: "Brain Nectar mug"
            },
            qtyInCart: 0
        }
    ];
    
    function findShopItem(itemName) {
        shopItems.map(function(item) {
            if(item.name == itemName) {
                return item;
            }
        })
    }
    
    return {
        getShopItems: function() {
            return shopItems;
        },
        getItemsInCart: function() {
            // Oh functional programming goodness.
            var items = shopItems.filter(function(item) {
                if(item.qtyInCart > 0) {
                    return true
                } else {
                    return false
                }
            });
            return items;
        },
        getCartSubtotal: function() {
            var total = 0;
            this.getItemsInCart().map(function(item) {
                total += item.price * item.qtyInCart;
            })
            return total;
        },
        increaseQtyInCart: function(itemName) {
            shopItems.map(function(item) {
                if(item.name == itemName) {
                    item.qtyInCart++;
                }
            })
        },
        decreaseQtyInCart: function(itemName) {
            var shopItem;
            shopItems.map(function(item) {
                if(item.name == itemName) {
                    shopItem = item;
                }
            })
            if(shopItem.qtyInCart != 0) {
                shopItem.qtyInCart--;
            }
        }
    }
}
