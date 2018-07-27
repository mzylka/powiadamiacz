$("#lin1").click(function(){
  chrome.tabs.getSelected(function(tab) {
    chrome.tabs.create({url: 'https://discord.gg/7uWcguH'});
  }
  );
}
);
$("#lin2").click(function(){
  chrome.tabs.getSelected(function(tab) {
    chrome.tabs.create({url: 'http://on.fb.me/1wZWz98'});
  }
  );
}
);

$("#lin3").click(function(){
  chrome.tabs.getSelected(function(tab) {
    chrome.tabs.create({url: 'http://bit.ly/2ABgYuV'});
  }
  );
}
);