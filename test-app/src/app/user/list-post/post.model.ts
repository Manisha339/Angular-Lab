export class PostModel{

    constructor(userid: number,id: number,title: string,body:string){
        this.userID=userid;
        this.id=id;
        this.title=title;
        this.body=body;
    }

    userID: number=0;
    id: number=0;
    title: string="";
    body: string="";
}