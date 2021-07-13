// const listItem = document.querySelectorAll('.navbar .separet li ul li')
// const dropdown = document.querySelector('.navbar .separet li ul li .dropdown')
// listItem.forEach(item => {
//     item.addEventListener('click',()=>{
//         dropdown.classList.toggle("showDropdown")
//     })
// })


const align_left = document.querySelector('#align-left')
const navbar = document.querySelector('.navbar')
const icon = document.querySelector('.navbar .logo-icon i')
align_left.addEventListener('click', ()=>{
    navbar.classList.add('showNav')
})
icon.addEventListener('click',()=>{
    navbar.classList.remove('showNav')
})