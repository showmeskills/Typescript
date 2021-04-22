namespace ClassGeneric{
    class Person<T,S>{
        //public static year:S;error
        constructor(public name:T,public age:S){

        }
        // static watch(w:T=>静态类成员不能引用泛型类型参数){

        // }
        static look<T>(a:T):string{
            let b = "";
            if(typeof a === 'string'){
                b = a;
            }
            return b;
        }
        private run(a:S):number{
            let c = 0;
            if(typeof a === 'number'){
                c = a;
            }
            return c;
        }
        protected run1(a:T){

        }
        run2(a:T){

        }
        eat<U>(a:U){

        }
    }
}