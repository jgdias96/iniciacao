setInterval(function(){getDateTime(); }, 1000);
function getDateTime(){
	var date = new Date();
	var stringDia, stringMes, stringHora, stringMin, stringSecs;
	if(date.getDate()<10){
		stringDia = "0"+date.getDate();
	}
	else{
		stringDia = ""+date.getDate();
	}

	if(date.getMonth()+1<10){
		stringMes = "0"+(date.getMonth()+1);
	}
	else{
		stringMes = ""+(date.getMonth()+1);
	}

	if(date.getHours()<10){
		stringHora = "0"+date.getHours();
	}
	else{
		stringHora = ""+date.getHours();
	}

	if(date.getMinutes()<10){
		stringMin = "0"+date.getMinutes();
	}
	else{
		stringMin = ""+date.getMinutes();
	}

	if(date.getSeconds()<10){
		stringSecs = "0"+date.getSeconds();
	}
	else{
		stringSecs = ""+date.getSeconds();
	}

	var stringDate = stringDia+"/"+stringMes+"/"+date.getFullYear()+" "+ stringHora +":"+ stringMin +":"+ stringSecs;
	document.getElementById("dataHoraText").innerHTML = stringDate;
}

//----------------------------------------
var slideInterval;
var slideIndex = 0;
function cancelSlideInterval(){
	clearTimeout(slideInterval);
}

function activateSlideInterval(){
	slideInterval = setInterval(function(){  slideImagens(); }, 1000);
}

/*
function slideImagens(){
	var slideImgs = document.getElementsByClassName("slideImagesClass");
	slideIndex++;
	if(slideIndex>2){
		slideIndex =0;
	}
	var i = 0;
	for (i = 0; i < slideImgs.length; i++) {
     	slideImgs[i].style.display = "none";  
  	}

  	var slideImgsHomem = document.getElementsByClassName("homemImagem");
  	var slideImgsMulher = document.getElementsByClassName("mulherImagem");
  	var slideImgsCrianca = document.getElementsByClassName("kidsImagem");

  	slideImgsHomem[slideIndex].style.display = "block"; 
  	slideImgsMulher[slideIndex].style.display = "block";
  	slideImgsCrianca[slideIndex].style.display = "block";  
    }
*/

function slideImagens(){
  	var slideImgsHomem = document.getElementsByClassName("homemImagem");
  	var slideImgsMulher = document.getElementsByClassName("mulherImagem");
  	var slideImgsCrianca = document.getElementsByClassName("kidsImagem");

  	slideImgsHomem[slideIndex].className = slideImgsHomem[slideIndex].className.replace(" fade", "");
  	slideImgsMulher[slideIndex].className = slideImgsMulher[slideIndex].className.replace(" fade", "");
  	slideImgsCrianca[slideIndex].className = slideImgsCrianca[slideIndex].className.replace(" fade", "");
  	
  	slideImgsHomem[slideIndex].style.display = "none"; 
  	slideImgsMulher[slideIndex].style.display = "none";
  	slideImgsCrianca[slideIndex].style.display = "none";  
	
  	slideIndex++;
  	if(slideIndex>2){
		slideIndex =0;
	}
  	slideImgsHomem[slideIndex].style.display = "inline-block"; 
  	slideImgsMulher[slideIndex].style.display = "inline-block";
  	slideImgsCrianca[slideIndex].style.display = "inline-block";  

  	slideImgsHomem[slideIndex].className += " fade";
  	slideImgsMulher[slideIndex].className += " fade";
  	slideImgsCrianca[slideIndex].className += " fade";
}


function setNewPage(idPage){
	var divs = document.getElementsByClassName("pageDivs");
	var i =0;
	for (i = 0; i < divs.length; i++) {
     	divs[i].style.display = "none";  
  	}
  	document.getElementById(idPage).style.display = "inline-block";



}

