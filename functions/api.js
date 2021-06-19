export async function fetchdata() { 
  //newsapi.org api
    let res = await fetch("https://newsapi.org/v2/everything?q=digital+economy&apiKey=b1ede5f9baf244709c60f4036f1c81b4") /*usar en localhost (liveshare o localhost) *NOTA: Al ser de pago solo funciona en localhost y tiene mejores noticias* */ 
  
    //gnews.io api
    // const res = await fetch("https://gnews.io/api/v4/top-headlines?q=digital AND economy AND crypto&token=5dd43dd99007bccf07c47e38e0ff2939&lang=en") /*usar en entorno Global (dominio, lan) *NOTA: Solo tiene 100 peticiones por dia gratuitas*/
    
    if (res.ok || res) {
      return await res.json();
    } else {
      return await Promise.reject(res);
    }
}