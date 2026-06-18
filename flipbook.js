$(document).ready(function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1500);

$("#book").turn({

width:1000,

height:650,

autoCenter:true,

gradients:true,

acceleration:true,

elevation:50,

duration:1200,

when:{

turning:function(){

document
.getElementById("flipSound")
.play();

}

}

});

});
