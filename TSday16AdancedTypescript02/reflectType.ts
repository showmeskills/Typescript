namespace Adanced{
    interface Obj{
        a:number;
        b:number;
        c:number;
    }

    type myObjPartial = Partial<Obj>

    type myObjReadonly = Readonly<Obj>
    type myObjPick = Pick<Obj,"a"|"b">
}