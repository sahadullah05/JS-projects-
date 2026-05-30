let studentNameInput = document.querySelector(".studentNameInput");

let studentCnicInput = document.querySelector(".studentCnicInput");

let studentCourseSelect = document.querySelector(".studentCourseSelect");

let studentCampusSelect = document.querySelector(".studentCampusSelect");

let studentImageInput = document.querySelector(".studentImageInput");

let studentCardContainer = document.querySelector("#studentCardContainer");

let studentObject = {};

function createStudentCard() {

    if (
        !studentNameInput.value.trim() ||
        !studentCnicInput.value.trim()
    ) {

        return showAlert(
            "error","Oops...","Please fill all fields"
        );
    }

    if (
        studentCourseSelect.value == "Select your course") {

        return showAlert( "error","Oops...","Please select course");
    }

    if (
        studentCampusSelect.value =="Select your campus"
    ) { return showAlert( "error","Oops...","Please select campus");
    }

    if (!studentImageInput.files[0]) {
                   return showAlert("error","Oops...","Please upload image");
    }

    let profileImage = generateImageUrl(studentImageInput.files);

    let rollNumber = generateRollNumber();
      studentObject.name = studentNameInput.value;
     studentObject.cnic = studentCnicInput.value;
     studentObject.course =studentCourseSelect.value;
     studentObject.campus = studentCampusSelect.value;
     studentObject.image   =   profileImage;

    studentObject.rollNo =`SM-${rollNumber}`;

    renderCard(studentObject);

    studentNameInput.value = "";
    studentCnicInput.value = "";
    studentCourseSelect.selectedIndex = 0;
    studentCampusSelect.selectedIndex = 0;
    studentImageInput.value = "";
}

function generateImageUrl(files) {

    return URL.createObjectURL(
        files[0]);
}

// function generateRollNumber() {

//     return Math.floor(
//         Math.random() * 100000);
// }

function generateRollNumber() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let rollNo = "";
  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * nums.length);

    rollNo += nums[randomNum];
  }

  return rollNo;
}

function renderCard(data) {

    studentCardContainer.innerHTML = `<div class="studentCard">

            <div class="cardTop">
                <h2>SMIT STUDENT CARD</h2>
               
            </div>

            <div class="imageBox">

                <img src=" ${data.image}" >
            </div>

            <div class="cardInfo">
              
                <h3> ${data.name}</h3>

                <p>
                <b>Roll No:</b>
                   ${data.rollNo}
                </p>

                <p>
                    <b>CNIC:</b>
                    ${data.cnic} </p>

                <p>
                    <b>Course:</b> ${data.course}
                </p>

                <p>
                    <b>Campus:</b> ${data.campus}
                </p>

            </div>

        </div>

    `;
}



function showAlert( icon, title,text
) {
   Swal.fire({
        icon,
        title,
        text
    });
}