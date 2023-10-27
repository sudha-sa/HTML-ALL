
setInterval(myFunction, 1000);

function myFunction(){
let a = new Date();
document.getElementById("clock").innerHTML ="time is :" + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
}


// let a;
// let date;
// let time;
// const Options  = {
//     weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
// };
// setInterval(() => {
// a = new Date();
// date = a.toLocaleDateString(undefined, Options);
// time = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
//  document.getElementById('clock').innerHTML = time + "<br>on<br>" + date;

// }, 1000);

