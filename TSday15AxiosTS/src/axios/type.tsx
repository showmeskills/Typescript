
/*
    Record<string,any> 意思是创建一个对象,该对象的键名是string,键值就是any
    interface PlainObject{
        [name:string]:any;
    }
*/
import AxiosInterceptorManager from './AxiosInterceptorManager';
export type Methods = "get" | "GET" | "POST" | "post" | "put" | "PUT" | "delete" | "DELETE" | "options" | "OPTIONS"

export interface AxiosRequestConfig{
    url?: string;
    method?: Methods;
    params?:any;
    headers?:Record<string,any>;
    data?:Record<string,any>;
    timeout?: number;
}
//Axios.prototype.request 这个方法
export interface AxiosInstance{
    //Promise 的泛型T代表此promise变成成功状态以后调用resolve的值 resolve(value:T)
    <T = any>(config:AxiosRequestConfig):Promise<AxiosResponse<T>>;
    //拦截器类型定义
    interceptors:{
        request:AxiosInterceptorManager<AxiosRequestConfig>,
        response:AxiosInterceptorManager<AxiosResponse>
    }

}


//泛型T代表响应体的类型
export interface AxiosResponse<T = any> {
    data?:T; 
    status?: number;
    statusText?:string;
    headers?:Record<string,any>;
    config?:AxiosRequestConfig;
    request?:XMLHttpRequest;
}

