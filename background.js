function checkStream() {
	$.ajax(
	{
	type: "GET",
	dataType: "json",
	headers: {'Client-ID': 'y61drcv69tzw0ol228dapnawsbjdql'},
	url: "https://api.twitch.tv/helix/streams?user_login=michasterlive",
	success: function(channel)
		{
			var tab = channel;
			if(tab["data"].length == 0){
				chrome.browserAction.setIcon({path:"img/m_red.png"});
			}
			else {
				chrome.browserAction.setIcon({path:"img/m_green.png"});
			}
		}
	}
	);
	setTimeout(checkStream,20000);
}
checkStream();
