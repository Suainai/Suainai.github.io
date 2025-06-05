var posts=["2025/05/30/YunWei/","2025/05/27/hello-world/","2025/06/04/Spring/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };