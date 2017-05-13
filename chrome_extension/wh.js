	var storage = chrome.storage.local;
	var old_value =0,uwd="";
	try{
		chrome.storage.local.get('p1', function(result){
		old_value = parseFloat(result.p1);
		document.getElementById('item_reflect').textContent = "Your Score : "+old_value;		
	  });
	}catch(e){}

	try{
		
		chrome.storage.local.get('user_word', function(result){
		uwd = result.user_word;
		
		var data = JSON.parse(uwd);
		var msg ="";
		for(i=0;i<data.length;i++){
			msg = msg + "<b>"+data[i].search_word + "</b> - Synonyms : "+ data[i].synonyms +"<br/>";
		}
		document.getElementById('status').innerHTML = "<b>You have searched : </b><br/><br/>"+msg;
	  });
	}catch(e){}