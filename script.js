let total=document.querySelector('#input');
let string="";
let buttons=document.querySelectorAll('button');
let arr=Array.from(buttons);
console.log(arr);
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            total.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            total.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.slice(0,string.length-1);
            total.value=string;
        }
        else if(e.target.innerHTML=='x²'){
            string=Math.pow(eval(string),2);
            total.value=string;
        }
        else{
            string+=e.target.innerHTML;
            total.value=string;
        }
    })
})
let sound=document.querySelector('#click')
arr.forEach(button=>{
    button.addEventListener('click',()=>{
        sound.play();
    })
})