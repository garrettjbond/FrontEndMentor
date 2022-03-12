function getQuote(){
        
    let promise = fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
            let placeholder = document.querySelector(".card--quote").innerHTML = data.slip.advice;
            console.log(data.slip.advice);
            console.log(placeholder);
    });
            
        
}