import {AxiosRequestConfig,AxiosResponse} from './type';
import qs from "qs";
import parseHeaders from 'parse-headers';
import AxiosInterceptorManager,{ Interceptor } from './AxiosInterceptorManager';
export class Axios<T>{
    public interceptors = {
        request: new AxiosInterceptorManager<AxiosRequestConfig>(),
        response:new AxiosInterceptorManager<AxiosResponse<T>>(),
    };

    //T用来限制响应对象response里的data
    request(config:AxiosRequestConfig):Promise<AxiosRequestConfig | AxiosResponse<T>>{
        //return this.dispatchRequest(config)
        const chain:Array<Interceptor<AxiosRequestConfig>| Interceptor<AxiosResponse<T>>>= [
            {
                onFulfilled:this.dispatchRequest,
            }
        ]
        this.interceptors.request.interceptors.forEach((interceptors:Interceptor<AxiosRequestConfig> | null)=>{
            interceptors&&chain.unshift(interceptors);
        })
        this.interceptors.response.interceptors.forEach((interceptors:Interceptor<AxiosResponse<T>> | null)=>{
            interceptors&&chain.push(interceptors);
        })

        let promise:Promise<AxiosRequestConfig | AxiosResponse<T> > = Promise.resolve(config)
        while(chain.length){
            const {onFulfilled,onRejected} = chain.shift()!;
            promise = promise.then(onFulfilled as any,onRejected)
        }
        return promise;
    }
    //定义一个派发请求的方法
    dispatchRequest<T>(config:AxiosRequestConfig):Promise<AxiosRequestConfig | AxiosResponse<T>>{
        return new Promise<AxiosResponse<T>>((resolve, reject) =>{
            let {method,url,params,headers,data,timeout} = config;
            const request = new XMLHttpRequest();
            if(params){
                //{name:"Terrance",password:"123456",}
                //qs 的作用九四 name=Terrance&passowrd=123456
                params = qs.stringify(params);
                url += ((url!.indexOf("?")=== -1?"&":"?")+params);
            }
            request.open(method!, url!,true);
            request.responseType = "json";
            request.onreadystatechange = ()=>{//指定状态变更函数
                // 0,1,2,3,4
                if(request.readyState === 4 && request.status !== 0){
                    if(request.status>=200 && request.status<3000){
                        let reponse:AxiosResponse<T> = {
                            data:request.response? request.response:request.responseText,
                            status:request.status,
                            statusText:request.statusText,
                            headers:parseHeaders(request.getAllResponseHeaders()),
                            config,
                            request,
                        }
                        resolve(reponse);
                    }else{
                        reject("Error:Request failed with status code "+request.status);
                    }
                }
            }
            if(headers){
                for(let key in headers){
                    request.setRequestHeader(key,headers[key]);
                }
            }
            let body:string | null = null;
            if(data){
                body = JSON.stringify(data)
            }
            request.onerror = ()=>{
                reject("net::ERR_INTERNET_DISCONNECTED")
            }
            if(timeout){
                request.timeout = timeout;
                request.ontimeout = ()=>{
                    reject("Error:timeout of"+timeout+"ms exceeded")
                }
            }
            request.send(body);
        })
    }
}