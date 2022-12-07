/* contact form */
let subEl = document.getElementById('form_submit');
console.log(subEl);
subEl.addEventListener('click', formValidate);
//document.getElementById('contact_form').addEventListener('submit',)

function formValidate(event) {
  //  alert('here');
   // event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let formInvalid = false;
    if(name == '') {
        alert('Name must be set');
        formInvalid = true;
    }
    if(email == '') {
        alert('Email must be set');
        formInvalid = true;
    }
    if(formInvalid) {
        event.preventDefault();
        return false;
    }
   // return false;
}
