chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	 //alert(response);
	 
	
 });
 
 chrome.commands.onCommand.addListener(function (command) {
    if (command === "open_it") {
        alert("Hello From Word Power");
    } 
});