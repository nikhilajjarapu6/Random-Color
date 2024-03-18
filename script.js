const random=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    var rgb=`RGB(${red}, ${green}, ${blue})`

    console.log(rgb);
    let container=document.getElementsByClassName('container')[0];
    container.style.backgroundColor=rgb;

    let colorName = document.getElementsByClassName('colorName')[0];
    colorName.textContent = rgb;

   
}
document.addEventListener("DOMContentLoaded",function(){
    
    let container=document.getElementsByClassName('container')[0];
    let para=document.createElement('p');
    para.setAttribute('class','colorName')
    container.appendChild(para)   

})