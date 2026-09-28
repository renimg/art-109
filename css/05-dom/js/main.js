
//consts
const header = document.querySelector("#header");
const changeCatButton = document.querySelector("#cat-button");
const changeThemeButton = document.querySelector("#change-theme");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

//code starts here
changeCatButton.addEventListener("click", ()=> {
    header.innerHTML = "Meow!"
})

function changeButtonText(){
    if(document.body.classList.contains("dark")){
        changeThemeButton.textContent = "Toggle Light Theme";
    } else {
        changeThemeButton.textContent = "Toggle Dark Theme";
    }
}

//theme toggle
changeThemeButton.addEventListener("click", ()=>{
    //dark theme toggle
    document.body.classList.toggle("dark");
    changeButtonText();
})


//img toggle
img1.addEventListener("click", () =>{
    img1.classList.add("hidden")
    img2.classList.remove("hidden")
})

img2.addEventListener("click", () =>{
    img2.classList.add("hidden")
    img3.classList.remove("hidden")
})

img3.addEventListener("click", () =>{
    img3.classList.add("hidden")
    img1.classList.remove("hidden")
})