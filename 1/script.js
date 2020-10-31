class ProductList{
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this._render();
    }
    _fetchProducts(){
        this.goods = [
            { id: 1, title: 'Shirt', price: 1500 },
            { id: 2, title: 'Socks', price: 500 },
            { id: 3, title: 'Jacket', price: 3500 },
            { id: 4, title: 'Shoes', price: 2500 },
        ];
    }

    _render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject)
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
        this._sumPrice()
    }
    _sumPrice(){
        let sum = 0
        for (let product of this.goods ){
            sum += product.price
        }
        console.log("Суммарная стоимость всех товаров: " + sum)
    }
}

class ProductItem {
    constructor(product, src = "placeholder.png") {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.src = src;
    }

    render() {
        return `<div class="goods-item" data-id="${this.id}">
                    <img class="img_Goods" src = ${this.src} alt="placeholder">
                    <div class="desc">
                        <h3 class="title">${this.title}</h3>
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
// const products = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];
//
// const renderProductsItem = (title, price, src = "placeholder.png") => {
//     return `<div class="goods-item">
//                 <img class="img_Goods" src = ${src} alt="placeholder">
//                 <h3 class="title">${title}</h3>
//                  <p class="price">${price}</p>
//              </div>`;
// };
//
// const renderGoodsList = (list) => {
//     let ProductsList = list.map(({title, price}) => renderProductsItem(title, price)).join("");
//     document.querySelector('.goods-list').innerHTML = goodsList;
// }
//
// renderGoodsList(products);