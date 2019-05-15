(function(){
    //add event listener for open form button
    var openFormButton =document.querySelector('.arrow-down');


    if(openFormButton){
        openFormButton.addEventListener('click', function(e){
            
            //отменить действие ссылки(кот указана в href) по умолчанию
            //для того чтобы не произошел переход
            e.preventDefault();

            form.open();
        });
    }

}());