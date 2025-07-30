document.addEventListener('DOMContentLoaded', () => {
    const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
    if (tg) tg.ready();

    const form = document.getElementById('bookingForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            instagram: document.getElementById('instagram').value,
            first_visit_discount: true
        };
        if (tg) {
            tg.sendData(JSON.stringify(data));
            tg.close();
        } else {
            alert('Debug mode:\n' + JSON.stringify(data, null, 2));
        }
    });
});
