export class Update{
    public event: string;
    public img: string;
    public desc: string;

    constructor(event:string,img: string ,desc: string ){
        this.event=event;
        this.img=img;
        this.desc=desc;
        
    }
}