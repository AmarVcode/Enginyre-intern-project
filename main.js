
const toggle=()=>{
    let div=document.getElementById("navbar");

    if(div.classList.contains("show")){
        div.classList.remove("show")
    }
    else{
        div.classList.add("show")
    }
}

let count = 0
let t=0;
let div=document.getElementById("slides");

const before=()=>{
    if(count !== 0 && count > 0){
        t=t+200
        count--

        div.style.translate=t+'px'
    }
}

const after=()=>{
    if(count<=4){
        t=t-200
        count++

        div.style.translate=t+'px'
    }

}