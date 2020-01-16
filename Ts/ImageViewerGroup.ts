class ImageViewerGroup{
    //Variables
    private viewTime: number;
    private imageSrc: String[]=[];
    private currentImage: number;
    private startDate: String;
    private endDate: String;

    //Constructor
    constructor() {
        this.viewTime =0;  
        this.currentImage = 0;
    }

    public addImage(src:String){
        this.imageSrc.push(src);
    }

    public setViewTime(time:number){
        this.viewTime = time;
    }

    public setStartDate(date:String){
        this.startDate = date;
    }

    public setEndDate(date:String){
        this.endDate = date;
    }

    public increaseImageCounter(): number{
        return ++this.currentImage;
    }

    public objectToJson():String{
        return JSON.stringify(this);
    }
}