function detectShips() {
    const input = document.getElementById("imageUpload");
    const resultSection = document.getElementById("resultSection");
    const previewImage = document.getElementById("previewImage");

    if (!input.files.length) {
        alert("Please upload an image first.");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        previewImage.src = e.target.result;
        resultSection.style.display = "block";
    };

    reader.readAsDataURL(file);
}
