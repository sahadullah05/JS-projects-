            // Higher Order Functions


// Q1 Higher Order Function kya hota hai?
    //  Higher Order Function woh function hota hai jo kisi doosre function ko
    //  argument ke taur par leta hai or function ko return karta hai....


  //  Q2 Kya map() ek higher order function hai?
    // G haan, map ek Higher Order Function hai


    // Q3 Kya forEach() value return karta hai?
    //    G Nahi, forEach() koi value return nahi karta. forEach() ka return value hamesha
    //  undefined hota hai.

    //  Q4 Ek example do Higher Order Function ka.
       
//        function showName (ab){
//             console.log("calling ==>", ab)

//             ab("sahad")

//        }

//        showName(function (name){
//     console.log("my username is ",name);

// })

      // Q5 Callback function kya hota hai?

      // callback function woh function hota hai jo kisi dusre function ko argument ke taur par diya
      //  jata hai aur baad  mein execute hota hai.

      // Q6 Ek function banao jo dusre function ko parameter me le.
        
              //  function sayHello() {
              //         console.log("Hello World!");
              //  }


              //  function runFunction(myFunction) {
              //         myFunction();
              //  }


              //  runFunction(sayHello);


      // Q7 filter() ka use kis liye hota hai?
            //  filter() ka use array se sirf woh elements nikalne
            //   ke liye hota hai jo kisi condition ko satisfy karte hain.



      // Q8 reduce() ka basic purpose kya hai?
              // reduce() ka basic purpose array ke tamam elements ko 
              // mila kar ek hi final value banana hota hai.


        // Q9 find() aur filter() me kya difference hai? 
            //   find() ek array method hai jo condition ko satisfy karne wala sirf
            //    pehla element return karta hai. Agar koi element match na kare, to undefined return karta hai.

            // filter() ek array method hai jo condition ko satisfy karne wale tamam (all) elements ko ek new 
            // array me return karta hai. Agar koi element match na kare, to empty array [] return karta hai.
      



        // Q10 map() aur forEach() me kya difference hai?
            //    map() array ke har element par function apply karta
            //     hai aur new array return karta hai.

            // forEach() array ke har element par function execute karta hai,
            //  lekin kuch return nahi karta.



            // map()

            // Q11 [1,2,3,4] array ke tamam numbers ko double karne ke liye map() use karo.
                  // let numbers = [1, 2, 3, 4];

                  //  let doubled = numbers.map(num => num * 2);

                  //  console.log(doubled);


      //      Q12 Ek array of names ko uppercase me convert karo using map().
             
            //      let names = ["ali", "ahmed", "sara"];

            //        let upperNames = names.map(name => name.toUpperCase());

            //        console.log(upperNames);


            // Q13 Numbers array ko square me convert karo.
            //    let numbers = [1, 2, 3, 4];

            //        let squares = numbers.map(num => num * num);

            //        console.log(squares);


            // filter()


      //      Q14 Names array me sirf wo names filter karo jinki length 5 se zyada ho.
            //      let names = ["Ali", "Ahmed", "Sana", "Abdullah", "Hassan"];

            //    let result = names.filter(name => name.length > 5);

            //    console.log(result);


      //      Q15 [1,2,3,4,5,6] me se sirf even numbers filter karo.

            //       let numbers = [1, 2, 3, 4, 5, 6];

            //     let evenNumbers = numbers.filter(num => num % 2 === 0);

            //     console.log(evenNumbers);


            // Q16 Ek prices array me sirf prices greater than 100 filter karo.

            // let prices = [50, 120, 80, 200, 150];

            //      let result = prices.filter(price => price > 100);

            // //      console.log(result);     
            
            

            // forEach()


      //   Q17 Array ke tamam elements console me print karo using forEach().
            //  let numbers = [10, 20, 30, 40];

                  // numbers.forEach(function(num) {
                  //     console.log(num);
                  // });

      //    Q18 Ek fruits array ko numbering ke sath print karo.
       //  let fruits = ["Apple", "Banana", "Mango", "Orange"];

            //   fruits.forEach(function(fruit, index) {
                  // console.log(index + 1 + ". " + fruit);
            //   });
             


      //    Q19 Users array me har user ko welcome message do.
