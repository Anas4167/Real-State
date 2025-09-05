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
const bestProDet=document.querySelector("#bestProDet")
const getProDet=document.querySelector("#getProDet")
const howProDet=document.querySelector("#howProDet")
const dolorProDet=document.querySelector("#dolorProDet")
const whyProDet=document.querySelector("#whyProDet")
const almistProDet=document.querySelector("#almistProDet")
const btnApartmentDet=document.querySelector("#btnApartmentDet")
const btnVillaDet=document.querySelector("#btnVillaDet")
const btnPentHouseDet=document.querySelector("#btnPentHouseDet")
const apartmentDet=document.querySelector("#apartmentDet")
const villaDet=document.querySelector("#villaDet")
const pentHouseDet=document.querySelector("#pentHouseDet")

console.log(btnApartmentDet, btnVillaDet, btnPentHouseDet, apartmentDet, villaDet, pentHouseDet)

console.log(bestProDet, getProDet, whyProDet, dolorProDet, howProDet,almistProDet)
console.log(bestInHome, getInHome, howInHome, whyInHome, dolorInHome, almistInHome)


//  section one
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



// section two
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


// section four
btnVilla.addEventListener("click", ()=>{
    villa.style.display="block"
    btnVilla.style.backgroundColor="orangered"
    apartment.style.display="none"
    btnApartment.style.backgroundColor="black"
    pentHouse.style.display="none"
    btnPentHouse.style.backgroundColor="black"
    villa.classList.remove("animate-scaleUp") 
    void villa.offsetWidth; 
    villa.classList.add("animate-scaleUp")
})


btnApartment.addEventListener("click", ()=>{
    villa.style.display="none"
    btnVilla.style.backgroundColor="black"
    apartment.style.display="block"
    btnApartment.style.backgroundColor="orangered"
    pentHouse.style.display="none"
    btnPentHouse.style.backgroundColor="black"

})


btnPentHouse.addEventListener("click", ()=>{
    villa.style.display="none"
    btnVilla.style.backgroundColor="black"
    apartment.style.display="none"
    btnApartment.style.backgroundColor="black"
    pentHouse.style.display="block"
    btnPentHouse.style.backgroundColor="orangered"

})



// propertyDetail paragraphs
// bestProDet.addEventListener("click", ()=>{
//     getProDet.style.display = getProDet.style.display === "block" ? "none" : "block"
//     bestProDet.style.color = getProDet.style.display === "block" ? "orangered" : "black"
//     dolorProDet.style.display= "none"
//     almistProDet.style.display= "none"
//     howProDet.style.color = "black"
//     whyProDet.style.color = "black"
// })

// howProDet.addEventListener("click", ()=>{
//     getProDet.style.display= "none"
//     dolorProDet.style.display= dolorProDet.style.display=== "block" ? "none" : "block"
//     howProDet.style.color = dolorProDet.style.display === "block" ? "orangered" : "black"
//     almistProDet.style.display= "none"
//     bestProDet.style.color = "black"
//     whyProDet.style.color = "black"
// })

// whyProDet.addEventListener("click", ()=>{
//     getProDet.style.display= "none"
//     dolorProDet.style.display= "none"
//     almistProDet.style.display= almistProDet.style.display=== "block" ? "none" : "block"
//     whyProDet.style.color = almistProDet.style.display === "block" ? "orangered" : "black"
//     bestProDet.style.color = "black"
//     howProDet.style.color = "black"
// })

// property detail buttons

btnVillaDet.addEventListener("click", () =>{
    villaDet.style.display="block"
    apartmentDet.style.display="none"
    pentHouseDet.style.display="none"
})




