namespace InterfaceExtendsClass{
    class GTR{
        country:string;
        public name:string;
        private year:number;
        protected color:string;
        static wheel:number;
    }

    interface Car extends GTR{}
    //type Car = Partial<GTR>
    // let car:Car={
    //     country:"Au",
    //     name:"GTR",
    // };

    class Track extends GTR implements Car{
        
        constructor( ){
            super();
        }
        visit():string{
            return this.color = "red";
        }
    }
    const track = new Track();
    track.name = "track";
    Track.wheel = 4;
    const color = track.visit();
    console.log(color);
}