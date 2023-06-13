

const imgs = document.querySelectorAll('img')
imgs.forEach((item)=>{
  console.log(item, item.hasAttribute('alt'))
})