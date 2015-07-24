/*
    This module holds items featured in the shop, (should be grabbed
    from db), and keeps track of their quantities in the cart.
    
    TODO: Use ngStorage to persist the cart across browser tabs and refreshes
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
        getCartTotal: function() {
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
