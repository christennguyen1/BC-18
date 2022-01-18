function soNguyenTo(n){
  if(n<2){
    return false;
  }
  else{
    for(var i=2;i<=Math.sqrt(n);i++){
      if(n%i==0){
        return false;
      }
    }
  }
  return true;
}

function nhapso(){
    var numberEle=document.getElementById("usr").value*1;
    var i=0;
    var s="";
    var str=""
for(i=0;i<=numberEle;i++){
if(soNguyenTo(i)==true){
  s+="<div>Sô: "+i+"</div>";
  str+=i+",";
}
}
alert(str);
 document.getElementById("ketquasole").innerHTML=s;
}