const topLeft = document.getElementById('top-left');
const topRight = document.getElementById('top-right');
const bottomLeft = document.getElementById('bottom-left');
const bottomRight = document.getElementById('bottom-right');
const box = document.getElementById('box')
const copy = document.getElementById('cod')
const inp = document.getElementById('inp')
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`;
topLeft.addEventListener('input',(e)=>{
    if(e.target.value.length > 0){
        num1 = e.target.value;
        box.style.borderTopLeftRadius = num1 + 'px';
        inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
    else{
        num1 = 0;
        inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
})
topRight.addEventListener('input',(e)=>{
    if(e.target.value.length > 0){
    num2 = e.target.value;
    box.style.borderTopRightRadius = num2 + 'px';
    copy.value = e.target.value;
    inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
    else{
        num2 = 0;
        copy.innerHTML = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
        inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
})
bottomLeft.addEventListener('input',(e)=>{
    if(e.target.value.length > 0){
    num3 = e.target.value;
    box.style.borderBottomLeftRadius = num3 + 'px';
    inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
    else{
        num3 = 0;
        inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
})
bottomRight.addEventListener('input',(e)=>{
    if(e.target.value.length > 0){
    num4 = e.target.value;
    box.style.borderBottomRightRadius = num4 + 'px';
    inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
    else{
        num4 = 0;
        inp.value = `border-radius: ${num1} ${num2} ${num3} ${num4} px;`
    }
})



function copyText(){
    navigator.clipboard.writeText(inp.value)
    alert("copied");
}
