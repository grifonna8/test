document.addEventListener("DOMContentLoaded", function(event) { 
  const requestURL1 = 'https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS';
  const requestURL2 = 'https://my-json-server.typicode.com/aero-frontend/test-task/FAVORITE_SUCCESS';
  const  xhr1 = new XMLHttpRequest();
  xhr1.open('GET', requestURL1);

  xhr1.responseType = 'json';
  xhr1.onload = () => {
    if (xhr1.status !== 200 && xhr1.readyState !== 4){
      console.error(xhr1.status);
    }
    console.log(xhr1.response);

    let id = document.querySelectorAll('.card');
    for (let i = 0; i < id.length; i++){
      for(let j in xhr1.response.data.products){
        if (i === +j){
          id[i].setAttribute('id', xhr1.response.data.products[i].id);    
        }
      }
    }

    let article = document.querySelectorAll('.card__article-number');
    article.forEach(item => {
      for(let i in xhr1.response.data.products){
        item.innerText = 'Арт. ' + xhr1.response.data.products[i].code;
      }
    });

    let check = document.querySelectorAll('.card__stock');
    check.forEach(item => {
      for(let i in xhr1.response.data.products){
        if (xhr1.response.data.products[i].availability === true){
          item.insertAdjacentHTML('beforeend', 'В наличии');
          break;
        }
      }
    });

    let title = document.querySelectorAll('.card__title');
    title.forEach(item => {
      for(let i in xhr1.response.data.products){
        item.innerText = xhr1.response.data.products[i].title;
      }
    });

    let subtitle = document.querySelectorAll('.card__title');
    subtitle.forEach(item => {
      for(let i in xhr1.response.data.products){
        for(let j = xhr1.response.data.products[i].params.length - 1; j >= 0; j--){
          item.insertAdjacentHTML('afterend', '<div class="card__subtitle card__subtitle--first"><span class="info--first">' +
           xhr1.response.data.products[i].params[j].name +
          '</span><span class="info--second">' + xhr1.response.data.products[i].params[j].value + '</span></div>');
        }
        break;
      }
    });

    let fav = document.querySelectorAll('.fav');
    for (let i = 0; i < fav.length; i++){
      for(let j in xhr1.response.data.products){
        if (xhr1.response.data.products[j].inFav === true && i === +j){
          fav[i].setAttribute('style', 'background: url("../img/favourite-active.svg")');
        }
      }
    }

  };

  xhr1.send();
 

  let favClick = document.querySelectorAll('.fav'),
      card = document.querySelectorAll('.card'),
      idMain;
  
  favClick.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.add('active');
      card.forEach(item => {
        if (item.contains(element)){
          idMain = item.getAttribute('id');
          sendRequest2('POST', requestURL2, idMain)
          .then(data => console.log(data))
          .catch(err => console.log(err));
        } else if (item.contains(element)){
          idMain = item.getAttribute('id');
          sendRequest2('POST', requestURL2, idMain)
          .then(data => console.log(data))
          .catch(err => console.log(err));
        } else if (item.contains(element)){
          idMain = item.getAttribute('id');
          sendRequest2('POST', requestURL2, idMain)
          .then(data => console.log(data))
          .catch(err => console.log(err));
        }
      });
      function sendRequest2(method, url, body) {
        return new Promise((resolve, reject) => {
          const  xhr2 = new XMLHttpRequest();
          xhr2.open(method, url, body);
          xhr2.responseType = 'json';
          xhr2.setRequestHeader('Content-Type', 'application/json')
          xhr2.onload = () => {
            if (xhr2.status >= 400 && xhr2.readyState !== 4){
              reject(xhr2.status);
            }
            resolve(xhr2.response);
          };
    
          xhr2.onerror = () => {
          reject(xhr2.response);
          };
    
          xhr2.send(JSON.stringify(body)); 
        });
    
      }
    });
  });
  
});