
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(e.target);

  const message = `
<b>Новая заявка в HairReconstruction</b>%0A
<b>Имя:</b> ${data.get("name")}%0A
<b>Телефон:</b> ${data.get("phone")}%0A
<b>Instagram:</b> ${data.get("instagram")}%0A
<b>Услуга:</b> ${data.get("service")}%0A
<b>Дата и время:</b> ${data.get("datetime")}
`;

  const TOKEN = "8015004536:AAGP8_o4RaI4VKNTjnITR23PCYn0TWEgpRw";
  const CHAT_ID = "292012626";
  const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `chat_id=${CHAT_ID}&text=${message}&parse_mode=HTML`
  })
    .then(response => {
      if (response.ok) {
        alert("✅ Спасибо за заявку!\nАдминистратор свяжется с вами в ближайшее время!");
        e.target.reset();
      } else {
        alert("❌ Ошибка отправки");
      }
    })
    .catch(error => {
      alert("Ошибка соединения");
    });
});
