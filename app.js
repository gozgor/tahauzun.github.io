const emo1 =document.querySelector(".em1");
const emo2 =document.querySelector(".em2");
const emo3 =document.querySelector(".em3");
const emo4 =document.querySelector(".em4");
const emolar=document.getElementsByClassName("emo")
const resler=document.getElementsByClassName("res")
let x=0;
setInterval(function(){
    if (x==4){
        x=0
        for (let i=0;i<4;i++){
            emolar[i].style.opacity="1";
            
        }
    }
    if(x==3){ emolar[0].style.opacity="1";}
    emolar[x].style.transition="all .5s"
    emolar[x].style.opacity="0"
    //if(x<4){x++}
  x++
   /* else {
        x=0
        for (let i=0;i<4;i++){
            emolar[i].style.opacity="1";
        }
         };*/
        
},500)
let y=0;
let dizi=[];
for (let i=0;i<3;i++){
    resler[i].style.opacity="1"
dizi.push(resler[i]);
let temp;
}
setInterval(function(){

dizi[0].style.transition="all 3.5s ease-out "
dizi[0].style.opacity="0"
temp=dizi[0];
dizi.shift();

for (let i=0;i<2;i++){
    dizi[i].style.opacity="1"
}
dizi[0].style.zIndex="10";
dizi[1].style.zIndex="9";
temp.style.zIndex="8";
dizi.push(temp);

},3500)