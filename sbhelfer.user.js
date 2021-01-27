// ==UserScript==
// @name         SB-Helfertool
// @namespace	 https://github.com/jannik0402/sbhelfer
// @version      1.4.4
// @description  Kleines Tool für die Arbeit des Schwarzwälder Boten. Beim öffnen eines Bildes öffnet sich automatisch die Original-URL (ohne 1024 oder 700). Beim Klick von "L" auf der Seite, wird der relative Link in die Zwischenablage kopiert.
// @author       Jannik Nölke
// @match        https://www.schwarzwaelder-bote.de/*
// @match        https://www.lahrer-zeitung.de/*
// @match        https://www.stuttgarter-zeitung.de/*
// @match        https://www.stuttgarter-nachrichten.de/*
// @grant        none
// @icon	 https://janoe-media.de/wp-content/uploads/2021/01/cropped-NEU-Transparent-32x32.png
// @updateURL    https://github.com/jannik0402/sbhelfer/raw/main/sbhelfer.user.js
// @downloadURL  https://github.com/jannik0402/sbhelfer/raw/main/sbhelfer.user.js
// ==/UserScript==

(function() {
    'use strict';
	

    	var seitenurl = window.location.toString();


    if (seitenurl.indexOf("original1024") > -1){
        window.location.href = seitenurl.replace("original1024","original");
        console.log("Kleines Bild");
    }

    if (seitenurl.indexOf("original700") > -1){
        window.location.href = seitenurl.replace("original1024","original");
        console.log("Kleines Bild");
    }



    function Tastendruck(evt) {
        console.log(evt.keyCode);

   	if(evt.keyCode == '76'){
        	let neuerlink = seitenurl.replace("https://www.schwarzwaelder-bote.de","");
		neuerlink = neuerlink.replace("https://www.lahrer-zeitung.de","");
		neuerlink = neuerlink.replace("https://www.stuttgarter-nachrichten.de","");
		neuerlink = neuerlink.replace("https://www.stuttgarter-zeitung.de","");
		
		if(neuerlink.indexOf("?byPassDigCmsCache") > -1){
			var bypass = neuerlink.indexOf("?byPassDigCmsCache");
			neuerlink = neuerlink.substring(0,bypass);
		}
		
        	if(neuerlink != "/"){
            		alert(neuerlink + "\n\nIn die Zwischenablage kopiert! ✅");
			copy2Clipboard(neuerlink)
			}
        	}else{
                /*alert("\n\nDu bist ein echter Spaßvogel! 🤣🤣🤣 \n\nEin relativer Link der Startseite macht doch nun wirklich keinen Sinn...\n\n");*/
        	}
    }
  


    function copy2Clipboard(str) {
	var ta = document.createElement('textarea');
	ta.value = str;
	document.body.appendChild(ta);
	ta.select();
	document.execCommand('copy');
	document.body.removeChild(ta);
};


    	document.addEventListener("keydown", Tastendruck );

})();
