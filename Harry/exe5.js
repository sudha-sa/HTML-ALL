let a = [
     "initializing hack tool",
     "connecting to facebook",
     "connecting to server1",
     "connection failed. retrying",
     "connecting to server 2",
     "connected successfully",
     "username iamharry",
     "trying brute force",
     "200k password tried",
     "match not found",
     "another200k password tried",
     "match not found",
     "another 200k password tried",
     "match found",
     "accessing account",
     "hack successful."

]

const sleep = async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {resolve(true)}, 1000)
        });
    }

const showHack = async (message)=>{
    await sleep(2)
    console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for(let i=0; i<a.length; i++){
        await showHack(a[i]);
    }
})()