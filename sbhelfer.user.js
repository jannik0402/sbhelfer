// ==UserScript==
// @name         SB-Bilder Originallink
// @namespace    https://schwarzwaelder-bote.de
// @version      1.0
// @description  Kleines Tool für die Arbeit des Schwarzwälder Boten.
// @author       Jannik Nölke
// @match        https://www.schwarzwaelder-bote.de/*
// @grant        none
// @updateURL    https://github.com/jannik0402/sbhelfer/raw/main/sbhelfer.user.js
// @downloadURL  https://github.com/jannik0402/sbhelfer/raw/main/sbhelfer.user.js
// ==/UserScript==

(function() {
    'use strict';

    var seitenurl = window.location.toString();
    console.log(seitenurl);


    if (seitenurl.indexOf("original1024") > -1){
        window.location.href = seitenurl.replace("original1024","original");
        window.location.href = seitenurl.replace("original700","original");
        console.log("Kleines Bild");
       }else{
           console.log("Originalbild");

        }

document.addEventListener("keydown", Tastendruck );

    function Tastendruck(evt) {
	  let zeichen = String.fromCharCode(evt.charCode);
    if(evt.keyCode == 76){
        console.log('L Gedrückt')
        let neuerlink = seitenurl.replace("https://www.schwarzwaelder-bote.de","");
        if(neuerlink != "/"){
            copy2Clipboard(neuerlink)
            alert(neuerlink + "\n\nIn die Zwischenablage kopiert!");
        }else{
            alert("\n\nDu bist ein echter Spaßvogel! 🤣🤣🤣 \n\nEin relativer Link der Startseite macht doch nun wirklich keinen Sinn...\n\n");
        }
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

})();
