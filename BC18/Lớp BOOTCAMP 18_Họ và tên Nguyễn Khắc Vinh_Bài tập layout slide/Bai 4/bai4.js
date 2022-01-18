function nhapso(){
  var divs=document.getElementsByTagName("div")
    var i=0;
for(i=0;i<divs.length;i++){
if(i%2==0){
  divs[i].style.background="green";
}
else{
  divs[i].style.background = "red";
}
}
}