buttons=document.querySelector(".buttons")
buttons.innerHTML=`
<button onclick="previousPage()">Previous</button>
     <button id="b1" class=active onclick="showPage(1)">1</button>
     <button id=b2 onclick="showPage(2)">2</button>
     <button id=b3 onclick="showPage(3)">3</button>
     <button id=b4 onclick="showPage(4)">4</button>
     <button id=b5 onclick="showPage(5)">5</button>
     <button id=b6 onclick="showPage(6)">6</button>
     <button id=b7 onclick="showPage(7)">7</button>
     <button id=b8 onclick="showPage(8)">8</button>
     <button id=b9 onclick="showPage(9)">9</button>
     <button id=b10 onclick="showPage(10)">10</button>
     <button  onclick="nextPage()" >next</button>`

    let a=[]
    let pageNo=1;
    function setData(){
       var url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
 var xhr = new XMLHttpRequest();
   xhr.open("GET", url);
   xhr.onload = function () {
     var data = JSON.parse(this.response);
    myfun(data)
   };
   xhr.send();
    }
    function myfun(data){
        a=data
    console.log(a);
    showPage(1)
    }
    function hideColor(n)
{
  let string="b"+n;
  x=document.getElementById(string);
  x.classList.remove("active");
}

function  previousPage(){
   hideColor(pageNo);
if(pageNo <= 1)
{
    showPage(1)
}
else{
    showPage(pageNo-1)
}
}
function  nextPage(){
   hideColor(pageNo)
if(pageNo >= 10)
{
    showPage(10)
}
else{
    showPage(pageNo+1)
}
}
function showPage(n){
   console.log('in')
   hideColor(pageNo);
   pageNo=n; 
   document.getElementById("para").innerText=`You are at page Number:${pageNo}`
   let string="b"+pageNo;
   document.getElementById(string).className='active';
   i=n-1;
    let j=(i*10);
    k=j+10;
    outer=document.querySelector(".outerContainer")
    
     outer.innerHTML=``;
for(i=j;i<k;i++){
    outer.innerHTML +=`<div class=innerContainer><div class=image><img src='https://w7.pngwing.com/pngs/536/457/png-transparent-computer-icons-avatar-encapsulated-postscript-id-card-face-heroes-head-thumbnail.png'></div>
   <div ><p class=number></p>${a[i].id}</div>
    <div ><p class=name></p>${a[i].name}</div>
   <div ><p class=email></p>${a[i].email}</div> </div>`    
}



}