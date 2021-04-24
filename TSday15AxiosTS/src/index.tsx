//import axios,{AxiosResponse,AxiosError,AxiosRequestConfig} from 'axios';
import axios,{AxiosResponse,AxiosRequestConfig} from './axios';

const baseURL = "http://localhost:8000";
//它指是服务器返回的对象
interface User{
    name:string;
    password:string;
}

let user:User={
    name:"Terrance",
    password:"123456",
}

/*
interceptor={
    onFulfilled:(val:any)=>any;
    onRejected:(error:any)=>error;
}
axios.interceptors = {
    request:[interceptor1,interceptor2,interceptor3],
    response:[interceptor1,interceptor2,interceptor3]
}
*/
//请求拦截器先加后执行 3 2 1
/*
    拦截器可以同步也可以异步
    同步直接返回 config
    异步返回 一个 Promise
*/
axios.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig=>{
    config.headers && (config.headers.name += "1")
    console.timeEnd('cost');
    return config;
    
},(error:any)=>error);
let request = axios.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig=>{
    config.headers && (config.headers.name += "2")
    return config;
})

axios.interceptors.request.use((config:AxiosRequestConfig):AxiosRequestConfig | Promise<AxiosRequestConfig>=>{
    // return new Promise(function(resolve){
    //     setTimeout(function(){
    //         config.headers.name += "3"
    //         resolve(config);
    //     },3000)
    // })
    return Promise.reject("request error");
})

//axios.interceptors.request.eject(request);
//先加先执行 1 2 3 
let response = axios.interceptors.response.use((response:AxiosResponse):AxiosResponse=>{
    response.headers&&(response.headers.name+="1")
    return response
})
axios.interceptors.response.use((response:AxiosResponse):AxiosResponse=>{
    response.headers&&(response.headers.name+="2")
    return response
})
axios.interceptors.response.use((response:AxiosResponse):AxiosResponse=>{
    response.headers&&(response.headers.name+="3")
    return response
})

//axios.interceptors.request.eject(response);


setTimeout(()=>{
    axios({
        method: "post",//方法名
        // url: baseURL + "/get",//访问路径
        // params:user//查询参数对象,它会转成查询字符串放在？的后面
        url:baseURL + '/post_timeout?timeout=2000',
        headers:{
            "content-type":"application/json",
        },
        timeout:1000,
        data:user,
    }).then((response:AxiosResponse<User>)=>{
        console.log(response);
        return response;//(property) AxiosResponse<User>.data?: User | undefined
    })
    .catch((err:any)=>{
        console.log(err);
    })
},2000)



