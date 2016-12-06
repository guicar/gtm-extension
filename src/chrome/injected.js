window.addEventListener("message", function (event) {
  var data = event.data;
  if (typeof data === 'object' && data !== null &&
    data.type === 'GhitaTM' && data.version === 1
  ) {
    chrome.runtime.sendMessage(data.payload, function () {});
  }
}, false);
