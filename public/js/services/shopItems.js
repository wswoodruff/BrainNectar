module.exports = function() {
    
    var shopItems = [
    {
        name: "Shirt",
        price: "15"
    },
    {
        name: "Brain Nectar Case of 6",
        price: "20"
    }
    ];

    return {
        getShopItems: function() {
            return shopItems;
        }
    }
}
