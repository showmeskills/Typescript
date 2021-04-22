namespace GenericContraint{
    interface Contraint{
        length: number;
        push():void;
        unshift():void;
        filter<T>(item:T):T;
    }
    //当泛型T被接口 Contraint 约束后，
    //参数参数 a 使用调用.length,.push,.unshift,.filter 方法
    const fn = <T extends Contraint>(a:T):T=>{
        return a;
    }
    //在进行 泛型类型定义的时候会受到 接口的约束
    fn<string[]>(["222"])
    fn<Array<string>>(["2222"])
}