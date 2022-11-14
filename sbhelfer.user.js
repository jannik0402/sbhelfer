// ==UserScript==
// @name         SB-Helfertool
// @namespace	 https://github.com/jannik0402/sbhelfer
// @version      1.7.9
// @description  Kleines Tool für die Arbeit des Schwarzwälder Boten. Beim öffnen eines Bildes öffnet sich automatisch die Original-URL (ohne 1024 oder 700). Beim Klick von "L" auf der Seite, wird der relative Link in die Zwischenablage kopiert.
// @author       Jannik Nölke
// @match        https://www.schwarzwaelder-bote.de/*
// @match        https://www.lahrer-zeitung.de/*
// @match        https://www.stuttgarter-zeitung.de/*
// @match        https://www.stuttgarter-nachrichten.de/*
// @match        https://www.bietigheimerzeitung.de/*
// @match        https://www.esslinger-zeitung.de/*
// @match        https://www.insuedthueringen.de/*
// @match        https://www.kornwestheimer-zeitung.de/*
// @match        https://www.krzbb.de/*
// @match        https://www.leonberger-kreiszeitung.de/*
// @match        https://www.marbacher-zeitung.de/*
// @match        https://www.np-coburg.de/*
// @match        https://www.kurier.de/*
// @match        https://www.verlagshaus-jaumann.de/*
// @match	 https://cms.sirweb.de/*
// @grant        none
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
        window.location.href = seitenurl.replace("original700","original");
        console.log("Kleines Bild");
    }
	
    if (seitenurl.indexOf("original900") > -1){
        window.location.href = seitenurl.replace("original900","original");
        console.log("Kleines Bild");
    }
	var metas = document.getElementsByName("robots");
	var autor =  document.getElementsByClassName("article-details")[0].innerText.toString();
	if(metas[0].attributes[1].nodeValue.toString().indexOf("noindex") > -1){
	     if(autor.indexOf("dpa")  > -1){
		document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:10px;right:10px;background-color:red;color:white;padding:3px;">NOINDEX | DPA</div>';
	     }else if(autor.indexOf("AFP")  > -1){
		document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:10px;right:10px;background-color:red;color:white;padding:3px;">NOINDEX | AFP</div>';
	     }else{
	        document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:10px;right:10px;background-color:red;color:white;padding:3px;">NOINDEX</div>';
	     }
		
	}else{
		if(autor.indexOf("dpa")  > -1){
			document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:10px;right:10px;background-color:green;color:white;padding:3px;">INDEX | DPA</div>';
		}else{
			document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:10px;right:10px;background-color:green;color:white;padding:3px;">INDEX</div>';
		}
		
	}
	if(window.location.href.includes('byPassDigCmsCache')){
		document.getElementById("top-of-page").innerHTML += '<div style="position:fixed;z-index:9999;top:35px;right:10px;background-color:blue;color:white;padding:3px;">byPassDigCmsCache</div>';
	}
	



    function Tastendruck(evt) {
        console.log(evt.keyCode);

   	if(evt.keyCode == '49'){

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
			
        	}else{
                alert("\n\nDu bist ein echter Spaßvogel! 🤣🤣🤣 \n\nEin relativer Link der Startseite macht doch nun wirklich keinen Sinn...\n\n");
        	}}
	    
    if(evt.keyCode == '50'){

        let neuerlink = seitenurl;
		
		if(neuerlink.indexOf("?byPassDigCmsCache") > -1){
			var bypass = neuerlink.indexOf("?byPassDigCmsCache");
			neuerlink = neuerlink.substring(0,bypass);
		}
		
        	if(neuerlink != "/"){
            		alert(neuerlink + "\n\nIn die Zwischenablage kopiert! ✅");
			copy2Clipboard(neuerlink)
			
        	}else{
                alert("\n\nDu bist ein echter Spaßvogel! 🤣🤣🤣 \n\nEin relativer Link der Startseite macht doch nun wirklich keinen Sinn...\n\n");
        	}}
    
	
	if(evt.keyCode == '51'){

        let neuerlink = seitenurl;
		
		if(neuerlink.indexOf("?byPassDigCmsCache") > -1){
			var bypass = neuerlink.indexOf("?byPassDigCmsCache");
			neuerlink = neuerlink.substring(0,bypass);
		}
		
        	if(neuerlink != "/" && neuerlink.includes("schwarzwaelder-bote")){
			window.open('https://ongeto.schwabo.de/generatoren/ausgabe/design2/tarue.php?link=' + neuerlink);
			
        	}else if(neuerlink != "/" && neuerlink.includes("stuttgarter-nachrichten")){
			window.open('https://ongeto.schwabo.de/generatoren/ausgabe/design2/tarue.php?r=git&link=' + neuerlink);
		}else{
                alert("\n\nDu bist ein echter Spaßvogel! 🤣🤣🤣 \n\nEine TaRü-Folie für die Startseite macht wohl wenig Sinn\n\n");
        	}}
	    
	    
	    if(evt.keyCode == '52'){

       		    var metapropertys = getAllElementsWithAttribute('property');
		    let titel = metapropertys[0].attributes[1].nodeValue.toString();
		    let description = metapropertys[7].attributes[1].nodeValue.toString();
		    let keywords = document.getElementsByName("keywords")[0].attributes[1].nodeValue.toString();
		    const keyws = keywords.split(",");
		    for (let i=0; i<keyws.length; i++) {
  			console.log('Keyword:' + keyws[i]);
			document.getElementById("top-of-page").innerHTML = document.getElementById("top-of-page").innerHTML.replaceAll(' ' + keyws[i] + ' ',' <span style="background-color:yellow">'+ keyws[i] +'</span> ');
			    document.getElementById("top-of-page").innerHTML = document.getElementById("top-of-page").innerHTML.replaceAll(keyws[i] + ' ','<span style="background-color:yellow">'+ keyws[i] +'</span> ');
			    document.getElementById("top-of-page").innerHTML = document.getElementById("top-of-page").innerHTML.replaceAll(' ' + keyws[i],' <span style="background-color:yellow">'+ keyws[i] +'</span>');
			    document.getElementById("top-of-page").innerHTML = document.getElementById("top-of-page").innerHTML.replaceAll('>' + keyws[i] + '<','><span style="background-color:yellow"> '+ keyws[i] +'</span><');
		    }
		    /* document.getElementById("top-of-page").innerHTML = document.getElementById("top-of-page").innerHTML.replaceAll(titel,'<span style="background-color:yellow">'+ titel +'</span>'); */
			document.getElementById("article-social-bar").style.display = 'none';
	    }
    
	    if (seitenurl.indexOf("cmsApp") > -1){
        	document.getElementById("isc_9").innerHTML += '<div style="position:absolute;bottom:0px;top:0px;z-index:9999">Testbutton</div>'
    	    }
    
    }
  
function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

    function copy2Clipboard(str) {
	var ta = document.createElement('textarea');
	ta.value = str;
	document.body.appendChild(ta);
	ta.select();
	document.execCommand('copy');
	document.body.removeChild(ta);

  var data = [new ClipboardItem({ "text/plain": new Blob([str], { type: "text/plain" }) })];
  navigator.clipboard.write(data).then(function() {
  console.log("Copied to clipboard successfully!");
}, function() {
  console.error("Unable to write to clipboard. :-(");
});


};


    	document.addEventListener("keydown", Tastendruck );

})();
