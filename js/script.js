let backgroundChanger = document.querySelector(".mainContainer");
let changeButton = document.querySelector(".changeButton");
let resetButton = document.querySelector(".resetButton");



let letters = '0123456789ABCDEF';

const randomColorGenerator = () =>{
    let randomColor = "#";
    for(let i=0; i < 6; i ++){
        randomColor += letters[Math.floor(Math.random() * 16)]
        backgroundChanger.style.backgroundColor = `${randomColor}`
    }
}

changeButton.addEventListener("click", randomColorGenerator);

resetButton.addEventListener("click", ()=>{
    backgroundChanger.style.backgroundColor = "#000";
})

