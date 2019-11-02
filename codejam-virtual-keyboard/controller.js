const toggleButton = document.querySelector('.btn');
toggleButton.addEventListener('click', function(event){
    const output = document.querySelector('.text-field');
    output.value = 'Hello world!';
})