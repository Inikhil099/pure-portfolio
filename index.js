const x = document.querySelector('.fa-x')
const hidden_links = document.querySelector('.hidden_links')
const hid = document.querySelector('.hid')
const men = document.querySelector('.fa-bars')


men.addEventListener('click',()=>{
    hid.style.display = 'flex'
    hid.style.width = "60%"
    hid.style.boxShadow = "0 0 10px 5px white"
})
x.addEventListener('click',()=>{
    hid.style.width = "0"
    hid.style.boxShadow = "none"
})