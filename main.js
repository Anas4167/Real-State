const kan1aad = document.querySelector("#kan1aad")
const kan2aad = document.querySelector("#kan2aad")
const kan3aad = document.querySelector("#kan3aad")
const angleRight1 = document.querySelector("#angleRight1")
const angleRight2 = document.querySelector("#angleRight2")
const angleRight3 = document.querySelector("#angleRight3")
const angleLeft1 = document.querySelector("#angleLeft1")
const angleLeft2 = document.querySelector("#angleLeft2")
const angleLeft3 = document.querySelector("#angleLeft3")
const bestInHome=document.querySelector("#bestInHome")
const getInHome=document.querySelector("#getInHome")
const howInHome=document.querySelector("#howInHome")
const dolorInHome=document.querySelector("#dolorInHome")
const whyInHome=document.querySelector("#whyInHome")
const almistInHome=document.querySelector("#almistInHome")
const btnApartment=document.querySelector("#btnApartment")
const btnVilla=document.querySelector("#btnVilla")
const btnPentHouse=document.querySelector("#btnPentHouse")
const apartment=document.querySelector("#apartment")
const villa=document.querySelector("#villa")
const pentHouse=document.querySelector("#pentHouse")




angleRight1.addEventListener("click", ()=> {
    kan1aad.style.display = "none"
    kan2aad.style.display = "block"
    kan3aad.style.display = "none"
})

angleRight2.addEventListener("click", ()=> {
    kan1aad.style.display = "none"
    kan2aad.style.display = "none"
    kan3aad.style.display = "block"
})

angleRight3.addEventListener("click", ()=> {
    kan1aad.style.display = "block"
    kan2aad.style.display = "none"
    kan3aad.style.display = "none"
})


angleLeft1.addEventListener("click", ()=> {
    kan1aad.style.display = "none"
    kan2aad.style.display = "none"
    kan3aad.style.display = "block"
})

angleLeft2.addEventListener("click", ()=> {
    kan1aad.style.display = "block"
    kan2aad.style.display = "none"
    kan3aad.style.display = "none"
})

angleLeft3.addEventListener("click", ()=> {
    kan1aad.style.display = "none"
    kan2aad.style.display = "block"
    kan3aad.style.display = "none"
})


bestInHome.addEventListener("click", ()=>{
    getInHome.style.display = getInHome.style.display === "block" ? "none" : "block"
    bestInHome.style.color = getInHome.style.display === "block" ? "orangered" : "black"
    dolorInHome.style.display= "none"
    almistInHome.style.display= "none"
    howInHome.style.color = "black"
    whyInHome.style.color = "black"
})

howInHome.addEventListener("click", ()=>{
    getInHome.style.display= "none"
    dolorInHome.style.display= dolorInHome.style.display=== "block" ? "none" : "block"
    howInHome.style.color = dolorInHome.style.display === "block" ? "orangered" : "black"
    almistInHome.style.display= "none"
    bestInHome.style.color = "black"
    whyInHome.style.color = "black"
})

whyInHome.addEventListener("click", ()=>{
    getInHome.style.display= "none"
    dolorInHome.style.display= "none"
    almistInHome.style.display= almistInHome.style.display=== "block" ? "none" : "block"
    whyInHome.style.color = almistInHome.style.display === "block" ? "orangered" : "black"
    bestInHome.style.color = "black"
    howInHome.style.color = "black"
  

})

btnVilla.addEventListener("click", ()=>{
    villa.style.display="block"
    apartment.style.display="none"
    pentHouse.style.display="none"

})


btnApartment.addEventListener("click", ()=>{
    villa.style.display="none"
    apartment.style.display="block"
    pentHouse.style.display="none"

})


btnPentHouse.addEventListener("click", ()=>{
    villa.style.display="none"
    apartment.style.display="none"
    pentHouse.style.display="block"

})