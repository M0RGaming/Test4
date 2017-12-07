function atstart() {

}

function atend() {

}




function function1a() {
	$(step1).slideUp(1000).delay(500);
	setTimeout(function1b, 1000);
}
function function1b() {
	$(step2).slideDown(1000);
	document.getElementById("downarrow").onclick= function2a;
	document.getElementById("uparrow").onclick= function1c;
}


function function2a() {
	$(step2).slideUp(1000).delay(500);
	setTimeout(function2b, 1000);
}
function function2b() {
	$(step2other).slideDown(1000);
	document.getElementById("downarrow").onclick= function3a;
	document.getElementById("uparrow").onclick= function2c;
}


function function3a() {
	$(step2other).slideUp(1000).delay(500);
	setTimeout(function3b, 1000);
}
function function3b() {
	$(faders1).slideDown(1000);
	document.getElementById("downarrow").onclick= function4a;
	document.getElementById("uparrow").onclick= function3c;
}


function function4a() {
	$(faders1).slideUp(1000).delay(500);
	setTimeout(function4b, 1000);
}
function function4b() {
	$(faders2).slideDown(1000);
	document.getElementById("downarrow").onclick= function5a;
	document.getElementById("uparrow").onclick= function4c;
}


function function5a() {
	$(faders2).slideUp(1000).delay(500);
	setTimeout(function5b, 1000);
}
function function5b() {
	$(faders3).slideDown(1000);
	document.getElementById("downarrow").onclick= function6a;
	document.getElementById("uparrow").onclick= function5c;
}


function function6a() {
	$(faders3).slideUp(1000).delay(500);
	setTimeout(function6b, 1000);
}
function function6b() {
	$(warning).slideDown(1000);
	document.getElementById("downarrow").onclick= function7a;
	document.getElementById("uparrow").onclick= function6c;
}


function function7a() {
	$(warning).slideUp(1000).delay(500);
	setTimeout(function7b, 1000);
}
function function7b() {
	$(mems).slideDown(1000);
	document.getElementById("downarrow").onclick= function8a;
	document.getElementById("uparrow").onclick= function7c;
}


function function8a() {
	$(mems).slideUp(1000).delay(500);
	setTimeout(function8b, 1000);
}
function function8b() {
	$(macro1).slideDown(1000);
	document.getElementById("downarrow").onclick= function9a;
	document.getElementById("uparrow").onclick= function8c;
}


function function9a() {
	$(macro1).slideUp(1000).delay(500);
	setTimeout(function9b, 1000);
}
function function9b() {
	$(macro2).slideDown(1000);
	document.getElementById("downarrow").onclick= function10a;
	document.getElementById("uparrow").onclick= function9c;
}


function function10a() {
	$(macro2).slideUp(1000).delay(500);
	setTimeout(function10b, 1000);
}
function function10b() {
	$(macro3).slideDown(1000);
	document.getElementById("downarrow").onclick= function11a;
	document.getElementById("uparrow").onclick= function10c;
}


function function11a() {
	$(macro3).slideUp(1000).delay(500);
	setTimeout(function11b, 1000);
}
function function11b() {
	$(cue).slideDown(1000);
	document.getElementById("downarrow").onclick= function12a;
	document.getElementById("uparrow").onclick= function11c;
}


function function12a() {
	$(cue).slideUp(1000).delay(500);
	setTimeout(function12b, 1000);
}
function function12b() {
	$(advfeat).slideDown(1000);
	document.getElementById("downarrow").onclick= function13a;
	document.getElementById("uparrow").onclick= function12c;
}


function function13a() {
	$(advfeat).slideUp(1000).delay(500);
	setTimeout(function13b, 1000);
}
function function13b() {
	$(shows).slideDown(1000);
	document.getElementById("downarrow").onclick= function14a;
	document.getElementById("uparrow").onclick= function13c;
}


function function14a() {
	$(shows).slideUp(1000).delay(500);
	setTimeout(function14b, 1000);
}
function function14b() {
	$(newshow).slideDown(1000);
	document.getElementById("downarrow").onclick= function15a;
	document.getElementById("uparrow").onclick= function14c;
}


function function15a() {
	$(newshow).slideUp(1000).delay(500);
	setTimeout(function15b, 1000);
}
function function15b() {
	$(cmdhelp).slideDown(1000);
	document.getElementById("downarrow").onclick= function16a;
	document.getElementById("uparrow").onclick= function15c;
}


function function16a() {
	$(cmdhelp).slideUp(1000).delay(500);
	setTimeout(function16b, 1000);
}
function function16b() {
	$(tips).slideDown(1000);
	document.getElementById("downarrow").onclick= function17a;
	document.getElementById("uparrow").onclick= function16c;
}


function function17a() {
	$(tips).slideUp(1000).delay(500);
	setTimeout(function17b, 1000);
}
function function17b() {
	$(end).slideDown(1000);
	document.getElementById("downarrow").onclick= atend;
	document.getElementById("uparrow").onclick= function17c;
}








function function1c() {
	$(step2).slideUp(1000).delay(500);
	setTimeout(function1d, 1000);
}
function function1d() {
	$(step1).slideDown(1000);
	document.getElementById("downarrow").onclick= function1a;
	document.getElementById("uparrow").onclick= atstart;
}


