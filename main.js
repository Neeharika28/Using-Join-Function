function getpara1(){
var input=[];
for (var i=1;i <=6;i++){
input.push(document.getElementById("para1_inputbox_"+i).value);
}
input.join(".")
document.getElementById("getparagraph1").innerHTML=input.join(".");
}

function getpara2(){
    var input=[];
    for (var j=1;j <=6;j++){
    input.push(document.getElementById("para2_inputbox_"+j).value);
    }
    input.join(".")
    document.getElementById("getparagraph2").innerHTML=input.join(".");
    }