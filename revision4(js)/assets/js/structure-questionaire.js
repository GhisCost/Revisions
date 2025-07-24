// QCM

let boutons = document.querySelectorAll(".reponse");
let p = document.createElement("p");
p.id = "resultat";

// Fonction qui premet de vérifier la réponse et de retourner un message ainsi que d'afficher le bouton suivant si la réponse est bonne

function reponseQuiz(str, btn,next) {
  if (btn.textContent == str) {
    p.textContent = "Bonne Réponse";
    p.style.backgroundColor = "white";
    p.style.color = "red";
    boutons.forEach((btn1) => {
      btn1.setAttribute("disabled", "true");
    });
  } else {
    p.textContent = "Mauvaise reponse, t'es débile !";
    p.style.backgroundColor = "black";
    p.style.color = "red";
  }
  document.querySelectorAll(".quiz-box").forEach((quizz) => {
    quizz.appendChild(p);
    if (p.textContent == "Bonne Réponse") {
      next.textContent = "Question suivante";
      quizz.appendChild(next);
    }
  });
}

//Création du premier bouton suivant
let suivant1= document.createElement("button");
suivant1.classList.add("suivant");

// Appel de la fonction de vérification de la réponse pour la première question

boutons.forEach((btn) => {
  btn.addEventListener("click", function () {
    reponseQuiz("Paris", this,suivant1);
  });
});

// Affichage de la 2eme question

suivant1.addEventListener("click", function () {
  p.remove();
  let question = document.querySelector("#question");

  question.textContent = "Quelle est la capitale de l'Italie ?";

  boutons[0].textContent = "Naples";

  boutons[1].textContent = "Rome";

  boutons[2].textContent = "Turin";

  suivant1.remove();
  boutons.forEach((btn1) => {
    btn1.removeAttribute("disabled");
  });


// Appel de la fonction de vérification de la réponse pour la deuxieme question
  boutons.forEach((btn) => {
    btn.addEventListener("click", function () {
      reponseQuiz("Rome", this, suivant2);
    });
  });
});

// Création du deuxieme bouton suivant 

let suivant2=document.createElement('button');
suivant2.classList.add('suivant');

// Affichage de la troisieme question

suivant2.addEventListener("click", function () {
  p.remove();
  let question = document.querySelector("#question");

  question.textContent = "Quelle est la capitale de l'Allemagne ?";

  boutons[0].textContent = "Dortmund";

  boutons[1].textContent = "Munich";

  boutons[2].textContent = "Berlin";

  suivant2.remove();
  boutons.forEach((btn1) => {
    btn1.removeAttribute("disabled");
  });



// Appel de la fonction de vérification de la réponse pour la 3eme question
  boutons.forEach((btn) => {
    btn.addEventListener("click", function () {
      reponseQuiz("Berlin", this, suivant3);
    });
  });
});

// Création du troisieme bouton suivant

let suivant3 = document.createElement('button');
suivant3.classList.add('suivant');






// let questionAremplir = document.querySelector("#question");
// function questionSuivant(question,reponse1,reponse2,reponse3,btn){
//   p.remove();
//   questionAremplir.textContent = question;
//   boutons[0].textContent = reponse1;
//   boutons[1].textContent = reponse2;
//   boutons[2].textContent = reponse3;

//    btn.remove();
//   boutons.forEach((btn1) => {
//     btn1.removeAttribute("disabled");
//   });
// }