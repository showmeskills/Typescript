namespace InterfaceExtendsInterface{
    interface GTR{
        name:string;
        price:number;
        height:number;
        weight:number;
        type:string;
        fun():void;
    }
    interface BMW{
        name:string;
        color:string;
        price:number;
        runt():void;
    }

    interface Cars extends GTR,BMW{
        wheel:number;
    }

    class Car implements Cars{
        public name:string;
        public price:number;
        public height:number;
        public weight:number;
        public color:string;
        public wheel:number;
        public type:string;
        public runt(){}
        public fun(){}
    }
}