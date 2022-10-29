/* *
 * client.js
 * Nandagopan Dilip
 * 301166925
 * 29/10/2022
 */


if(getTitle == "Contact List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

if(getTitle == "Sign Up")
{
    const confirmPass = document.querySelector('input[name=password_confirm]');

    confirmPass.addEventListener('change', onSubmit); 
}

function onSubmit() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    }
    else
    {
      confirm.setCustomValidity('Passwords do not match');
    }
}