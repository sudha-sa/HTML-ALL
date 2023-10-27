// let x = document.getElementsByTagName('span')[0]
// console.log(x);
// let y = document.getElementsByTagName('span')[0]
// console.dir(y);

// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)


// first.innerHTML
// first.outerHTML

// document.body.firstChild.data
// console.log(document.body.textContent)

// first.hidden = false



// //attribute
// let first = document.getElementById("first");
// let a = first.getAttribute("class")
// // console.log(a)
// // console.log(first.hasAttribute("class"))
// // console.log(first.hasAttribute("style"))
// // // first.setAttribute("hidden", "true")
// // first.setAttribute("class", "true sachin")
// // first.removeAttribute("class")

// // console.log(first.attributes)


// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)



// //insertion method
// let a = document.getElementsByTagName('div')[0]

// // a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';

// let div = document.createElement('div');
// div.innerHTML = '<h1>hello world!</h1>';
// // a.append(div)
// // a.prepend(div);
// // a.before(div);
// // a.after(div);
// a.replaceWith(div);



// //insert adjustment html/text/element
// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>')
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');



//classname and classlist
// first.className = 'text-black red'
// first.classList.remove('red')
// first.classList.add('red')
// first.classList.toggle('red')
// first.classList.toggle('red')
// first.classList.contains('red')



//settimeout and settime interval

// document.write("hello");

// const sum = (a,b)=>{
//     console.log("yes i am running" +(a + b));
//     a+b;
// }
// setTimeout(sum, 1000, 1, 2)

// let a = setTimeout(() => {
//     alert("this is good for you")
// }, 2000);
//  console.log(a)
// let b = prompt("do you want to run")
// if("n" == b){
//     clearTimeout(a)
// }


// let a = setInterval(() => {
//     alert("this is good for you")
// }, 3000);
//  console.log(a)
// let b = prompt("do you want to run")
// if("n" == b){
//     clearInterval(a)
// }

// const sum = (a,b)=>{
//         console.log("yes i am running" +(a + b));
//         a+b;
//     }

//     setInterval(sum, 1000, 1, 2)
// let x =function(e){
//     alert("hello world1")
// }

// let y = function(e){
//     alert("hello world2")
// }

// btn.addEventListener('click', x)

// btn.addEventListener('click', y)

// let a = prompt("what is your favorite no.")
// if(a=="2"){
//     btn.removeEventListener('click', x)
// }



// ps
// Q5
setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 300);