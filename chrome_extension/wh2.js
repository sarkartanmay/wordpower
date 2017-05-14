	document.getElementById('shareme').addEventListener('click', share_fb);
	function share_fb() {
		var old_value =0,uwd="";
		try{
			chrome.storage.local.get('p1', function(result){
			old_value = parseFloat(result.p1);
			var old_value2 = document.getElementById("c_score").value;
			if(old_value){
				window.location = "https://www.facebook.com/sharer/sharer.php?u=www.word.tanmaysarkar.com&picture=http://word.tanmaysarkar.com/word.png&title=Word Power&caption=My Vocabulary Score &quote=My score in Word Power app is "+old_value2+" what about you?&description=Learn new words and build a powerfull Vocabulary";
			}else{
				window.location = "https://www.facebook.com/sharer/sharer.php?u=www.tanmaysarkar.com&picture=http://word.tanmaysarkar.com/word.png&title=Word Power&caption=My Vocabulary Score&quote=Learn the new word&description=Learn new words and build a powerfull Vocabulary";
			}
		  });
		}catch(e){
			window.location = "https://www.facebook.com/sharer/sharer.php?u=www.word.tanmaysarkar.com&picture=//word.tanmaysarkar.com/word.png&title=Word Power&caption=My Vocabulary Score&quote=Learn the new word&description=Learn new words and build a powerfull Vocabulary";
		}
		
	}
	
	document.getElementById('sub_game').addEventListener('click', guess_game);
	function guess_game() {	
		var gv_ans;	
		var allradios = document.getElementsByName('quiz_01');		
		var rate_value;
		for(var i = 0; i < allradios.length; i++){
			if(allradios[i].checked){
				gv_ans = allradios[i].value;
			}
		}
		
		if(gv_ans){
			var ult_ans = document.getElementById("ult_ans").value ; 
			if(ult_ans == gv_ans){				
				document.getElementById('game1').innerHTML ="";
				document.getElementById('game1_susbmit').innerHTML ="<br/>Nice! You remembered correctly";
			}else{
				document.getElementById('game1').innerHTML ="";
				document.getElementById('game1_susbmit').innerHTML ="<br/>Sorry !! Wrong choice. Correct answer is <b>"+ult_ans+"</b>";
			}
			
		}else{
			alert("Please select your answer.");
		}
	}
	
	document.getElementById('clickme').addEventListener('click', hello);
	function hello() {
		var sim_lower_score = 45690; 
		var sim_upper_score = 99380; 
		var mid_lower_score = 173060;
		
		small_cu_score = 45690+99380;
		small_cu_count = 35;
		
		mid_cu_score = small_cu_score + 173060+266690;
		mid_cu_count = 70;
		
		high_cu_score = mid_cu_score + 414160;
		high_cu_count = 85;
		
		
		
		
		var user_val = 2050 ;
		var simple_base =0; 
		var mid_base =0; 
		var hard_base =0; 
		var us_wght = new Array();
		if(document.getElementById("basic_1").checked){
			user_val = user_val  +(parseInt(basic_1.value));			
			simple_base++;
		}if(document.getElementById("basic_2").checked){
			user_val = user_val  +(parseInt(basic_2.value));
			simple_base++;
		}if(document.getElementById("basic_3").checked){
			user_val = user_val  +(parseInt(basic_3.value) );
			simple_base++;
		}if(document.getElementById("basic_4").checked){
			user_val = user_val  +(parseInt(basic_4.value));
			simple_base++;
		}if(document.getElementById("basic_5").checked){
			user_val = user_val  +(parseInt(basic_5.value));
			simple_base++;
		}
		
		if(simple_base<3){
			//alert(simple_base);
			//alert(user_val);
			setBase(user_val);
		}else{
			user_val = small_cu_score;
			if(document.getElementById("basic_6").checked){
				user_val = user_val  +(parseInt(basic_6.value));			
				mid_base++;
			}if(document.getElementById("basic_7").checked){
				user_val = user_val  +(parseInt(basic_7.value));
				mid_base++;
			}if(document.getElementById("basic_8").checked){
				user_val = user_val  +(parseInt(basic_8.value));
				mid_base++;
			}if(document.getElementById("basic_9").checked){
				user_val = user_val  +(parseInt(basic_9.value));
				mid_base++;
			}if(document.getElementById("basic_10").checked){
				user_val = user_val  +(parseInt(basic_10.value));
				mid_base++;
			}
			
			if(mid_base<3){
				//alert(mid_base);
				//alert(user_val);
				setBase(user_val);
			}else{
				user_val = mid_cu_score;
				if(document.getElementById("basic_11").checked){
					user_val = user_val  +(parseInt(basic_11.value) );			
					hard_base++;
				}if(document.getElementById("basic_12").checked){
					user_val = user_val  +(parseInt(basic_12.value) );
					hard_base++;
				}if(document.getElementById("basic_13").checked){
					user_val = user_val  +(parseInt(basic_13.value) );
					hard_base++;
				}if(document.getElementById("basic_14").checked){
					user_val = user_val  +(parseInt(basic_14.value));
					hard_base++;
				}if(document.getElementById("basic_15").checked){
					user_val = user_val  +(parseInt(basic_15.value) );
					hard_base++;
				}
				setBase(user_val);
				//alert(user_val);
			}
		}
		document.getElementById('item_first').innerHTML = "<h4>Thanks for submitting your data</h4>";
		document.getElementById('item_first2').innerHTML = "<b>Happy Learning</b>";
		
		
}
function setBase(val){
	var v1 = 'b1';
	var obj= {};							
	obj[v1] = parseFloat(val);
	storage.set(obj);
	
	var v2 = 'p1';
	var obj2= {};							
	obj[v2] = parseFloat(val);
	storage.set(obj);
	//alert(val);
}