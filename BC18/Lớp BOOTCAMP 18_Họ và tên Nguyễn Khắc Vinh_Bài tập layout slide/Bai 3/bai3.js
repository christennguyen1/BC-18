function nhapso(){
    var numberEle=document.getElementById("usr").value*1;
    var i=1;
    var s=1;
for(i=1;i<=numberEle;i++){
  s=s*i;
}
console.log(s);
alert("The Number: "+s)
document.getElementById("ketquasole").innerText="The Number: "+s;
}