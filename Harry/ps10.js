// let p = fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml")

// p.then((value1) =>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     console.log(value1.headers)
//     return value1.json()
// }).then((value2) =>{
//     console.log(value2)
// })

// //post requests
// const createTodo = async (Todo) =>{
// let options = {
//     method: "post",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify(Todo)
   
// }

// let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
//     let response = await p.json()
//     return response;
// }

// const getTodo = async (id) =>{
//     fetch('https://jsonplaceholder.typicode.com/posts'+id)
//       let response = await response.json()
//       let r = await response(json)
//       return r
// }

// const mainFunc = async () =>{
//     let Todo = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1100,
//       }
//     let Todor = await createTodo(Todo)
//     console.log(Todor)
//     console.log(await getTodo(5))
// }

// mainFunc();



//cookies
// console.log(document.cookie)
// document.cookie = "name= harry1122334400"
// document.cookie = "name2= harry1122334400"
// document.cookie = "name= harry"

// let key = prompt("enter your key")
// let value = prompt("enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)



//localstorage
// let key = prompt("enter key you want to set")
// let value = prompt("enter value you want to set")

// localStorage.setItem(key, value)

// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
// localStorage.getItem(key)

// if(key == 'red' || key =='blue'){
//     localStorage.removeItem(key)
// }

// if(key == 0){
//     localStorage.clear()
// }

//session storage

//ps
// Q1
let url = "https://kontests.net/api"
let response = fetch(url)
response.then((v) =>{
    return v
}).then((contests) =>{
    console.log(contests)
    
    ihtml = ""
    for(item in contests){
        console.log(contests[item])
        ihtml +=`
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://img.freepik.com/premium-vector/software-development-programming-language-coding_284092-33.jpg" alt="Card image cap">
        <div class="card-body mx-4">
          <h5 class="card-title">${contests[item].name} and site is${contests[item].site}</h5>
          <p class="card-text">status is ${contests[item].status}</p>
          <p class="card-text">in 24 hours? ${contests[item].status}</p>
          <p>starts at: ${contests[item].start_time}
          <p>ends at: ${contests[item].end_time}
          <a href="${contests[item].url}" class="btn btn-primary my-4">visit contests</a>
        </div>
      </div>
        `
    }
    cardcontainer.innerHTML = ihtml
})
