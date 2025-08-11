/* Parie JS de la todo list*/

let input = document.querySelector("#tache");
let button = document.querySelector("#ajouter");
let ul = document.querySelector("#liste");

// Dès qu'on va cliquer sur le bouton, on va récupèrer la valeur de l'input (vérifier qu'il y a bien une valeur ?), créer un li et ajouter au ul

button.addEventListener("click", function () {
  if (!input.value) {
    alert("Attention, votre tache est vide !");
    // on ne retourne rien, il va empêcher l'execution du reste du code et sortir de l'écouteur d'événement.
    return;
  }
  let li = document.createElement("li");
  li.textContent = input.value;
  let supp = document.createElement("button");
  supp.classList.add("btn-supprimer");
  supp.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  supp.addEventListener("click", function () {
    this.parentElement.remove();
  });
  let check = document.createElement("input");
  check.id= "check"
  check.setAttribute("type", "checkbox");
  check.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.backgroundColor = "blue";
      this.parentElement.style.color = "white";
    } else {
      this.parentElement.style.backgroundColor = " #f1f1f1";
      this.parentElement.style.color = "black";
    }
  });
  li.appendChild(check);
  li.appendChild(supp);
  ul.appendChild(li);
  input.value = "";
});

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    if (!input.value) {
      alert("Attention, votre tache est vide !");
      return;
    }
    let li = document.createElement("li");
    li.textContent = input.value;
    let supp = document.createElement("button");
    supp.classList.add("btn-supprimer");
    supp.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    supp.addEventListener("click", function () {
      this.parentElement.remove();
    });
    let check = document.createElement("input");
 check.id= "check"
    check.setAttribute("type", "checkbox");
    check.addEventListener("change", function () {
      if (this.checked) {
        this.parentElement.style.backgroundColor = "blue";
        this.parentElement.style.color = "white";
      } else {
        this.parentElement.style.backgroundColor = " #f1f1f1";
        this.parentElement.style.color = "black";
      }
    });
    li.appendChild(check);
    li.appendChild(supp);
    ul.appendChild(li);
    input.value = "";
  }
});
