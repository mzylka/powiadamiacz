
$.ajax(
	{
	type: "GET",
	dataType: "json",
	url: "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCcbCaqiuQSU0bkJBFayPO9w&maxResults=3&order=date&type=video&key=AIzaSyC6asiRZ5hnKu3JBEQwbwwTYIgznabsRVM",
	success: function(film){
	var imag = [];
	var vidId = [];
	var link = "https://www.youtube.com/watch?v=";
	var min = ["#min1","#min2","#min3"];
		for(var i = 0; i < 3; i++){
		imag[i] = film["items"][i]["snippet"]["thumbnails"]["default"]["url"];
		vidId[i] = film["items"][i]["id"]["videoId"];
		$(min[i]).attr("src",imag[i]);
		}
		
		var fullLink1 = link + vidId[0];
		var fullLink2 = link + vidId[1];
		var fullLink3 = link + vidId[2];

		$(min[0]).click(function(){
			chrome.tabs.getSelected(function(tab) {
				chrome.tabs.create({url: fullLink1});
				}
			);
		}
		);
		$(min[1]).click(function(){
			chrome.tabs.getSelected(function(tab) {
				chrome.tabs.create({url: fullLink2});
				}
			);
		}
		);
		$(min[2]).click(function(){
			chrome.tabs.getSelected(function(tab) {
				chrome.tabs.create({url: fullLink3});
				}
			);
		}
		);
		

		}
	}
);
