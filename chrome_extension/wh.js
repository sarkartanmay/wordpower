	var storage = chrome.storage.local;
	var old_value =0,uwd="";
	try{
		chrome.storage.local.get('p1', function(result){
		old_value = parseFloat(result.p1);
		if(old_value){
			document.getElementById('item_reflect').innerHTML = "Your Score : "+old_value;	
		}else{
			document.getElementById('item_reflect').innerHTML = "";	
		}
			
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
		document.getElementById('status').innerHTML = "<br/><b>You have searched : </b><br/><br/>"+msg;
	  });
	}catch(e){}
	
	// ------------ Load base score
	try{
		chrome.storage.local.get('b1', function(result){
		old2_value = parseFloat(result.b1);
		if(!old2_value){
			var m1 ="";
			m1 = "<b>Please check the textbox which you must know the meaning : </b><br/><br/>";
			
			m1 = m1 + "<div class='row'>";			
			m1 = m1 + "<div class='col-sm-4'>";			
			m1 = m1 + "<div class='well'>";			
			m1 = m1 + "<div class='panel panel-primary'>";			
			m1 = m1 + "<div class='panel-heading'>";			
			m1 = m1 + "</div>";
			m1 = m1 + "<div class='panel-body'>";			
			m1 = m1 + "<table class='table table-hover'>";			
			m1 = m1 + "<thead>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<th>#</th>";			
			m1 = m1 + "<th>Word</th>";			
			m1 = m1 + "</tr>";			
			m1 = m1 + "</thead>";			
			m1 = m1 + "<tbody>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='2544' id='basic_1'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Historical";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";	
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='5087' id='basic_2'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Rebellion";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='7630' id='basic_3'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Canopy";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='10178' id='basic_4'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Subsist";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='12690' id='basic_5'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Prodigy";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "</tbody>";			
			m1 = m1 + "</table>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			
			
			m1 = m1 + "<div class='col-sm-4'>";			
			m1 = m1 + "<div class='well'>";			
			m1 = m1 + "<div class='panel panel-primary'>";			
			m1 = m1 + "<div class='panel-heading'>";			
			m1 = m1 + "</div>";
			m1 = m1 + "<div class='panel-body'>";			
			m1 = m1 + "<table class='table table-hover'>";			
			m1 = m1 + "<thead>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<th>#</th>";			
			m1 = m1 + "<th>Word</th>";			
			m1 = m1 + "</tr>";			
			m1 = m1 + "</thead>";			
			m1 = m1 + "<tbody>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='16537' id='basic_6'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Subvert";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";	
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='20356' id='basic_7'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Syllogism";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='24163' id='basic_8'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Dissertation";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='27984' id='basic_9'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Austral";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='31773' id='basic_10'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Suffragist";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "</tbody>";			
			m1 = m1 + "</table>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";		


			m1 = m1 + "<div class='col-sm-4'>";			
			m1 = m1 + "<div class='well'>";			
			m1 = m1 + "<div class='panel panel-primary'>";			
			m1 = m1 + "<div class='panel-heading'>";			
			m1 = m1 + "</div>";
			m1 = m1 + "<div class='panel-body'>";			
			m1 = m1 + "<table class='table table-hover'>";			
			m1 = m1 + "<thead>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<th>#</th>";			
			m1 = m1 + "<th>Word</th>";			
			m1 = m1 + "</tr>";			
			m1 = m1 + "</thead>";			
			m1 = m1 + "<tbody>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='34272' id='basic_11'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Phylarch";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";	
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='50842' id='basic_12'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Paranomasia";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";			
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='66812' id='basic_13'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Concessionaire";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='70494' id='basic_14'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Antimonarchical";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "<tr>";			
			m1 = m1 + "<td>";
			m1 = m1 + "<input type='checkbox' value='77731' id='basic_15'  />";			
			m1 = m1 + "</td>";	
			m1 = m1 + "<td>";
			m1 = m1 + "Transmogrification";			
			m1 = m1 + "</td>";				
			m1 = m1 + "</tr>";
			m1 = m1 + "</tbody>";			
			m1 = m1 + "</table>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";			
			m1 = m1 + "</div>";	


			
			m1 = m1 + "</div>";				
				
			document.getElementById('item_first').innerHTML = m1;
		}else{
			//Hide button
			var ud =0;
			var sc="";
			var v=0.0;
			try{
				chrome.storage.local.get('b1', function(result){
				ud = parseFloat(result.b1);
				if(ud<=12720){
					v= Math.round((((ud-2000)/(12720-2000))*100))
					sc = "Level Beginner : " + v + " %";
				}else if(ud<=31800){
					v= Math.round((((ud-12721)/(31800 -12721))*100))
					sc = "Level Medium : " + v + " %";
				}else if(ud<=127199){
					v= Math.round((((ud-31801)/(127199 -31801))*100))
					sc = "Level Pro : " + v+ " %";
				}
				document.getElementById('item_first').innerHTML = "According your test your Base Score is : " + sc + "<br/><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='"+v+"' aria-valuemin='0' aria-valuemax='100' style='width:"+v+"%'></div></div>" ;
			  });
			}catch(e){}
			document.getElementById('item_first').innerHTML = "";
			document.getElementById('item_first2').innerHTML = "";
		}
	  });
	}catch(e){}
	
