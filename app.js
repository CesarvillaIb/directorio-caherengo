fetch("data.json")
  .then(res => res.json())
  .then(data => renderCards(data))
  .catch(err => console.error("Error cargando data.json", err));

function renderCards(personas) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";

  personas.forEach(p => {
    cards.innerHTML += `
      <div class="card">
        <h3>${p.nombre}</h3>

        <p><strong>Puesto:</strong> ${p.puesto}</p>
        <p><strong>Área:</strong> ${p.area}</p>
        <p><strong>Oficina:</strong> ${p.oficina}</p>

        <p><strong>Correo:</strong></p>
        <div class="copy" onclick="copyText(this, '${p.correo}')">
          ${p.correo}
        </div>

        <p><strong>Teléfono:</strong></p>
        <div class="copy" onclick="copyText(this, '${p.telefono}')">
          ${p.telefono}
        </div>

        <span class="badge">${p.area}</span>

        <div class="actions">
          <a class="mail" href="mailto:${p.correo}" title="Correo Outlook"></a>
          <a class="call" href="tel:${p.telefono}" title="Llamar"></a>
          <a class="wa" href="https://wa.me/52${p.telefono}" target="_blank" title="WhatsApp"></a>
        </div>
      </div>
    `;
  });
}

function copyText(el, text) {
  navigator.clipboard.writeText(text);

  const original = el.innerText;
  el.innerText = "✔ Copiado";
  el.style.background = "#16a34a";

  setTimeout(() => {
    el.innerText = original;
    el.style.background = "";
  }, 1200);
}
