 
 var tbody = document.querySelector("tbody");
 var pageul = document.querySelector("pagination");
 var itemShow = document.querySelector("#itemperpage");
 var tr = tbody.querySelectorAll("tr")
 var emptyBox = [];
 var index = 1;
 var itemParpage = 8;
  
 for(let i=0; i<tr.length; i++){
    emptyBox.push(tr[i]);
 }
 console.log(emptyBox, "emptyBox")

 itemShow.onchange = giveTrperpage;

 function giveTrperpage(){
    itemperpage = Number(this.value);
    displaypage(itemParpage);
    pageGenerator(itemParpage);
    getElement(itemParpage);
 }
 function displaypage(limit){
    console.log(limit, "limit")
    tbody.innerHTML = '';
    for(let i=0; i<limit; i++){
    tbody.appendChild(emptyBox [i]);
     }  
     const pagenum = pageul.querySelectorAll(".list");
     pagenum.forEach(n=>n.remove());
 }
 displaypage(itemParpage);

 function pageGenerator(getem){
    const num_of_tr = emptyBox.length;
    if(num_of_tr<= getem){
        pageul.style.display = 'none';
    }
    else{
        pageul.style.display = 'flex';
        const num_of_page = math.ceil(num_of_tr/getem);
        for(let i=1; i<=num_of_page; i++){
           const li = document.createElement('li');
           li.className = 'list';
           const a = document.createElement('a');
           a.href = '#';
           a.innerHTML = i;
           a.setAttribute('data-page', i);
           li.appendChild(a);
           pageul.insertBefore(li, pageul.querySelector(".next"));
        }
        }
    }
pageGenerator(itemParpage);

let pagelink = pageul.querySelectorAll('a');
let lastpage = pagelink.length - 2;

function pageRunner(page,items, lastpage, active){
    for(button of page){
        button.onclick = e=>{
            const page_num = e.target.getAttribute("data-page");
            const page_mover = e.target.getAttribute("id");
            if(page_num != null){
                index = page_num;
            }
            else{
                if(page_mover === "next"){
                    index++;
                    if(index >= lastpage){
                        index = lastpage;
                    }
                }
                else{
                    index--;
                    if(index<=1){
                        index = 1;
                    }
                }
            }
            pageMaker(index, items, active);
        }
    }
}

var pageli = pageul.querySelectorAll(".list");
pageli[0].classList.add("active");
pageRunner(pagelink,itemparpage, lastpage, pageli);

function getElement(val){
    let pagelink = pageul.querySelectorAll("a");
    let lastpage = pagelink.length - 2;
    let pageli = pageul.querySelectorAll(".list");
    pageli[0].classList.add("active");
    pageRunner(pagelink, val, lastpage, pageli);
}

function pageMaker(index, item_per_page, activepage){
    const start = item_per_page * index;
    const end = start + item_per_page;
    const current_page = emptyBox.slice((start - item_per_page),(end - item_per_page));
    tbody.innerHTML = '';
    for(let i=0; i<current_page.length; i++){
        let item = current_page[i];
        tbody.appendChild(item);
    }
    Array.from(activepage).forEach((e)=>{
    e.classList.remove("active");
});
activepage[index - 1].classList.add("active");
}

