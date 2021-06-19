export const createnode = async (article) =>{
  /*Create Elements*/
  let div = document.createElement('div');
  let img = document.createElement('img');
  let div1 = document.createElement('div');
  let p = document.createElement('p');
  let p1 = document.createElement('p');
  let hr = document.createElement('hr');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('a');
  /*Variables and selectors*/
  let parend = document.getElementById('news-container')
  let date = new Date();
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let year = date.getFullYear();
  let houre = date.getHours();
  if(houre < 10){
    houre = `0${houre}`; 
  }else{
    houre = `${houre}`; 
  }
  let minute =  String(date.getMinutes());
  if(minute < 10){
    minute = `0${minute}`; 
  }else{
    minute = `${minute}`; 
  }
  let second = String(date.getSeconds());
  if(second < 10){
    second = `0${second}`; 
  }else{
    second = `${second}`; 
  }
  let today = `${year}-${month}-${day}T${houre}:${minute}:${second}Z`
  let publish_date = new Date(article.publishedAt);
  let d = new Date(today);

  /*Logic*/
  div.classList.add('news-card');
  if(article.image){
    img.src = article.image;
  }
  if(article.urlToImage){
    img.src= article.urlToImage;
  }
  div1.classList.add('news_text-container');
  p.classList.add('news-source-name');
  p.textContent = article.source.name;
  p1.classList.add('news-title');
  p1.textContent = article.title;
  p2.classList.add('news-description')
  p2.textContent = article.description.substring(100,length) + '...';
  p4.setAttribute('target', '_blank');
  p4.classList.add('view-more');
  p4.textContent = 'view more...';
  p4.href = article.url;
  hr.classList.add('hr');
  p3.classList.add('news-date')
  let time = d.getTime() - publish_date.getTime();
  let totaltime = String(time / 86400000)
  if (totaltime < 1){
    p3.textContent = 'Today';
  }else{
    p3.textContent = totaltime.substring(1,length) + ' days ago';
  }

  /*set structure*/
  div.appendChild(img);
  div1.appendChild(p);
  div1.appendChild(p1);
  div1.appendChild(hr);
  div1.appendChild(p2);
  div1.appendChild(p4);
  div1.appendChild(p3)
  div.appendChild(div1);
  parend.appendChild(div);
}