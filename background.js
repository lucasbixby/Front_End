// Save data to Chrome's storage
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        chrome.storage.local.set({ savedData: message.data }, () => {
            console.log("Data saved to Chrome storage!");
            sendResponse({ status: "success" });
        });
    }
    return true; // Required to use sendResponse asynchronously
});
