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
            if(item.name == itemName) {
                return item;
            }
        })
        return false;
    }

    function removeCartItem(itemName) {
        cartItems.map(function(item, index) {
            if(item.name == itemName) {
                cartItems.splice(index, 1);
            }
        })
    }

    return {
        getCartItems: function() {
            return cartItems;
        },
        setCartItemQuantity: function(item, quantity, callback) {
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
