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


if(getTitle == "Contact List")
{
    arraySort();
}
//sorting the table
function arraySort(array, sortByItem) 
{
    for(let i = 0; i < array.length; i++)
    {
        alert(array.sortByItem[i]);
        if(array.sortByItem[i] > array.sortByItem[i+1])
        {
            let swap = array.sortByItem[i];
            array.sortByItem[i] = array.sortByItem[i+1];
            array.sortByItem[i+1] = swap;
        }
    }
}