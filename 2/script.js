class HamburgerPrice {
    constructor() {
        this.size = "";
        this.cheese = false;
        this.salad = false;
        this.potatoes = false;
        this.spices = false;
        this.mayonnaise = false;
        this.composition = {  price: 0, calories : 0};
        this._selectionProducts();
        this._calculate();
        this._render();
    }

    _selectionProducts(){
        while (true){
            this.size = prompt("Выбирите размер бургера: 1 - Маленький || 2 - Большой");
            if (this.size === "1" || this.size === "2"){
                break
            }
            alert("Для выбора размера введите цифру 1 или 2");
        }

        this.spices = confirm("Добавлять специи ?");
        this.mayonnaise = confirm("Добавлять майонез ?");
        this.cheese = confirm("Добавлять сыр ?");
        this.salad = confirm("Добавлять салат ?");
        this.potatoes = confirm("Добавлять картошку ?");

    }

    _calculate(){
        let price = this.composition.price;
        let calories = this.composition.calories;
        switch (this.size){
            case "1":
                price += 50;
                calories += 20;
                break;
            case "2":
                price += 100;
                calories += 40;
        }
        if (this.cheese) {
            price += 10;
            calories += 20;
        }
        if (this.salad) {
            price += 20;
            calories += 5;
        }
        if (this.potatoes) {
            price += 15;
            calories += 10;
        }
        if (this.spices) {
            price += 15;
            calories += 0;
        }
        if (this.mayonnaise) {
            price += 20;
            calories += 5;
        }

        this.composition = {  price: price, calories : calories };
    }

    _render(){
        alert(`Стоимость бургера: ${this.composition.price} \u20bd | Калорийность бургера: ${this.composition.calories} калл`)
    }

}
new HamburgerPrice()