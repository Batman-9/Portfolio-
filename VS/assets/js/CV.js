
document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1Boubqy-9zZgfmViBl29TqBajr2qfU4Bn";
    link.download = "Vineet Soni Resume.docx"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

