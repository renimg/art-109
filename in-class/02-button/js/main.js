
//consts
const showCatButton = document.querySelector("#catimg1");
const showCatButton2 = document.querySelector("#catimg2");
const showCatButton3 = document.querySelector("#catimg3");
const showCatButton4 = document.querySelector("#catimg4");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

//code starts here


//theme toggle


//img toggle
showCatButton.addEventListener("click", () =>{
    if (img1.classList.contains('hidden')) {
    img1.classList.remove("hidden")
    } else {
        img1.classList.add("hidden")
    }
})
showCatButton2.addEventListener("click", () =>{
    if (img2.classList.contains('hidden')) {
    img2.classList.remove("hidden")
    } else {
        img2.classList.add("hidden")
    }
})
showCatButton3.addEventListener("click", () =>{
    if (img3.classList.contains('hidden')) {
    img3.classList.remove("hidden")
    } else {
        img3.classList.add("hidden")
    }
})
showCatButton4.addEventListener("click", () =>{
    if (img4.classList.contains('hidden')) {
    img4.classList.remove("hidden")
    } else {
        img4.classList.add("hidden")
    }
})