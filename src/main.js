document.addEventListener('DOMContentLoaded', function() {
    const formHeader = document.getElementById('formHeader');
    const myForm = document.getElementById('myForm');

    formHeader.addEventListener('click', function() {
        myForm.reset();
    });
});