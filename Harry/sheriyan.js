//promise

// var ans = new Promise((res, rej)=>{
//     if(true){
//         return res;
//     }
//     else{
//         return rej;
//     }
// });
// ans.then(function(){
//     console.log("resolve");
// });
// ans.catch(function(){
//     console.log("reject");
// });



//ghar aao
//khana khao
//mobile dekho
//so jao
// var ans = new Promise(function(res, rej){
//     return res("ghar aao");
//  })
 
// var p1 = ans.then(function (data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("khana khao");
//     })
//  })

// var p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("mobile dekho");
//     })
//  })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("so jao");
//     })
//  })

// var p4 =  p3.then(function(data){
//     console.log(data);
// })


async function abcd(){
   let raw =await fetch(`https://randomuse.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });
   let ans  = raw.json();
   console.log(ans);
}
abcd();

