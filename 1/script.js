const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList{
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this.allProducts = [];

        // this._fetchProducts();
        // this._getProducts()
        //     .then(data => {
        //         this.goods =[...data];
        //         this._render();
        //     });

        this.getRequest(`${API}/catalogData.json`)
            .then((data) => {
                console.log(data)
                this.goods =[...data];
                this._render();
                this._addButton();
            })
            .catch((error) => console.log(error));

    }

     getRequest = (url) => {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET',url,true);

            xhr.onreadystatechange = () => {

                if (xhr.readyState !==4) return ;

                if (xhr.status !== 200) {
                    reject(`Error ${xhr.status} ${xhr.statusText}`);
                } else {
                    resolve( JSON.parse(xhr.responseText));
                }

            };
            xhr.send();
        })
    };

    // _fetchProducts(){
    //     getRequest(`${API}/catalogData.json`,(data) =>{
    //         this.goods = JSON.parse(data);
    //         this._render();
    //     })
    // }

    // _getProducts() {
    //     return fetch(`${API}/catalogData.json`)
    //         .then(response => response.json())
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    _render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject)
            block.insertAdjacentHTML("beforeend", productObject.render());

        }
        this._sumPrice();
    }

    _sumPrice(){
        let sum = 0
        for (let product of this.goods ){
            sum += product.price
        }
        console.log("Суммарная стоимость всех товаров: " + sum)
    }

    _addButton(){
        let items = document.querySelectorAll('.goods-item')
        for (let Item of items) {
            Item.addEventListener('click',() => {
                this._addItemInBasket(Item.dataset.id);
                console.log(Item.dataset.id)
            });
        }
    }

    _addItemInBasket(id){
        document.querySelector('.basket_elements').insertAdjacentHTML("beforeend", `<div class="desc"> в козине айди = ${id} </div>`)
    };

}

class ProductItem {
    constructor(product, src = "placeholder.png") {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.src = src;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id_product}">
                    <img class="img_Goods" src = ${this.src} alt="placeholder">
                    <div class="desc">
                        <h3 class="title">${this.product_name}</h3>
                        <p class="price">${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                    </div>
                 </div>`;
    }
}

class BasketList {
    constructor(container = ".basket") {
        this.container = container;
        this.selectProducts = []
        this._addProducts();
    }
    _addProducts() {

    }

}

class BasketItem extends ProductItem{

    constructor(product, src = "placeholder.png") {
        super(product,src);
    }
    render() {

    }

}

new ProductList();
window.addEventListener('load',() => {
    document.querySelector('.cart-button').addEventListener('click',() => {
        document.querySelector('.basket_open').classList.toggle('basket_close')
    });
});