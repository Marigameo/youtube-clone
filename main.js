const btn = document.getElementById('signin')

const modal = document.getElementsByClassName('modal-wrapper')[0]

btn.addEventListener('click', ()=>{
    modal.style.display = 'block'
})

modal.addEventListener('click', () =>{
    modal.style.display = 'none'
})