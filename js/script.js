//Burger menu
let burger = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__menu');
let body = document.body;
burger.addEventListener("click", function(e){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

// Validation
document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('formSub');
   form.addEventListener('submit', formsend);
   
   async function formsend(e) {
      e.preventDefault();
      
      let error = formValidate(form);
      if (error==0){
         // отправка формы
      }else{
         alert('Заполните обязательные поля!');
      }
   }

   function formValidate(form){
   let error = 0;
   let formReq = form.querySelectorAll('._req');
   for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if (emailTest(input)){
            formAddError(input);
            error++;
         }
      };
   }
   return error;
}
function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
// тест email
function emailTest(input){
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
});
//=====================================================================
document.addEventListener('DOMContentLoaded', function(){
   const form = document.getElementById('form');
   form.addEventListener('submit', formsend);
   
   async function formsend(e) {
      e.preventDefault();
      
      let error = formValidate(form);
      if (error==0){
      }else{
         alert('Заполните обязательные поля!');
      }
   }

   function formValidate(form){
   let error = 0;
   let formReq = form.querySelectorAll('._req');
   for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
         if (emailTest(input)){
            formAddError(input);
            error++;
         }
      }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
         formAddError(input);
         error++;
      } else {
         if (input.value === '') {
            formAddError(input);
            error++;
         }
      }
   }
   return error;
}
function formAddError(input) {
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
}
function formRemoveError(input) {
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
}
// тест email
function emailTest(input){
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
});

//Stepper
const steppers = document.querySelectorAll('.stepper');
for (let i = 0; i < steppers.length; i++) {
   const stepper = steppers[i];
   

   const stepperInput = stepper.querySelector('.stepper__input');
   const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
   const stepperBtnDown = stepper.querySelector('.stepper__btn--down');

   let count = stepperInput.value;

   const isNotApple = () => {
      if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
         return false;
      }
      return true;
   };

   function allowNumbersOnly(e) {
      var code = (e.which) ? e.which : e.keyCode;
      if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
      }
   }

   stepperInput.addEventListener('keyup', (e) => {
      let self = e.currentTarget;

      if (self.value == '0') {
         self.value = 1;
      }

      if (isNotApple) {
         self.style.width = `${self.value.length + 1}ex`;
      } else {
         self.style.width = `${self.value.length + 2}ex`;
      }

      count = stepperInput.value;

      if (count == 1) {
         stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
         stepperBtnDown.classList.remove('stepper__btn--disabled');
      }
   });

   stepperInput.addEventListener('keypress', (e) => {
      allowNumbersOnly(e);
   });

   stepperInput.addEventListener('change', (e) => {
      let self = e.currentTarget;

      if (!self.value) {
         self.value = 1;
      }

      count = stepperInput.value;

      if (count == 1) {
         stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
         stepperBtnDown.classList.remove('stepper__btn--disabled');
      }
   });

   stepperBtnUp.addEventListener('click', (e) => {
      e.preventDefault();

      count++;

      if (count == 1) {
         stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
         stepperBtnDown.classList.remove('stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
         stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
      } else {
         stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
      }
   });

   stepperBtnDown.addEventListener('click', (e) => {
      e.preventDefault();

      count--;

      if (count == 1) {
         stepperBtnDown.classList.add('stepper__btn--disabled');
      } else {
         stepperBtnDown.classList.remove('stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
         stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
      } else {
         stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
      }
   });
};