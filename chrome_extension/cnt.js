chrome.runtime.sendMessage(document.body.innerText , function(response) {
  //console.log(response);
});


var w = document.body.innerText;
		var res="";
		var c="";
		var inm ;
		var ultmsg ="";
		//renderStatus(w);
		
			if (window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}	
			//renderStatus("Loading '"+w+"' ...");
			
			//document.body.innerHTML = document.body.innerHTML.replace('the', 'hi');
			xmlhttp.onreadystatechange=function(){				
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					try{
					inm = xmlhttp.responseText;
					//alert(inm);
					var data = JSON.parse(inm);
					var len  = data.infos.length;
					var nwd="",wds="";
					for(var i =0;i<len ; i++){
						nwd = data.infos[i].info.word ;
						wds = data.infos[i].info.wd ;
						document.body.innerHTML = document.body.innerHTML.replace(new RegExp(" "+nwd+" ", "g"), " <span title='"+wds+"'><i><u>" +nwd+"</u></i></span> ");
					}
					}catch(e){}
					//sendResponse(data);					
				}
				else{
					//renderStatus(xmlhttp.status);
					//alert("what?");
				}
				}
			
			xmlhttp.open("GET","//localhost/hackathon/api/public.php?t=1&w="+w,true);
			xmlhttp.setRequestHeader("accept", "application/json");
			xmlhttp.setRequestHeader( "Access-Control-Allow-Origin", "*");	
			xmlhttp.send();