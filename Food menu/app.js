

const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const filterBtns = document.querySelectorAll(".buttons button");

const addBtns = document.querySelectorAll(".card button");




let cart = 0;



search.addEventListener("keyup",()=>{

    const value = search.value.toLowerCase();

    cards.forEach(card=>{

        const title = card.querySelector("h2").textContent.toLowerCase();

        if(title.includes(value)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }

    });

});



filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{


        const filter = btn.dataset.filter;

        cards.forEach(card=>{

            if(filter=="All" || card.dataset.category==filter){

                card.style.display="block"
            }else{

                card.style.display="none";
 }

    });

    });

});



addBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        cart++;

        sweety("success","Added to Cart",
            `Items in Cart : ${cart}`
        );

    });

});

function sweety(icon,title,text){

    Swal.fire({
        icon:icon,
        title:title,
        text:text,
        // timer:1500,
        // showConfirmButton:false
    });

}