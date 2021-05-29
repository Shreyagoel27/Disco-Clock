
const fun=()=>{
    console.log("hi");
    const d=new Date();
    const h=d.getHours();
    const m=d.getMinutes();
    const s=d.getSeconds();
    const hr=30*h+ m/2;
    const mr=6*m;
    const sr=6*s;
    const date= d.getDate();
    document.getElementById('arrowhr').style.transform ="rotate(" + hr + "Deg)";
    document.getElementById('arrowmin').style.transform="rotate(" + mr + "Deg)";
    document.getElementById('arrowsec').style.transform="rotate(" + sr + "Deg)";
    document.getElementById('date').innerHTML=date+"."+d.getMonth()+"."+d.getFullYear();
    console.log(date);
    

};
const s=setInterval(fun,1000);
setInterval(
function () {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById('img1').style.backgroundColor = "#"+randomColor;
},1000);