//                 let users = ["Ali", "Ahmed", "Sara"];

// users.forEach(function(user) {
//     console.log("Welcome, " + user + "!");
// });



      //    find()
//      Q20 Users array me "Ali" naam ka user find karo.
//            let users = ["Ahmed", "Ali", "Sara", "Hassan"];


       // let user = users.find(name => name === "Ali");
       // console.log(user); 
            

//       Q21 Ek products array me first expensive product find karo.
//          let products = [
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Laptop", price: 50000 }
// ];

// let expensiveProduct = products.find(product => product.price > 1000);

// console.log(expensiveProduct);

//       Q22 [10,20,30,40] me se first number greater than 25 find karo.
      //  let numbers = [10, 20, 30, 40];

      //       let result = numbers.find(num => num > 25);

      //       console.log(result);


      // reduce()
      // Q23 [1,2,3,4] ka sum reduce() se nikalo.
//            let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);

      //  Q24 Prices array ka total calculate karo.
//             let prices = [100, 200, 300, 400];

// let total = prices.reduce((sum, price) => sum + price, 0);

// console.log(total);


      // Q25  Numbers array ka maximum value find karo using reduce().
//           let numbers = [10, 50, 30, 80, 40];

//        let max = numbers.reduce((largest, num) => {
//     return num > largest ? num : largest;
// });

//        console.log(max);


      //   findLastIndex()

      //  Q26 Last even number ka index find karo.
            //      let numbers = [1, 2, 3, 4, 5, 6];

                 
            //      let index = numbers.findLastIndex(num => num % 2 === 0);
            //   console.log(index);

      //  Q27 Ek names array me last "Ali" ka index find karo. 
      //            let names = ["Ahmed", "Ali", "Sara", "Ali", "Hassan"];

      //      let index = names.findLastIndex(name => name === "Ali");

      //      console.log(index);
            
      //  Q28 [1,2,3,2,4,2] me last 2 ka index find karo.
//           let numbers = [1, 2, 3, 2, 4, 2];

// let index = numbers.findLastIndex(num => num === 2);

// console.log(index);



//  Objects
//       Q29 Object kya hota hai JavaScript me?
      //      Object JavaScript me ek data structure hota hai jo key-value
      //       pairs me data store karta hai.

//       Q30 Ek student object banao jisme name aur age ho.
//             let student = {
//     name: "Ali",
//     age: 20
// };

// console.log(student);

//       Q31 Object ki property access karne ke 2 methods likho.
            //   Dot Notation
            //   Bracket Notation 


      //       Nested Objects
      //     Q32 Ek object ke andar object ka example banao.
//        let student = {
//     name: "Ali",
//     age: 20,
//     details: {
//         class: "2nd Year",
//         subject: "Computer Science"
//     }
// };

// console.log(student);

      //     Q33 User object ke andar address object create karo
//               let user = {
//     name: "Ali",
//     age: 20,
//     address: {
//         city: "Karachi",
//         country: "Pakistan"
//     }
// };

// console.log(user);


// Array of Objects

//Q34 Array of objects kya hota hai?
//      let students = [
//     {
//         name: "Ali",
//         age: 20
//     },
//     {
//         name: "Ahmed",
//         age: 22
//     }
// ];

// console.log(students);


// Q35 Students ka array banao jisme har student ka name aur marks ho
//         let students = [
//     {
//         name: "Ali",
//              marks: 85
//     },
//     {
//         name: "Ahmed",
//               marks: 90
//      },
//   {
//             name: "Sara",
//         marks: 78
//           }
// ];

// console.log(students);




