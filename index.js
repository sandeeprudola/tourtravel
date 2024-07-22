function cursorEffect(){
    var page1Content=document.querySelector("#page1-content")
var cursor=document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })

})
page1Content.addEventListener("mouseenter",function(){

    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

function BreakTheWords(){
    var h1=document.querySelector("#page1 h1")
var h1Text=document.querySelector("#page1 h1").textContent

var splittedText=h1Text.split("")

var clutter=""

splittedText.forEach(function(elem){
    clutter+=`<span>${elem}</span>`
})
h1.innerHTML=clutter

}
BreakTheWords()

gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.1,
    stagger:0.1,
})



// function BreakTheWords2(){
//     var h3=document.querySelector("#page2 h3")
// var h3Text=document.querySelector("#page2 h3").textContent

// var splittedText=h3Text.split(" ")

// var clutter=" "

// splittedText.forEach(function(elem){
//     clutter+=`<span>${elem}</span>`
// })
// h3.innerHTML=clutter

// }
// BreakTheWords2()

// gsap.from("h3 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.1,
//     stagger:0.1,
// })
