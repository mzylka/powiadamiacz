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
			info.style.color = "red";
			info.innerHTML = "Aktualnie nie jest prowadzony stream!";
		}
		else {
			var graId = tab["data"][0]["game_id"];
			var idGry = "https://api.twitch.tv/helix/games?id=" + graId;
			$.ajax(
				{
				type: "GET",
				dataType: "json",
				headers: {'Client-ID': 'y61drcv69tzw0ol228dapnawsbjdql'},
				url: idGry,
				success: function (result){
					var gra = result["data"][0]['name'];
					info.style.color = "green";
					info.innerHTML = "MICHASTER STREAMUJE:<br>" + gra;
				}
				}
			);
		}
	}
}
);