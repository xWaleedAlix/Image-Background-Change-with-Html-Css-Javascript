let imgBox=document.querySelector('.img-box');
let imgWrap=document.querySelector('.img-wrap');
let OrignalImg=document.getElementById('orignalImg');
let line=document.getElementById('line');
let leftSpace=imgBox.offsetLeft;
    OrignalImg.style.width=imgBox.offsetWidth +'px'
imgBox.onmousemove = function(e){
    e.pageX;
    let boxWidth=(e.pageX-leftSpace) +'px'
    imgWrap.style.width=boxWidth;
    line.style.left=boxWidth;
}