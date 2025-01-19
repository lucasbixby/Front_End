chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        const blob = new Blob([message.data], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        // Create a download link
        const a = document.createElement("a");
        a.href = url;
        a.download = "extracted_data.txt";
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
    }
});
