chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	 //alert(response);
	 
	
 });
 
 chrome.commands.onCommand.addListener(function (command) {
    if (command === "open_it") {
        iKnowIt("Nice");
    } 
});



function iKnowIt(selection) {
	if(selection[0].length > 0){
		
		var w = selection[0].trim();
		var res="";
		var c="",c1="";
		var ultmsg ="";
		//renderStatus(w);
		
			if (window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}	
			//renderStatus("Loading '"+w+"' ...");
			xmlhttp.onreadystatechange=function(){				
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					try{
					var inm = xmlhttp.responseText;
					inm = inm.replace("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 3.2 Final//EN\">\n<title>404 Not Found</title>\n<h1>Not Found</h1>\n<p>No entry available for 'the' in 'en'</p>","");
					
					var data = JSON.parse(inm);
					//var data = JSON.parse(xmlhttp.responseText);
					var a,a1,b,t,t1="";
					try{
						var len = data.phase1[0].results[0].lexicalEntries.length;
						try{
							c = "<b><i>"+ data.phase1[0].results[0].lexicalEntries[0].entries[0].etymologies[0] + "</i></b><br/>";
							c1 = data.phase1[0].results[0].lexicalEntries[0].entries[0].etymologies[0];
						}catch(e){}
						c = c + "<ul>";
						for(var i =0 ; i< len; i++){
							a = data.phase1[0].results[0].lexicalEntries[i].entries[0].senses[0].definitions[0];							
							//b = data.results[0].lexicalEntries[i].entries[0].senses[0].domains[0];
							c = c + "<li>"+ a + "</li>";
						}
						c = c + "</ul>";
					}catch(e){
						c = "Not found";
					}
					a="";
					a1=""
					a2=w +" ";
					try{											
						var len = data.phase2[0].results[0].lexicalEntries[0].entries[0].senses[0].synonyms.length;
						t1 = data.phase2[0].results[0].lexicalEntries[0].lexicalCategory;						
						t = "<br/>Type : "+ t1 + "<br/>";						
						for(var i =0 ; i< len; i++){
							var adt = data.phase2[0].results[0].lexicalEntries[0].entries[0].senses[0].synonyms[i].text.trim();
							a = a + adt;
							a1 = a1 + adt;
							//alert(adt);
							if(!adt.includes(" ")>0){
								a2 = a2 + adt;								
							}else{
								//alert("2"+adt);
							}							
							if(i%5==0 && i != 0){
								a= a + "\n";
							}else if (i!=len-1){
								a=a + " , ";
								a1=a1 + ",";
								if(!adt.indexOf(" ")>=0){
									a2=a2 + " ";
								}								
							}							
						}						
					}catch(e){
						a = "Not found";
					}	
					
					ultmsg = ultmsg +"<h4>"+ w + "</h4>\n"+c + "<b>"+t+"Synonyms:</b><br/>" + a;
					////renderStatus(ultmsg);
					
					
					
					if (window.XMLHttpRequest){
						xmlhttp2=new XMLHttpRequest();
					}else{
						xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp2.onreadystatechange=function(){				
						if (xmlhttp2.readyState==4 && xmlhttp2.status==200){
							var data2 = JSON.parse(xmlhttp2.responseText);
							var res = data2.response[0].success;
							var allword	="";
							var main_word_score =0;
							if(res=== true) {
								var len2 = data2.infos.length;
								//ultmsg = ultmsg + "<br/>With Rank </br>";
								for(var i=0;i<len2;i++){
									//ultmsg = ultmsg + data2.infos[i].info.word +  "  " + data2.infos[i].info.wd + "<br/>";
									
									// allword = allword + data2.infos[i].info.word +  ":" + data2.infos[i].info.wd;
									if(data2.infos[i].info.word == w){
										main_word_score = data2.infos[i].info.wd;
									}else{
										allword = allword + data2.infos[i].info.word +  ":" + data2.infos[i].info.wd;
										if (i!=len2-1){
											allword = allword + ",";
										}
									}									
								}								
							}	
							//renderStatus(ultmsg);
							
							//------------------------- Store in Local Storage ---------------------
							var obj = new Object();
							obj.search_word = w;
							obj.search_w_score = main_word_score;
							obj.meaning  = c1;
							obj.synonyms  = a1;
							obj.synonyms_total  = allword;
							obj.typ  = t1;
							var jsonString= "["+ JSON.stringify(obj) + "]";
						   
						   //~~~~~~ load previous value 
						   
								var prev_value ="";
								try{
									chrome.storage.local.get('user_word', function(result){
										
									prev_value = result.user_word;
									if(prev_value){
										if( !prev_value.includes("\"search_word\":\""+w+"\"") ){
											// New Add										
											prev_value = prev_value.replace("[","");
											jsonString = jsonString.replace("]",",");
											jsonString = jsonString + prev_value;
											
											
											var storage_word = chrome.storage.local;
											var uw1 = 'user_word';
											var obj= {};							
											obj[uw1] = jsonString;
											//obj[uw1] = obj[uw1].concat(prev_value);
											storage_word.set(obj);
										}else{		
											// already stored
											//alert("inside 2");
										}
									}else{
										var storage_word = chrome.storage.local;
										var uw1 = 'user_word';
										var obj= {};							
										obj[uw1] = jsonString;
										//obj[uw1] = obj[uw1].concat(prev_value);
										storage_word.set(obj);
									}
									
									//prev_value = JSON.stringify(prev_value);
								  });
								}catch(e){
									alert("catch");
									var storage_word = chrome.storage.local;
									var uw1 = 'user_word';
									var obj= {};							
									obj[uw1] = jsonString;
									//obj[uw1] = obj[uw1].concat(prev_value);
									storage_word.set(obj);
								}
						   
						   
						   
							//------------------------- Store in Local Storage ---------------------
							
							//ultmsg = ultmsg + "<br/>Word Weight : " +mc_sum;
							//var sc = (w.length/mc_sum)*Math.pow(10,7)
							//ultmsg = ultmsg + "<br/>Score : " + sc;
							
							//---------------------------------------
							/*
							var storage = chrome.storage.local;
							var old_value =0;
							try{
								chrome.storage.local.get('p1', function(result){
								old_value = parseFloat(result.p1);
							  });
							}catch(e){}
							
							var v1 = 'p1';
							var obj= {};							
							obj[v1] = parseFloat((sc+old_value)/2.0);
							storage.set(obj);
							var p1;
							chrome.storage.local.get('p1', function(result){								
								p1 = result.p1;		
								//alert("B"+p1);								
								ultmsg = ultmsg + "<br/>User Weight : "+p1;
								//renderStatus(ultmsg);
							  });
							*/
							//---------------------------------------
							
						}
						
					}
					xmlhttp2.open("GET","http://word.tanmaysarkar.com/api/public.php?t=1&w="+a2,true);
					xmlhttp2.setRequestHeader("accept", "application/json");
					xmlhttp2.setRequestHeader( 'Access-Control-Allow-Origin', '*');			
					xmlhttp2.send();
					}catch(e){
						//renderStatus("Unable to find word '"+w+"' from OXFORD Free service");
					}					
				}else{
					////renderStatus(xmlhttp.status);
				}
			}
			xmlhttp.open("GET","http://word.tanmaysarkar.com/api.php?w="+w,true);
			xmlhttp.setRequestHeader("accept", "application/json");
			xmlhttp.setRequestHeader( "Access-Control-Allow-Origin", "*");	
			xmlhttp.send();
	}else{
		//alert(document.documentElement.innerHTML);
		////renderStatus(prev +"<br/><b>Plese select a word</b>");
		//renderStatus("<b>Please select a word</b>");
	}		
}