//callback


// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("loaded script with src: " + src);
//         callback(null, src);
//     };
//     script.onerror = function() {
//         console.log("failed to load script with src: " + src);
//         callback(new Error("Failed to load script."), src);
//     };
//     document.body.appendChild(script);
// }

// function hello(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("hello world" + src);
// }
// loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js", function
//    gm(error, src){
//     if(error){
//        console.log(error);
//        sendEmergencyMessageTOCeo();
//        return;
//     }
//     loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js", function
//     gm(error, src){
//      if(error){
//         console.log(error);
//         sendEmergencyMessageTOCeo();
//         return;
//         }
//         loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js", function
//         gm(error, src){
//          if(error){
//              console.log(error);
//              sendEmergencyMessageTOCeo();
//              return;
//              }
//              loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js", gm)
//          });
//     });
// });


//try and catch
// try{
//        console.log(rahul)
// }
// catch(error){
//     console.log("balle balle")
// }


// try{
//     setTimeout(() => {
//         console.log(rahul)
//     }, 2000);
// }
// catch(error){
//     console.log("balle balle")
// }


// error object
// try{
//     let age = prompt("enter your age")
//     age = Number.parseInt(age)
//     if(age > 100){
//        throw new ReferenceError("harry is not good")
//     }
// }
// catch(error){
//  console.log(error.message)
//  console.log(error.name)
//  console.log(error.stack)
// }
// console.log("still running")


//finally clause
const f = () => {
  try {
    let a = 0;
    // console.log(program)
    console.log("programme run successfully");
    return;
  }
  catch (arror) {
    console.log("this is an error")
  }
  finally {
    console.log("i am a good boy")
  }
}
f();
console.log("end");