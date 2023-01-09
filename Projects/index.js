var screen = document.querySelector('#screen');
var btn = document.querySelector('.btn');



for(item of btn){
    item.addEventListener('click' ,(e)=>{
        btntext =e.target.innerText;
        if(btntext=="x")
        screen.value+=btntext;

    })
}