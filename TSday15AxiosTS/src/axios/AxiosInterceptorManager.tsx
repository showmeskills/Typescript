/*
 InterceptorManager<V> V:axiosrequestconfig, axiosresponse
*/

// export interface AxiosInterceptorManager<V>{
//     use(onFulfilled?:(value:V)=>V|Promise<V>,onRejected?:(error:any)=>any):number;
//     eject(id:number):void;
// }

interface OnFulfilled<V>{
    (value:V):V|Promise<V>
}
interface OnRejected{
    (error:any):any;
}

export interface Interceptor<V>{
    onFulfilled?:OnFulfilled<V>;
    onRejected?:OnRejected;
}

export default class InterceptorManager<V>{
    public interceptors:Array<Interceptor<V> | null>=[];
    //每当调用use的时候
    use(onFulfilled?:OnFulfilled<V>,onRejected?:OnRejected):number{
        this.interceptors.push({
            onFulfilled,
            onRejected
        })
        return this.interceptors.length-1;
    }
    eject(id:number){
        if(this.interceptors[id]){
            this.interceptors[id] = null
        }
    }
}

