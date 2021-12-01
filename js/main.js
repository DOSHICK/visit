
// function ageCounting() {
//   let now = new Date(); //Curent date
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Curent date without time
//   let dob = new Date(2002, 9, 6); //date of birth
//   let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
//   let age; //Возраст
//   let ageInp = document.getElementById("age")

//   //Возраст = текущий год - год рождения
//   age = today.getFullYear() - dob.getFullYear();
//   //Если ДР в этом году ещё предстоит, то вычитаем из age один год
//   if (today < dobnow) {
//     age = age - 1;
//   }

//   ageInp.innerHTML(('age'));

// }

// ageCounting();