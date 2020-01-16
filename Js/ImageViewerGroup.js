var ImageViewerGroup = /** @class */ (function () {
    //Constructor
    function ImageViewerGroup() {
        this.imageSrc = [];
        this.viewTime = 0;
        this.currentImage = 0;
    }
    ImageViewerGroup.prototype.addImage = function (src) {
        this.imageSrc.push(src);
    };
    ImageViewerGroup.prototype.setViewTime = function (time) {
        this.viewTime = time;
    };
    ImageViewerGroup.prototype.setStartDate = function (date) {
        this.startDate = date;
    };
    ImageViewerGroup.prototype.setEndDate = function (date) {
        this.endDate = date;
    };
    ImageViewerGroup.prototype.increaseImageCounter = function () {
        return ++this.currentImage;
    };
    ImageViewerGroup.prototype.objectToJson = function () {
        return JSON.stringify(this);
    };
    return ImageViewerGroup;
}());
//# sourceMappingURL=ImageViewerGroup.js.map