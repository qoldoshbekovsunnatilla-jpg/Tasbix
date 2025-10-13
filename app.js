let num =document.querySelector('.num')

let number=1

let inn =document.querySelector(".inn")


inn.onclick= function() {

    num.innerHTML =number++
    
}
let res =document.querySelector(".res")

res.onclick= function() {
    number=0
    num.innerHTML =number
    
}