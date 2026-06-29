const themeBtn = document.getElementById("themeBtn");


let currentTheme = localStorage.getItem("theme");



if(currentTheme === "dark"){
    document.body.classList.add("dark");
    themeBtn.innerHTML = " Light Mode";
}else{
    themeBtn.innerHTML = "Dark Mode";
}



themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme", "dark");
    themeBtn.innerHTML = " Light Mode";

    }else{

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = " Dark Mode";

    }

});