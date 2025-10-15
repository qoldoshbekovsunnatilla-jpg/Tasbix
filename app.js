let num =document.querySelector('.num')

let number=1

let inn =document.querySelector(".inn")


inn.onclick= function() {

    num.innerHTML =number++
    tb.style.backgroundColor = "rgba(0, 128, 0, 0.462)";
}
let res =document.querySelector(".res")

res.onclick= function() {
    number=0
    num.innerHTML =number
    tb.style.backgroundColor= "   rgba(255, 0, 0, 0.315)  " ;
    
}
