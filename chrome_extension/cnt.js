chrome.runtime.sendMessage(document.body.innerText , function(response) {
  //console.log(response);
});

var urank2 =0;

var old_word_value =0,uwd="";
	try{
		chrome.storage.local.get('user_word', function(result){
		old_word_value = result.user_word;
		
		
		if(old_word_value){
			//alert(old_word_value);
			findlocallearn(old_word_value);
		}else{			
			findlocallearn("");
		}
			
	  });
	}catch(e){		
		findlocallearn("");
	}

function findlocallearn(locallearn){
try{
	chrome.storage.local.get('b1', function(result){
	urank2 = parseFloat(result.b1);	
	//---------------------- Put All Code here ----------------------------	
		var w = document.body.innerText;
		var res="";
		var c="";
		var inm ;
		var ultmsg ="";
		//renderStatus(w);
		if(locallearn){
			
		}else{
			
		}
		
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
			
			xmlhttp.open("GET","//word.tanmaysarkar.com/api/public.php?t=1&u="+urank2+"&w="+w,true);
			//xmlhttp.open("GET","//localhost/hackathon/api/public.php?t=1&u="+urank2+"&w="+w,true);
			xmlhttp.setRequestHeader("accept", "application/json");
			xmlhttp.setRequestHeader( "Access-Control-Allow-Origin", "*");	
			xmlhttp.send();
	//---------------------- Put All Code here ----------------------------		
  });
}catch(e){
	
}finally{
	
}
}	