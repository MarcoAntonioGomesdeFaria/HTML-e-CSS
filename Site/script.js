const nav=document.getElementsByTagName("nav")[0];
const topoNav=nav.offsetTop;

window.onscroll=function(){fixarnotopo();}

function fixarnotopo(){
    if(window.scrollY >= topoNav){
        nav.classList.add("fixonotopo");
    }else{
        nav.classList.remove('fixonotopo');
    }
}