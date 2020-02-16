document.addEventListener("DOMContentLoaded", function(event) { 
  const requestURL = 'https://my-json-server.typicode.com/aero-frontend/test-task/PRODUCTS_SUCCESS';
  const  xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);

  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status !== 200 && xhr.readyState !== 4){
      console.error(xhr.status);
    }
    console.log(xhr.response);
    console.log( xhr.response.data.products[0].code);
    let m = document.querySelector('.article-number');
    m.innerText = xhr.response.data.products[0].code;

    xhr.response.data.products.forEach(item => {
    const { id, code, imgUrl } = item;
    console.log( `ID=${id} ${code} ${imgUrl}`);
    });
  };

  /* xhr.onerror = () => { */
    /* в случае ошибки выведет то, что тут сделаем */
 /*  }; */

  xhr.send();

  

  // 
  // 
 
});