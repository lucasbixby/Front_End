console.log('Content script loaded on:', window.location.href);

const element = document.getElementById("course_syllabus")
const data = element ? element.innerText : null;
crome.runtime.sendMessage({ action: "extract_data", data: data});