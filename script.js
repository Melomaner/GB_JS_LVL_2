const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price, src = "placeholder.png") => {
    return `<div class="goods-item">
                <img class="img_Goods" src = ${src} alt="placeholder">
                <h3 class="title">${title}</h3>
                 <p class="price">${price}</p>
             </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(({title, price}) => renderGoodsItem(title, price)).join("");
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);