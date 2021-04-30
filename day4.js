window.onload = function(){
    const button = document.querySelector("#btn");
    const text = document.getElementById("txtToChange");
    const input = document.getElementById("username");

    button.addEventListener('click', function(){
        const promptVal = prompt("What is your name")
        console.log(promptVal)
    })
    
    
    





    // let hasChanged = false; 

    // button.addEventListener('click', function(){

    //     if(hasChanged == false){
    //         text.innerHTML = 'Welcome Everyone';
    //         hasChanged = true;
    //     }else{
    //         text.innerHTML = 'Hello World';
    //         hasChanged = false;
    //     }
        
    // })


}