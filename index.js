let Eyes=document.querySelectorAll("#Eyes");
let pos=document.getElementById("Minion");
let rect=pos.getBoundingClientRect();
document.onmousemove=(event)=>{
    let x=event.x-(rect.left + rect.width/2);
    let y=event.y-(rect.top + rect.height/2);
    var rad = Math.atan2(y, x) * (180 / Math.PI);
    for(let eye of Eyes)
    {
        eye.style.transform=`rotate(${rad}deg) translate(10px)`;
        pos.style.filter= `hue-rotate(${rad}deg)`;
    }
    console.log(window.scrollY);
}; 