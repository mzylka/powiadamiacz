function powiadomienie() {
	$.ajax(
	{
		type: "GET",
		dataType: "json",
		headers: {'Client-ID': 'y61drcv69tzw0ol228dapnawsbjdql'},
		url: "https://api.twitch.tv/helix/streams?user_login=michasterlive",
		success: function(channel)
		{	
        if(channel["data"].length !== 0){
			var options = {
        		type: "basic",
        		title: "Michaster streamuje!",
				message: "Zapraszam na twitch.tv/michasterlive",
				iconUrl: "img/icon_64.png"
			};
			chrome.notifications.create(options);
		}
		}
	}
	)

}