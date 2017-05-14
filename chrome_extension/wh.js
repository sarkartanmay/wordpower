	var storage = chrome.storage.local;
	var old_value =0,uwd="";
	try{
		chrome.storage.local.get('p1', function(result){
		old_value = parseFloat(result.p1);
		if(old_value){
			//--------------------------------------------------------------------
			
			
			//--------------------------------------------------------------------
			
			//document.getElementById('item_reflect').innerHTML = "Your Score : "+old_value ;	
		}else{
			document.getElementById('item_reflect').innerHTML = "";	
			document.getElementById('item_reflect2').innerHTML = "";	
		}
			
	  });
	}catch(e){}

	try{
		
		chrome.storage.local.get('user_word', function(result){
		uwd = result.user_word;
		if(!uwd){
			document.getElementById('game1_susbmit').innerHTML = "";
		}
		var data = JSON.parse(uwd);
		var msg ="";
		var len2 = data.length;
		var x =0.0;
		for(i=0;i<len2;i++){
			x = x+ parseFloat(data[i].search_w_score);
		}
		var cur_score = x+old_value ;
		//document.getElementById('item_reflect').innerHTML = "Your Score : "+cur_score;	
		small_cu_score = 45690+99380;
		small_cu_count = 35;
		
		mid_cu_score = small_cu_score + 173060+266690;
		mid_cu_count = 70;
		
		high_cu_score = mid_cu_score + 414160;
		high_cu_count = 85;
		
		var c=0;
		var lvl ="";
		if(cur_score < small_cu_score && len2 < small_cu_count){
			var a = (cur_score/small_cu_score);
			var b = (len2/small_cu_count);
			c=0;
			if(a<b){
				c=a*100;
			}else{
				c=b*100;
			}	
			lvl = "Beginner";
		}else if(cur_score < mid_cu_score && len2 < mid_cu_count){
			var a = (cur_score/mid_cu_score);
			var b = (len2/mid_cu_count);
			c=0;
			if(a<b){
				c=a*100;
			}else{
				c=b*100;
			}	
			lvl = "Intermediate";			
		}else if(cur_score < high_cu_score && len2 < high_cu_count){
			var a = (cur_score/high_cu_score);
			var b = (len2/high_cu_count);
			c=0;
			if(a<b){
				c=a*100;
			}else{
				c=b*100;
			}	
			lvl = "Advanced";
		}
		
		
		document.getElementById('item_first').innerHTML = "<h4>Your Level is : " + lvl + " ("+Math.round(c,3)+" % )</h4><br/><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='"+c+"' aria-valuemin='0' aria-valuemax='100' style='width:"+c+"%'></div></div>" ;
		
		
		for(i=0;i<len2;i++){
			var x = data[i].synonyms_total.split(",");
			msg = msg + "<b>"+data[i].search_word + "</b> - Synonyms : ";
			for(j=0;j<x.length;j++){
				var y = x[j].split(":");
				msg = msg + y[0] + " ";
				if(j!=x.length-1){
					msg = msg + " , ";
				}
			}
			msg = msg + "<br/>";
		}
		document.getElementById('status').innerHTML = "<br/><b>You have searched : </b><br/><br/>"+msg;
		//alert("why?" + len2);
		var start_limit =4;
		var end_limit =len2-1;
		var crt_ques ="";
		//alert(len2);
		if(len2>start_limit){
			var qno = Math.floor(Math.random() * end_limit-1) + 2;
			var syn = data[qno].synonyms_total;
			var syn_array = syn.split(',');
			var syn_any = Math.floor(Math.random() * syn_array.length-1) + 1;

			crt_ques = "I am <b>" + data[qno].typ+"</b>";
			crt_ques = crt_ques + "<br/>and one of my synonym is : <b>" + syn_array[syn_any].split(":")[0]+"</b>";
			crt_ques = crt_ques + "<br/>Tell me who am I ? ";
			var ans = data[qno].search_word;
			
			var qno1 = Math.floor(Math.random() * 4-1) + 2;			
			var qno2 = Math.floor(Math.random() * 4-1) + 2;
			while(qno2==qno1){
				qno2 = Math.floor(Math.random() * 4-1) + 2;
			}
			var qno3 = Math.floor(Math.random() * 4-1) + 2;
			while(qno3==qno1 || qno3==qno2){
				qno3 = Math.floor(Math.random() * 4-1) + 2;
			}
			var qno4 = Math.floor(Math.random() * 4-1) + 2;
			while(qno4==qno1 || qno4==qno2 || qno4==qno3){
				qno4 = Math.floor(Math.random() * 4-1) + 2;
			}
			//var allOptions ="1234";
			//var e=allOptions.repalce(qno,"");
			//alert(qno1 + " : " + qno2 + " : " + qno3+ " : " + qno4);
			var pos = Math.floor(Math.random() * 4-1) + 2;
			var qset = new Array();
						
			qset[qno1] = "Demo 1";
			qset[qno2] = "Demo 2";
			qset[qno3] = "Demo 3";
			
			for(m=len2-1,k=1;m>0;m--){
				var b = data[m].search_word;				
				if(b!=ans){
					if(k==1){
						qset[qno1] = b;
					}else if(k==2){
						qset[qno2] = b;
					}else if(k==3){
						qset[qno3] = b;
					}else{
						break;
					}
					
					k++;
				}
			}
			qset[qno4] = ans;
			
			//crt_ques = crt_ques + "<br/>Ans : "+ data[qno].search_word;
			crt_ques = crt_ques + "<br/<br/>";
			for(k=1;k<=4;k++){
				crt_ques = crt_ques + "<input type='radio' name='quiz_01' id='quiz_01' value='"+qset[k]+"'> "+qset[k]+"<br>";
			}
			
			
			crt_ques = crt_ques + "<input type='hidden' name='ult_ans' id='ult_ans' value='"+ans+"'>";
			document.getElementById('game1').innerHTML = crt_ques;
		}else{
			document.getElementById('game1_susbmit').innerHTML = "";
		}
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
			document.getElementById('game1_susbmit').innerHTML = "";
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
				//document.getElementById('item_first').innerHTML = "According your test your Base Score is : " + sc + "<br/><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='"+v+"' aria-valuemin='0' aria-valuemax='100' style='width:"+v+"%'></div></div>" ;
			  });
			}catch(e){}
			//document.getElementById('item_first').innerHTML = "";
			document.getElementById('item_first2').innerHTML = "";
			
		}
	  });
	}catch(e){}
	
