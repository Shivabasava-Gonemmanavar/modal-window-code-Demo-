// 'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

////////////////////////////////////////////////////////////////////////////////

//this is my code

" use strict";
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnCloseModal);

// this is important than we are fetching all the model in  a list like(array) sequence order , so we use queryselctorAll(); cmd//

const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

//looping here

for (let i = 0; i < btnOpenModal.length; i++)
  // console.log(btnOpenModal[i].textContent);

  //writing function with evnt handler metod
  console.log(
    btnOpenModal[i].addEventListener("click", function () {
      console.log("button clicked!!");

      modal.classList.remove("hidden"); // if are haveing more then two class we  use comma to take sapareatly

      overLay.classList.remove("hidden");

      // in this line u can see one thing that is we are storeing the model content into the modal variable and that is 'modal' and we are are applying classlist.remove() menthod by using modal variable
      // and one thing is here we are not using '.' to fetch class because we already store that value in 'modal' varible so here we directly taking like this , "modal.classlist.remove('hidden')" that it!!

      // we can apply style like this that is modal.style.display = 'none';
      // to visible we use 'block';
    })
  );

const openModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};
btnCloseModal.addEventListener(
  "click",
  openModal //add list used here
  // console.log("closed the window");
);
const closeModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", closeModal);

//here we are using some trics by the help of those trics we can write code in simple way
overLay.addEventListener("click", closeModal);

//3rd of exit from the window modal is ESc key so here i doing key event

document.addEventListener("keydown", function (e) {
  //we also called this 'e' as event or q,x etc we can take
  // console.log("a key was pressed");

  // console.log(e);

  //this is used to find the which key pressed with hole details , but in other next example we are taking the another ex

  console.log(e.key);

  // this will print onlt the name what key we pressed in keyboard that it!

  //WRITING THE CONDITION FOR THAT

  // if (e.key === "Escape") console.log("Esc was pressed");

  // 1st step

  // if (e.key === "Escape") {
  //   if (!modal.classList.contains("hidden")) {
  //     closeModal();
  //   }
  // }

  // 2nd step

  // another type we can write above code

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
