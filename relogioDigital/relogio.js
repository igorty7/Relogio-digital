function chamaRelogio() {
  const Spanrelogio = document.querySelector("#relogio");
  const date = new Date();
  const horas = date.getHours().toString().padStart(2, "0");
  const minutos = date.getMinutes().toString().padStart(2, "0");
  const segundos = date.getSeconds().toString().padStart(2, "0");

  Spanrelogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}
chamaRelogio();
setInterval(chamaRelogio, 1000);

/* Criar neve caindo */
for (let i = 0; i < 40; i++) {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerHTML = "❄";
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = 3 + Math.random() * 5 + "s";
  snow.style.fontSize = 10 + Math.random() * 20 + "px";
  document.body.appendChild(snow);
}