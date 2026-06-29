

function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(name === ""){

        sweety("error","Name Required","Please enter your name."
        );
        return false;
    }

    if(email === ""){

        sweety("error","Email Required","Please enter your email."
        );
        return false;
    }

    if(!email.includes("@")){
        sweety(
            "error",
            "Invalid Email",
            "Email must contain @ symbol."
        );
        return false;
    }

    if(password === ""){
        sweety("error","Password Required","Please enter your password."

        );

        return false;
    }

    if(password.length < 6){

        sweety("error","Weak Password","Password must be at least 6 characters long."
        );


        return false;
    }

    sweety("success","Success!","Form submitted successfully."
    );

    document.getElementById("myForm").reset();


    return false;


}


function sweety(icon, title, text){
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });

    
}