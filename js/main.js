document.addEventListener("DOMContentLoaded", function(event) { 
  const requestURL1 = 'https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS';
  const  xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL1);

  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status !== 200 && xhr.readyState !== 4){
      console.error(xhr.status);
    }
    console.log(xhr.response);
    let article = document.querySelectorAll('.card__article-number');
    article.forEach(item => {
      for(let i in xhr.response.data.products){
        item.innerText = 'Арт. ' + xhr.response.data.products[i].code;
      }
    });

    let check = document.querySelectorAll('.card__stock');
    check.forEach(item => {
      for(let i in xhr.response.data.products){
        if (xhr.response.data.products[i].availability === true){
          item.insertAdjacentHTML('beforeend', 'В наличии');
          break;
        }
      }
    });

    let title = document.querySelectorAll('.card__title');
    title.forEach(item => {
      for(let i in xhr.response.data.products){
        item.innerText = xhr.response.data.products[i].title;
      }
    });

    let subtitle = document.querySelectorAll('.card__title');
    subtitle.forEach(item => {
      for(let i in xhr.response.data.products){
        for(let j = xhr.response.data.products[i].params.length - 1; j >= 0; j--){
          item.insertAdjacentHTML('afterend', '<div class="card__subtitle card__subtitle--first"><span class="info--first">' +
           xhr.response.data.products[i].params[j].name +
          '</span><span class="info--second">' + xhr.response.data.products[i].params[j].value + '</span></div>');
        }
        break;
      }
    });

    let fav = document.querySelectorAll('.fav');
    console.log(fav);
    for (let i = 0; i < fav.length; i++){
      for(let j in xhr.response.data.products){
        if (xhr.response.data.products[j].inFav === true && i === +j){
          fav[i].setAttribute('style', 'background: url("../img/favourite-active.svg")');
        }
      }
    }

    // let fav1 = document.querySelector('#fav1');
    // for(let j in xhr.response.data.products){
    //   if (xhr.response.data.products[j].inFav === true){
    //     fav1.setAttribute('style', 'background: url("../img/favourite-active.svg")');
    //   }
    // }

    // let fav2 = document.querySelector('#fav2');
    // for(let j in xhr.response.data.products){
    //   if (xhr.response.data.products[j].inFav === true){
    //     fav2.setAttribute('style', 'background: url("../img/favourite-active.svg")');
    //   }
    // }

    // let fav3 = document.querySelector('#fav3');
    // for(let j in xhr.response.data.products){
    //   if (xhr.response.data.products[j].inFav === true){
    //     fav3.setAttribute('style', 'background: url("../img/favourite-active.svg")');
    //   }
    // }

    xhr.response.data.products.forEach(item => {
    /* const { id, code, imgUrl } = item; */
    /* console.log( `ID=${id} ${code} ${imgUrl}`); */

    // document.body.insertAdjacentHTML('beforeend',  
    // `<div id="product-${item.id}">
    //   <a href="${item.link}">
    //     <h1>${item.title}</h1>
    //     <h2>Code=${item.code}</h2>

    //   </a>
    //   <img src="${item.imgUrl}" alt="camera">
    // </div>
    // `);
    });
  };

  /* xhr.onerror = () => { */
    /* в случае ошибки выведет то, что тут сделаем */
 /*  }; */

  xhr.send();

  

  // 
  // 
 
});