// <-----Timeoutfunction---------->

// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("hello");
// },4000); //timeout;
// console.log("three");
// console.log("four");

// <-------sumoftwonumber-------->

//  function sum(a,b)
//  {
//     console.log(a+b);
//  }
//  function calculator(a,b,sumCallback){
//     sumCallback(a,b);
//  }
//  calculator(5,7, sum);

// <--------Promisefunction-------------->

// const p = new Promise((resolve, reject)=>{
//    resolve({
//       message:"sucess"
//    })  
// })

// <---------catchfunction---------------->

//    p.catch((result)=>{
//       setTimeout((result) => {
//           console.log("hello");
//       }, 3000);
//    })

// <--------thenfunction----------------->

let dogdata = fetch("https://dog.ceo/api/breeds/image/random");

dogdata.then((response) => {
   response.json().then((result) => {
      let img = document.createElement("img");
      img.src = result.message;
      img.style.width = "500px";
      document.body.appendChild(img)
   });
   console.log(response);
});

// <--------------getdata-------------->

// function getData(dataId,getNextData){
//    //2s 
//    setTimeout(() =>{
//       console.log("data",dataId);
//       if(getNextData){
//          getNextData();
//       }

//    }, 2000);

// }

// getData(1,() =>{
//    getData(2,() =>{
//       getData(3);
//    });
// });

// <-----------async wait------------------------->

async function getDogImage() {

  let dogdata = await fetch("https://dog.ceo/api/breeds/image/random");

  let result = await dogdata.json();

  let img = document.createElement("img");
  img.src = result.message;
  img.style.width = "500px";

  document.body.appendChild(img);
}

getDogImage();

