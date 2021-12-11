function Product(id, name, count) {
    this.id = id;
    this.name = name;
    this.count = count;
}

// let visitCount = localStorage.getItem('visitCount');
// if(visitCount==null) visitCount=0;

// visitCount =  parseInt(visitCount);
// visitCount++;

// localStorage.setItem('visitCount',visitCount)

// console.log(visitCount)
let sup = document.querySelector('.basket sup');
let items = localStorage.getItem('basketItems')


if (items != null) {
    items = JSON.parse(items);
    sup.innerText = items.length;
}



let basketBtns = document.querySelectorAll('.basket-btn');

basketBtns.forEach(elem => {
    elem.addEventListener('click', function () {

        let id = this.parentNode.parentNode.getAttribute('data-id');
        id = parseInt(id);

        let name = this.previousElementSibling.previousElementSibling.innerText;
        console.log(name)

        let basketItems = [];
        let basketItemsStr = localStorage.getItem('basketItems')
        if (basketItemsStr != null) {
            basketItems = JSON.parse(basketItemsStr)
        }

        let productIndex = basketItems.findIndex(x => x.id == id);

        if (productIndex == -1) {
            product = new Product(id, name, 1);
            basketItems.push(product);
            elem.innerText = "Remove Item"
            elem.classList.replace("btn-primary", "btn-danger")
        }
        else {
            basketItems.splice(productIndex, 1)
            elem.classList.replace("btn-danger", "btn-primary")
            elem.innerText = "Add To Basket"

        }

        sup.innerText = basketItems.length;
        localStorage.setItem('basketItems', JSON.stringify(basketItems))
    })
})