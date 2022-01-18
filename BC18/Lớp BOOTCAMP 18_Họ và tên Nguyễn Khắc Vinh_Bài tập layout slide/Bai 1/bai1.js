function nhapso(){
    var numberEle=document.getElementById("usr").value*1;
    var i=0;
    var s=0;
while(s<=numberEle){
    i++;
  s=s+i;
}
console.log(i);
alert("The Number: "+i)
document.getElementById("ketquasole").innerText="The Number: "+i;
}