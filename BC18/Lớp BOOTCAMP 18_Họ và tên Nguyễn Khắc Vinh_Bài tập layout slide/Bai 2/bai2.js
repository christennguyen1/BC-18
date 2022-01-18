function nhapso(){
    var numberEleX=document.getElementById("usrx").value*1;
    var numberEleN=document.getElementById("usrn").value*1;
    var i=1;
    var s=0;
for(i=1;i<=numberEleN;i++){
  s=s+Math.pow(numberEleX,i);
}
console.log(s);
alert("The Number: "+s)
document.getElementById("ketquasole").innerText="The Number: "+s;
}