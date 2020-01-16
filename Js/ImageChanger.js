var images = ["Images/test.jpg", "Images/test2.jpg"];
var currentIndex = 0;
window.setInterval(function () {
    currentIndex++;
    currentIndex = currentIndex < images.length ? currentIndex : 0;
    console.log(currentIndex);
    changeImage(currentIndex);
}, 5000);
function changeImage(index) {
    var img = document.getElementById("Displayed_Image");
    img.src = images[index];
}
//# sourceMappingURL=ImageChanger.js.map