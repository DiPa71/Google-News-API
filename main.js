import {createnode} from './functions/createnode.js'
import {fetchdata} from './functions/api.js'
document.addEventListener("DOMContentLoaded", function() {
  let buttonUpdate = document.querySelector("#btn-reload");
  let buttonAdd = document.querySelector("#btn-add");
  let i = 0;
  let n = 4;

  fetchdata(n).then((data) => {
    data.articles.forEach(article =>{
      if(i < n){
          createnode(article);
          i++
        }
        })
    }).catch((error) => {
      console.error('Error:', error);
    });

    buttonAdd.addEventListener("click",() =>{
      let cont = document.getElementById('news-container');
      let loading = document.createElement('span');
      loading.classList.add('load-b');
      cont.textContent = '';
      cont.appendChild(loading);
        setTimeout(() =>{
          n += 1;
          reload()
        }, 500)
  })
  buttonUpdate.addEventListener("click",() =>{
    let cont = document.getElementById('news-container');
    let loadings = document.getElementById('loading')
    let loading = document.createElement('span');
    loading.classList.add('load-b');
    cont.textContent = '';
    cont.appendChild(loading);
      setTimeout(() =>{
        reload()
      }, 2000)
  })
    
  const reload = () =>{
    i = 0;
    fetchdata().then((data) => {
      let cont = document.getElementById('news-container')
      cont.textContent = '';
      data.articles.forEach(article =>{      
        if(i < n){
            createnode(article);
            i++
          }
          })
      }).catch((error) => {
        console.error('Error:', error);
      });
  }
})