let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-menu');
    navbar.classList.toggle('open');
}
console.log("starting tweak")
const product1 = document.getElementById("product1")
const wrapper = document.getElementById("wrapper")
const newBox = document.getElementById("newBox")
const productBox1 = document.getElementById("productBox1")
const productBox1 = document.getElementById("productBox2")

function getDetail(nomor) {
  console.log('produk: ', nomor)
  newBox.style.display = "block"
  wrapper.style.display = "none"

  if (nomor===1){
    productBox1.style.display="block"
  } else if (nomor===2){
    productBox2.style.display="block"
  }else if (nomor===3){
    productBox3.style.display="block"
  }else if (nomor==4){
    productBox4.style.display="block"
  }else if (nomor===5){
    productBox5.style.display="block"
  }else if (nomor===6){
    productBox6.style.display="block"
  }
}