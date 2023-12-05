class Music{
    constructor(tittle,singer,img,file){
        this.tittle=tittle;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }

    getName(){
        return this.tittle +" - " + this.singer;
    }
    
}


const musicList=[
    new Music("Gururum Kadarsın","Perdenin Ardındakiler","img1.jpeg","1.mp3"),
    new Music("Isn't Lovely","Billie Elish","img2.jpg","2.mp3"),
    new Music("Dargın","Zeynep Bastık feat. Emir Can İğrek","img3.jpg","3.mp3")
];