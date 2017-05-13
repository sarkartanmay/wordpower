	document.getElementById('clickme').addEventListener('click', hello);
	function hello() {
		var user_val = 2050 ;
		var simple_base =0; 
		var mid_base =0; 
		var hard_base =0; 
		var us_wght = new Array();
		if(document.getElementById("basic_1").checked){
			user_val = (parseInt(basic_1.value)>user_val ? parseInt(basic_1.value) : user_val );			
			simple_base++;
		}if(document.getElementById("basic_2").checked){
			user_val = (parseInt(basic_2.value)>user_val ? parseInt(basic_2.value) : user_val );
			simple_base++;
		}if(document.getElementById("basic_3").checked){
			user_val = (parseInt(basic_3.value)>user_val ? parseInt(basic_3.value) : user_val );
			simple_base++;
		}if(document.getElementById("basic_4").checked){
			user_val = (parseInt(basic_4.value)>user_val ? parseInt(basic_4.value) : user_val );
			simple_base++;
		}if(document.getElementById("basic_5").checked){
			user_val = (parseInt(basic_5.value)>user_val ? parseInt(basic_5.value) : user_val );
			simple_base++;
		}
		
		if(simple_base<3){
			//alert(simple_base);
			//alert(user_val);
			setBase(user_val);
		}else{
			if(document.getElementById("basic_6").checked){
				user_val = (parseInt(basic_6.value)>user_val ? parseInt(basic_6.value) : user_val );			
				mid_base++;
			}if(document.getElementById("basic_7").checked){
				user_val = (parseInt(basic_7.value)>user_val ? parseInt(basic_7.value) : user_val );
				mid_base++;
			}if(document.getElementById("basic_8").checked){
				user_val = (parseInt(basic_8.value)>user_val ? parseInt(basic_8.value) : user_val );
				mid_base++;
			}if(document.getElementById("basic_9").checked){
				user_val = (parseInt(basic_9.value)>user_val ? parseInt(basic_9.value) : user_val );
				mid_base++;
			}if(document.getElementById("basic_10").checked){
				user_val = (parseInt(basic_10.value)>user_val ? parseInt(basic_10.value) : user_val );
				mid_base++;
			}
			
			if(mid_base<3){
				//alert(mid_base);
				//alert(user_val);
				setBase(user_val);
			}else{
				if(document.getElementById("basic_11").checked){
					user_val = (parseInt(basic_11.value)>user_val ? parseInt(basic_11.value) : user_val );			
					hard_base++;
				}if(document.getElementById("basic_12").checked){
					user_val = (parseInt(basic_12.value)>user_val ? parseInt(basic_12.value) : user_val );
					hard_base++;
				}if(document.getElementById("basic_13").checked){
					user_val = (parseInt(basic_13.value)>user_val ? parseInt(basic_13.value) : user_val );
					hard_base++;
				}if(document.getElementById("basic_14").checked){
					user_val = (parseInt(basic_14.value)>user_val ? parseInt(basic_14.value) : user_val );
					hard_base++;
				}if(document.getElementById("basic_15").checked){
					user_val = (parseInt(basic_15.value)>user_val ? parseInt(basic_15.value) : user_val );
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
	//alert(val);
}