let btn = document.querySelector("#btnbouge");

function positionrdn() {
  let y = Math.round(Math.random() * 150);
  let x = Math.round(Math.random() * 90);
  btn.style.left = `${x}%`;
  btn.style.top = `${y}%`;
}

function couleurInfini() {
  let rgb = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];

  return rgb;
}
let codergb;

btn.addEventListener("mouseover", function () {
  btn.style.position = "asbolute";
  positionrdn();
  codergb = couleurInfini();
  btn.style.backgroundColor = `rgb(${codergb[0]},${codergb[1]},${codergb[2]})`;
});

btn.addEventListener("click", function () {
  alert("Bravo");
});
