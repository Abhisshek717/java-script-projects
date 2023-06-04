
let store = '';
const binary = document.getElementById('in');
const btn = document.getElementById('btn');
const disp = document.getElementById('dis');
const ans = document.getElementById('ans');

const err = document.getElementById('err');
const errpara = document.getElementById('err_para');
err.style.opacity = "0"
let isValidInput;
binary.addEventListener('input', (e) => {
    // write this code        
        isValidInput = /^[01]*$/.test(e.target.value);
        if((e.target.value.length <= 8)){
            if(isValidInput){
            store = e.target.value;  
            err.style.opacity = '0'
            errpara.innerHTML = ""
            err.style.background = "lightred"
            }
            else{
                err.style.opacity = "1"
                errpara.style.color = "#ffff"
                errpara.innerHTML = "Error: Wrong character entered"
                err.style.background = "lightred"
                
            }
        }
        else{
        err.style.opacity = "1"
        errpara.style.color = "#ffff"
        err.style.background = "lightred"
        errpara.innerHTML = "Error: Length Excedded"
        }
     
})

function decToBin(){
    let sum = 0;
    let count = 1;
    for(let i=(store.length)-1 ;i >= 0;i--){
        if(store[i] === '1'){
            sum += count;
        }
        count*=2;
    }
    if(store.length === 8 && isValidInput){
    ans.innerHTML = sum;
    err.style.opacity = "1"
    err.style.background = "lightgreen"
    errpara.style.color = "#ffff"
    errpara.innerHTML = "Status: Done"
    }
    else{
        err.style.opacity = "1"
        err.style.background = "lightred"
        errpara.style.color = "#ffff"
        errpara.innerHTML = "Status: Error"
    }
    
}

err.style.background = ""
