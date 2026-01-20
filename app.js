fetch("data.json")
  .then(res => res.json())
  .then(data => renderCards(data));

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
        <div class="copy" onclick="copyText('${p.correo}')">${p.correo}</div>

        <p><strong>Teléfono:</strong></p>
        <div class="copy" onclick="copyText('${p.telefono}')">${p.telefono}</div>

        <span class="badge">${p.badge}</span>

        <div class="actions">
          <a class="mail" href="mailto:${p.correo}">✉️</a>
          <a class="call" href="tel:${p.telefono}">📞</a>
          <a class="wa" href="https://wa.me/52${p.telefono}" target="_blank">💬</a>
        </div>
      </div>
    `;
  });
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}

