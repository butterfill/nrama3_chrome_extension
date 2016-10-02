chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "nrama.contentscript.chrome-extension.bundle.js"});
});