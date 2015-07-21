var _ = require("../../bower_components/lodash/lodash.js");

module.exports = function(ShopItems) {
    
    /*
        Objects in 'cartItems' are identical to objects in the
        'shopItems' array (inside the ShopItems service) except
        for the addition of a
        
        'quantity' property
    */
    var cartItems = [];
    
    function findItemInCart(itemName) {
        cartItems.map(function(item) {
            if(item.name === itemName) {
                return item;
            }
        })
        return false;
    }
    
    function removeCartItem(itemName) {
        cartItems.map(function(item, index) {
            if(item.name === itemName) {
                cartItems.splice(index, 1);
            }
        })
    }
    
    return {
        getCartItems: function() {
            return cartItems;
        },
        setCartItemQuantity: function(shopItem, quantity, callback) {
            /*
                let's do a shallow clone of the shop object so we don't mutate it
                in the shop's array with a quantity property.
            */
            var item = _.clone(shopItem);
            
            // we'll use the item's name property as a 'primary key'
            var itemInCart = findItemInCart(item.name);

            if(itemInCart) {
                if(quantity = 0) {
                    removeCartItem(item.name);
                } else {
                    itemInCart.quantity = quantity;
                }
            } else {
                item.quantity = 1;
                cartItems.push(item);
            }
        }
    }
}
