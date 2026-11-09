// RaceDay: tiny bits of behaviour shared by all pages.

// Ask before doing something that can't be undone: <form data-confirm="Are you sure?">
document.addEventListener('submit', function (event) {
    var message = event.target.getAttribute && event.target.getAttribute('data-confirm');
    if (message && !window.confirm(message)) {
        event.preventDefault();
    }
});

// Show a preview of a chosen image: <input type="file" data-preview="#imgId">
document.addEventListener('change', function (event) {
    var input = event.target;
    var selector = input.getAttribute && input.getAttribute('data-preview');
    if (!selector || !input.files || !input.files[0]) return;
    var preview = document.querySelector(selector);
    if (preview) {
        preview.src = URL.createObjectURL(input.files[0]);
        preview.classList.remove('d-none');
    }
});
