const start = document.getElementById('start')
const stop = document.getElementById('stop')
const range = document.getElementById('range')

//lights
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')



let value = 0;
let first,second,third,fourth ;

function yellow(){
    one.style.background = 'yellow'
    one.style.transitionDuration = `${value}000ms`
    one.style.boxShadow = `rgb(255, 255, 0) 0px 22px 70px 4px`    
    
    three.style.background = 'yellow'
    three.style.transitionDuration = `${value}000ms`
    three.style.boxShadow = `rgb(255, 255, 0) 0px 22px 70px 4px`    
    
    five.style.background = 'yellow'
    five.style.transitionDuration = `${value}000ms`
    five.style.boxShadow = `rgb(255, 255, 0) 0px 22px 70px 4px`    
    
    seven.style.background = 'yellow'
    seven.style.transitionDuration = `${value}000ms`
    seven.style.boxShadow = `rgb(255, 255, 0) 0px 22px 70px 4px` 
}
function red(){
    //red
    two.style.background = 'red'
    two.style.transitionDuration = `${value}000ms`
    two.style.boxShadow = `rgb(255, 0, 0) 0px 22px 70px 4px` 
    
    four.style.background = 'red'
    four.style.transitionDuration = `${value}}000ms`
    four.style.boxShadow = `rgb(255, 0, 0) 0px 22px 70px 4px` 
    
    six.style.background = 'red'
    six.style.transitionDuration = `${value}000ms`
    six.style.boxShadow = `rgb(255, 0, 0) 0px 22px 70px 4px` 
    console.log(start)
}


function yellows(){
    one.style.background = 'aqua'
    one.style.transitionDuration = `${value}000ms` 
    one.style.boxShadow = 'none'

    three.style.background = 'aqua'
    three.style.transitionDuration = `${value}000ms`
    three.style.boxShadow = `none`    
    
    five.style.background = 'aqua'
    five.style.transitionDuration = `${value}000ms`
    five.style.boxShadow = `none`    
    
    seven.style.background = 'aqua'
    seven.style.transitionDuration = `${value}000ms`
    seven.style.boxShadow = `none`
}


function reds(){
        //red
        two.style.background = 'aqua'
        two.style.transitionDuration = `${value}000ms`
        two.style.boxShadow = `none` 
        
        four.style.background = 'aqua'
        four.style.transitionDuration = `${value}000ms`
        four.style.boxShadow = `none` 
        
        six.style.background = 'aqua'
        six.style.transitionDuration = `${value}000ms`
        six.style.boxShadow = `none` 
        console.log(stop)
}


function setClear(values){
    if(values === 1 ){
        first =  setInterval(yellow,1000)
        second =  setInterval(yellows,2000)
        third =  setInterval(red,1000)
        fourth = setInterval(reds,2000)
    }
    if(values === 0){
        clearInterval(first)
        clearInterval(second)
        clearInterval(third)
        clearInterval(fourth)
        yellows()
        reds()
    }
}


start.addEventListener('click',()=>{
    setClear(1)
})

stop.addEventListener('click',()=>{
    setClear(0)
})


range.addEventListener('change',(e) => {
    value = e.target.value;
})
