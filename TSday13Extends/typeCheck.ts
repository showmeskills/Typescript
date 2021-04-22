//类型检查机制
namespace abc{
    //类型推断
    let a;
    let b = 3;
    let c = "2";
    let arr =['123',122,55,true];
    //最佳通用类型推断
    let arr1 = ["12",32];
    //上下文类型推断
    document.onkeydown = function(event:KeyboardEvent){
        event = event || window.event;
        event.keyCode;
        event.preventDefault();
    }
    document.onclick = function(event:MouseEvent){
        event = event || window.event;
        document.onmousemove = function(event:MouseEvent){
            event = event || window.event;
            event.clientY;
            event.clientX;
            event.preventDefault();
        }
    }
}
namespace Allege{
    //类型断言
    interface Obj{
        name:string;
    }
    //let obj:Obj=<Obj>{};
    let obj:Obj={} as Obj;
    obj.name = "Allege";

}