function function2c() {
	$(step2other).slideUp(1000).delay(500);
	setTimeout(function2d, 1000);
}
function function2d() {
	$(step2).slideDown(1000);
	document.getElementById("downarrow").onclick= function2a;
	document.getElementById("uparrow").onclick= function1c;
}


function function3c() {
	$(faders1).slideUp(1000).delay(500);
	setTimeout(function3d, 1000);
}
function function3d() {
	$(step2other).slideDown(1000);
	document.getElementById("downarrow").onclick= function3a;
	document.getElementById("uparrow").onclick= function2c;
}


function function4c() {
	$(faders2).slideUp(1000).delay(500);
	setTimeout(function4d, 1000);
}
function function4d() {
	$(faders1).slideDown(1000);
	document.getElementById("downarrow").onclick= function4a;
	document.getElementById("uparrow").onclick= function3c;
}


function function5c() {
	$(faders3).slideUp(1000).delay(500);
	setTimeout(function5d, 1000);
}
function function5d() {
	$(faders2).slideDown(1000);
	document.getElementById("downarrow").onclick= function5a;
	document.getElementById("uparrow").onclick= function4c;
}


function function6c() {
	$(warning).slideUp(1000).delay(500);
	setTimeout(function6d, 1000);
}
function function6d() {
	$(faders3).slideDown(1000);
	document.getElementById("downarrow").onclick= function6a;
	document.getElementById("uparrow").onclick= function5c;
}


function function7c() {
	$(mems).slideUp(1000).delay(500);
	setTimeout(function7d, 1000);
}
function function7d() {
	$(warning).slideDown(1000);
	document.getElementById("downarrow").onclick= function7a;
	document.getElementById("uparrow").onclick= function6c;
}


function function8c() {
	$(macro1).slideUp(1000).delay(500);
	setTimeout(function8d, 1000);
}
function function8d() {
	$(mems).slideDown(1000);
	document.getElementById("downarrow").onclick= function8a;
	document.getElementById("uparrow").onclick= function7c;
}


function function9c() {
	$(macro2).slideUp(1000).delay(500);
	setTimeout(function9d, 1000);
}
function function9d() {
	$(macro1).slideDown(1000);
	document.getElementById("downarrow").onclick= function9a;
	document.getElementById("uparrow").onclick= function8c;
}


function function10c() {
	$(macro3).slideUp(1000).delay(500);
	setTimeout(function10d, 1000);
}
function function10d() {
	$(macro2).slideDown(1000);
	document.getElementById("downarrow").onclick= function10a;
	document.getElementById("uparrow").onclick= function9c;
}



function function11c() {
	$(cue).slideUp(1000).delay(500);
	setTimeout(function11d, 1000);
}
function function11d() {
	$(macro3).slideDown(1000);
	document.getElementById("downarrow").onclick= function11a;
	document.getElementById("uparrow").onclick= function10c;
}


function function12c() {
	$(advfeat).slideUp(1000).delay(500);
	setTimeout(function12d, 1000);
}
function function12d() {
	$(cue).slideDown(1000);
	document.getElementById("downarrow").onclick= function12a;
	document.getElementById("uparrow").onclick= function11c;
}


function function13c() {
	$(shows).slideUp(1000).delay(500);
	setTimeout(function13d, 1000);
}
function function13d() {
	$(advfeat).slideDown(1000);
	document.getElementById("downarrow").onclick= function13a;
	document.getElementById("uparrow").onclick= function12c;
}


function function14c() {
	$(newshow).slideUp(1000).delay(500);
	setTimeout(function14d, 1000);
}
function function14d() {
	$(shows).slideDown(1000);
	document.getElementById("downarrow").onclick= function14a;
	document.getElementById("uparrow").onclick= function13c;
}


function function15c() {
	$(cmdhelp).slideUp(1000).delay(500);
	setTimeout(function15d, 1000);
}
function function15d() {
	$(newshow).slideDown(1000);
	document.getElementById("downarrow").onclick= function15a;
	document.getElementById("uparrow").onclick= function14c;
}


function function16c() {
	$(tips).slideUp(1000).delay(500);
	setTimeout(function16d, 1000);
}
function function16d() {
	$(cmdhelp).slideDown(1000);
	document.getElementById("downarrow").onclick= function16a;
	document.getElementById("uparrow").onclick= function15c;
}


function function17c() {
	$(end).slideUp(1000).delay(500);
	setTimeout(function17d, 1000);
}
function function17d() {
	$(tips).slideDown(1000);
	document.getElementById("downarrow").onclick= function17a;
	document.getElementById("uparrow").onclick= function16c;
}





function lightstyle() {
    document.getElementById('dark-style').disabled = true;
    document.getElementById('light-style').disabled = false;
    document.getElementById('stylebutton').innerHTML = "Dark Style";
    document.getElementById('stylebutton').onclick = darkstyle;
}
function darkstyle() {
    document.getElementById('dark-style').disabled = false;
    document.getElementById('light-style').disabled = true;
    document.getElementById('stylebutton').innerHTML = "Light Style";
    document.getElementById('stylebutton').onclick = lightstyle;
}