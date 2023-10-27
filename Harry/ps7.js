
// const changebodyred = ()=>{
//     document.body.firstElementChild.style.background = 'red'
// }

// let b = document.body
// console.log("first child of b is", b.firstChild)
// console.log("first Element child of b is", b.firstElementChild)
  


//01 & //03
document.getElementsByTagName("nav")[0].firstElementChild.style.color = 'yellow';
document.getElementsByTagName("ul")[0].firstElementChild.style.color = 'blue';
document.getElementsByTagName("ul")[0].lastElementChild.style.color = 'green';

//04
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = 'cyan';
})