namespace ConditionType{
   interface Fish{
       name1: string
   }
   interface Water{
       name2: string;
       age: number
   }
   interface Bird{
       name3: string;
   }
   interface Sky{
       name4: string
   }

   type Condtion<T> = T extends Fish? Water:Sky;
   const fishCondition:Condtion<Fish>={
       name2:"water",
       age:10,
   }
   const birdCondition:Condtion<Bird>={
       name4:"sky",
   }
   type Condition2<T>= T extends Fish? Water :Sky;
   const fishCondition2:Condition2<Fish | Bird>={
       name2:"water",
       age:10,
   }
   const birdCondition2:Condition2<Fish | Bird>={
      name4:"sky",
   }
   const fishBird:Condition2<Fish | Bird>={
       name2:"water",
       age:10,
       name4:"sky",
   }

}
