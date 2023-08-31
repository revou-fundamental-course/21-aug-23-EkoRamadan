const tggl = document.querySelector(".tggl-nav")
const nav = document.querySelector(".navigasi")
tggl.addEventListener("click",()=>{
    nav.classList.toggle("active")
})

const submit = document.getElementById("submit")
const display = document.getElementById("name-header")
const nameD = document.getElementById("name-display")
const dateD = document.getElementById("date-display")
const messageD = document.getElementById("message-display")
const genderD = document.getElementById("gender-display")
const headerD = document.getElementById("name-header")

submit.addEventListener("click",(i)=>{
    i.preventDefault()
    const name = document.getElementById("name").value
    const date = document.getElementById("date").value
    const message = document.getElementById("message").value
    const gender = document.querySelector("input[name='gender']:checked").value
    
    
    if(name == "" || message == ""  || date == "" || gender == "") {
        alert("lengkapi form")
        return;
    }

    nameD.innerHTML= name
    headerD.innerHTML= name
    dateD.innerHTML= date
    messageD.innerHTML= message
    genderD.innerHTML= gender
})

// on scroll

window.addEventListener("scroll",()=>{
  const ofset = Math.floor(window.scrollY)
  
  if( ofset > 10){
    document.querySelector(".headerC").classList.add("active")
  }else{
    document.querySelector(".headerC").classList.remove("active")
  }
  
})

const navlink = document.querySelectorAll("nav ul.navigasi li a")

navlink.forEach((link)=>{
  link.addEventListener("click",(e)=>{
    e.target.parentElement.parentElement.classList.remove("active")
  })
})