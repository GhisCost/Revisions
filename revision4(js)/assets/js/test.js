let boutons = document.querySelectorAll(".reponse");
let p = document.createElement("p");
p.id = "resultat";
let count = 0;
let compteur = document.createElement("p");


// Fonction qui premet de vérifier la réponse et de retourner un message ainsi que d'afficher le bouton suivant si la réponse est bonne

function reponseQuiz(str, btn, next) {
  if (btn.textContent == str) {
    p.textContent = "Bonne Réponse";
    p.style.backgroundColor = "white";
    p.style.color = "red";
    boutons.forEach((btn1) => {
      btn1.setAttribute("disabled", "true");
    });
    count++;
    compteur.textContent = count;
    document.querySelector(".quiz-box").appendChild(compteur);
  } else {
    p.textContent = "Mauvaise reponse, t'es débile !";
    p.style.backgroundColor = "black";
    p.style.color = "red";
    count--;
    compteur.textContent = count;
    document.querySelector(".quiz-box").appendChild(compteur);
  }
  document.querySelectorAll(".quiz-box").forEach((quizz) => {
    quizz.appendChild(p);
    if (p.textContent == "Bonne Réponse") {
      next.textContent = "Question suivante";
      quizz.appendChild(next);
    }
    console.log(count);
  });
}

function questionSuivant(
  question,
  reponse1,
  reponse2,
  reponse3,
  btn7,
  reponseJuste,
  btn3
) {
  p.remove();
  questionAremplir.textContent = question;
  boutons[0].textContent = reponse1;
  boutons[1].textContent = reponse2;
  boutons[2].textContent = reponse3;

  btn7.remove();
  boutons.forEach((btn1) => {
    btn1.removeAttribute("disabled");
  });

  boutons = document.querySelectorAll(".reponse");

  boutons.forEach((btn2) => {
    btn2.addEventListener("click", function () {
       reponseQuiz(reponseJuste, this, btn3);
    });
  });
}

let questionAremplir = document.querySelector("#question");

let suivant1 = document.createElement("button");
suivant1.classList.add("suivant");

boutons.forEach((btn) => {
  btn.addEventListener("click", function () {
 reponseQuiz("Paris", this, suivant1);
  });
});

let suivant2 = document.createElement("button");
suivant2.classList.add("suivant");

suivant1.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Italie ?",
    "Milan",
    "Rome",
    "Turin",
    suivant1,
    "Rome",
    suivant2
  );
});

suivant2.addEventListener("click", function () {
  questionSuivant(
    "Quelle est la capitale de l'Allemagne ?",
    "Munich",
    "Dortmund",
    "Berlin",
    suivant2,
    "Berlin"
  );
});



// document.querySelector(".quiz-box").appendChild(compteur);
