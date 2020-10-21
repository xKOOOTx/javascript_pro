class ProductList {
  goods;

  constructor(container = '.products', calc = '.calculate') {
    this.container = container;
    this.calc = calc;
    this.goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.render();
    this.getSum();
  }

  _fetchGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
  getSum() {
    const calcBlock = document.querySelector(this.calc);
    let resultSum = this._allProducts.reduce((sum, current) => sum += current.price, 0);
    calcBlock.insertAdjacentHTML('beforeend', `Общая стоимость товаров ${resultSum}`)
  }

}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const list = new ProductList();




/*class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class = 'goods-item'><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

const listList = new GoodsList();*/


/*class BucketList {
  sumArr;

  constructor(container = '.goodsList') {
    this.container = container;
    this.sumArr = [];
    this.summaryArr = [];

    this.#render();
  }

  #render() {
    const sumBlock = document.querySelector(this.container);

    for(let product of this.sumArr) {
      const productObj = new GoodsList(product);

      this.summaryArr.push(productObj);

      sumBlock.insertAdjacentHTML('beforeend', productObj.getNormalHTML());
    }

}*/

// class GoodsList {
//   constructor(sum) {
//     this.price = sum.price
//   }
//
//
// }

// function summary() {
//   for(let summaryPrice of list.goods[''].price) {
//
//     console.log(summaryPrice);
//   }
// }
// summary();








/*class Basket {

  constructor(container = '.baskets') {
    this.container = container;
    this.#basketList = []; // список товаров
    this._allList = [];  // каждый товар

    this._fetchBasketList();
    this.#render();
  }

  _fetchBasketList() {
    this.#basketList = [];
  }

  #render() {
    const schedule = document.querySelector(this.container);

    for (let product of this.#basketList) {
      const basketObject = new BasketItem(product);

      this._allList.push(basketObject);

      schedule.insertAdjacentHTML('beforeend', basketObject.getBasketHTML());
    }
  }
}

class BasketItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  getBasketHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

const basket = new Basket();*/




// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
