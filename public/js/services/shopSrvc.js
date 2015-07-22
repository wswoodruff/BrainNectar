module.exports = function() {
    
    var shopItems = [
    {
        name: "Brain Nectar Case of 6",
        price: "20",
        image: {
            src: "../../img/can.jpg",
            alt: "Brain Nectar can"
        }
    },
    {
        name: "Shirt",
        price: "15",
        image: {
            src: "../../img/shirt.png",
            alt: "Brain Nectar shirt"
        }
    },
    {
        name: "Mug",
        price: "10",
        image: {
            src: "../../img/mug.jpg",
            alt: "Brain Nectar mug"
        }
    }
    ];
    
    return {
        getShopItems: function() {
            return shopItems;
        }
    }
}
