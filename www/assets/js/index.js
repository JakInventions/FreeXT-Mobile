
function openNav(){
	
	if(document.getElementById("mainNav").offsetWidth == 0){
		
		document.getElementById("mainNav").className = "navOpen";
		
		document.documentElement.style.overflowY = "hidden";
		
		document.body.style.overflowY = "hidden";
		
		document.getElementById("sectionCover").style.display = "block";
		
	}
	
}

function closeNav(){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.documentElement.style.overflowY = "auto";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("sectionCover").style.display = "none";
		
	}
	
}

async function closeNavCallback(callback){
	
	if(document.getElementById("mainNav").offsetWidth != 0){
		
		document.getElementById("mainNav").className = "navClosed";
		
		document.documentElement.style.overflowY = "auto";
		
		document.body.style.overflowY = "auto";
		
		document.getElementById("sectionCover").style.display = "none";
		
	}
	
	if(window.matchMedia("(max-width: 600px)").matches){
		
		await sleep(500 * ((document.getElementById("mainNav").offsetWidth / document.documentElement.clientWidth * 100)/65));
		
	}
	else{
		
		await sleep(1000 * ((document.getElementById("mainNav").offsetWidth / document.documentElement.clientWidth * 100)/40));
		
	}
	
	callback();
	
}

function openSettings(){
	
	closeNavCallback(function(){location.href = "settings.html"});
	
}


