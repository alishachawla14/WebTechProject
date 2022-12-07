document.getElementById('email').addEventListener('mouseover', changeNameIn);
document.getElementById('email').addEventListener('mouseout', changeNameOut);

let trEls = document.querySelectorAll('#curriculum_table tr');
for(i=0; i<trEls.length; i++) {
    console.log(trEls[i]);
    trEls[i].addEventListener('mouseover', greyIn);
    trEls[i].addEventListener('mouseout', whiteOut);
}

function changeNameIn() {
    document.getElementById('email').placeholder = 'type your email';
}

function changeNameOut() {
    document.getElementById('email').placeholder = 'email address';
}

function greyIn(event) {
    event.target.style.backgroundColor = '#ddd';
}

function whiteOut(event) {
    event.target.style.backgroundColor = '#fff';
}

const slides = [
    "images/tiger1.jpg",
    "images/tiger2.jpg",
    "images/tiger3.jpg",
    "images/tiger4.jpg",
 ]; 
 //const colors = ['yellow','red','blue','green'];
 //const texts = ['Henry', 'Bob', 'Samantha', 'Jody and Jilly'];
 const captions = [];
 let index = 0; 
 const imgEl = document.querySelector("#slideImage");

 function slideShow(){
     const tigerEl = document.getElementById ("slideImage");
   //  const descEl = document.getElementById('description');
     if (index === slides.length) {
         index = 0; 
     }
 //  }
     tigerEl.src = slides[index];
    // tigerEl.style.border = "2px solid " + colors[index];
  //   descEl.innerText = texts[index];
     index++; 
     setTimeout(slideShow, 4000);
 }
 document.querySelector("body").onload = function(){
     slideShow();
 }

 let buttonEl = document.querySelector('#go');
 buttonEl.addEventListener('click', studentClick);
 let outputEl = document.querySelector('#output');
 let amountEl = document.querySelector('#base');
let percentageEl = document.querySelector('#percentage');
let yearsEl = document.querySelector('#years');
let percentageOutputEl = document.querySelector('#percentage_output');

 function studentClick() {
    //   console.log();
       let amount = amountEl.value;
       let percentage = percentageEl.value;
       let years = yearsEl.value;
       let total = amount;
       for(i=0; i<years; i++) {
           console.log(total);
           total = (total * ((percentage / 100) + 1));
           console.log(total);
       }
       outputEl.innerText = total;
   }
