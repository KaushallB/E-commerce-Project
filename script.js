const imgs=document.querySelectorAll('.header-slider ul img');
const prev=document.querySelector('.control-prev');
const next=document.querySelector('.control-next');

let k=0;

function transition(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[k].style.display='block';
}
transition();

prev.addEventListener('click',(e)=>{
        if(k>0){
            k--;
        }else{
            k=imgs.length-1;
        }
        transition();
})

next.addEventListener('click',(e)=>{
    if(k<imgs.length-1){
        k++;
    }
    else{
        k=0;
    }
    transition();
})

const scroll=document.querySelectorAll('.products');
for(const item of scroll){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    })
}