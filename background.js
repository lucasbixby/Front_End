chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data) {
        const blob = new Blob([message.data], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const fs = required('fs');

        // Create a download link
        const a = document.createElement("a");
        a.href = url;
        fs.writeFileSync(syllabus_text.txt, a, { encoding: 'utf-8'});
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
    }
});
