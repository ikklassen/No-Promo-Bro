var currenthtml;
var latesthtml;	
var totalads = 0;
	
function toggle(className, displayState){
    var promoted = document.getElementsByClassName(className);
	
	if(promoted.length > totalads){	
		console.log("Found And Removed " + (promoted.length-totalads) + " Ads.  Total Removed Ads: " + promoted.length + ".");	
		totalads=promoted.length;    	
		for (var i = 0; i < promoted.length; i++){
			promoted[i].style.display = displayState;
		}
	
	}else{		
		console.log("No New Ads. Total Removed Ads: " + totalads + "."); 		
	}
}

function enter(){	
	toggle('promotedlink', 'none'); // hide ads
	var elements = document.getElementsByClassName("scrollerItem");
    currenthtml = elements.length;
    latesthtml = elements.length;
   
    setInterval(function() {
		console.log("Checking Page");		
		var newelements = document.getElementsByClassName("scrollerItem");
        latesthtml = newelements.length;
        if(currenthtml != latesthtml) {	
		console.log("Page Content Has Updated. Checking For New Ads.");  
        currenthtml = newelements.length;
		toggle('promotedlink', 'none'); // hide ads
        } else{
			
		console.log("No Change To Page. Total Removed Ads: " + totalads + "."); 
		}
    }, 2000);
	
}

setTimeout("enter()", 500);