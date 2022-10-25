function toggleMode() {
	const url = 'https://' + location.host + location.pathname
	const search = location.search
	if (search) {
		location.href = url;
	}else{
		location.href = url + '?debug_mode=true';
	}
}
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: toggleMode
	});
});