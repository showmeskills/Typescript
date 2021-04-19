namespace IntersectionType{
    interface Bird{
        name1:string;
        condition1:string;
        flighting():void;
    }
    interface Fish{
        name2:string;
        condition2:string;
        swimming():void
    }
    type BirdFish = Bird & Fish;
    const birdFish:BirdFish = {
        name1: "Bird",
        condition1: "sky",
        flighting(){
            console.log("flighting");
        },
        name2: "Bird",
        condition2: "water",
        swimming(){
            console.log("swimming");
        }
    }

}

//if there attri names are the same
namespace IntersectionType2{
    interface Bird{
        name:string;
        condition:string;
        flighting():void;
    }
    interface Fish{
        name:string;
        condition:string;
        swimming():void
    }

    type BirdFish = Bird | Fish;
    const isBird = (birdFish : BirdFish):birdFish is Bird=>{
        return true;
    }
    const getAnimal = (birdFish : BirdFish)=>{
        if(isBird(birdFish)){
            return {
                name:"bird",
                condition:"water",
                flighting(){
                    console.log("flighting")
                }
            }
        }else if (!isBird(birdFish)){
            return{
                name:"fish",
                condition:"water",
                swimming(){
                    console.log("swimming")
                }
            }
        }
    }
    let x:Bird
    let y:Fish
    const res = getAnimal(x)
    res.flighting();
 
}