const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise
/*let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
};*/

/*let getRequest = (url) => {                     //Переименовал переменную с зарезервированного Promise на
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if (xhr.status !== 200) {
          console.log('Error');
        } else {
          reject(xhr.responseText);
        }
      }
    };
    xhr.send();
  })
};*/


// –--------------------------------

class ProductList {
  goods;
  basket;

  constructor(container = '.products', summary = '.summary') {
    this.container = container;
    this.summary = summary;
    this.goods = [];
    this._allProducts = [];
    this.basket = [];

    // this._fetchGoods();
    this.getProducts().then((data) => {
      this.goods = [...data];
      // this.goods = Array.from(data);
      this.render();
    });

    this.addToBasket().then((newData) => {
      this.basket = [];
    });

    this.deleteFromBasket().then((newData) => {
      this.basket = [];
    });

    this.getBasket().then((data) => {
      this.basket = [...data];
    });

    console.log(this.sum());
    console.log(this.addToBasket());
    console.log(this.deleteFromBasket());
    console.log(this.getBasket());
    // console.log(this.pushToBasket());
    console.log(this.basket);

  }

  addToBasket() {
    return fetch(`${API}/addToBasket.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  pushToBasket() {
    this.addToBasket().push(this.basket);
  }


  deleteFromBasket() {
    return fetch(`${API}/deleteFromBasket.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  getBasket() {
    return fetch(`${API}/getBasket.json`)
        .then(response => response.json())
        .then(object => this.basket.push(object))
        .catch((error) => {
          console.log(error);
        })
  }

  // getBasket() {
  //   const promise = new Promise ((resolve, reject) => {})
  // }

  // _fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log(data);
  //     this.goods = JSON.parse(data);
  //     this.render();
  //     console.log(this.goods);
  //   });
  // }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  sum() {
    const calcBlock = document.querySelector(this.summary);
    let resultSum = this.goods.reduce((sum, { price }) => sum + price, 0);
    calcBlock.insertAdjacentHTML('beforeend', `Общая стоимость товаров: ${resultSum}`)
    console.log(resultSum);
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
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
