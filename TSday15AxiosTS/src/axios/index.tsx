import {Axios} from  './Axios';
import {AxiosInstance} from './type';
//可以创建一个axios的实例 axios其实就是一个函数
//定义一个类的时候,一个类的原型,Axios.protype; 一个类的实例
const createInstance =():AxiosInstance =>{
    //一个类的实例赋值给一个变量,那么该变量的类型就是这个类
    const context:Axios = new Axios();//this指针上下文
    //让request 方法里的this永远指向context也就是new Axios();
    let instance = Axios.prototype.request.bind(context);
    //把axios的类的实例和类的原型上的方法都拷贝到了instance上，也就是request方法上
    instance = Object.assign(instance,Axios.prototype,context);
    return instance as AxiosInstance;
}

let axios = createInstance();
export default axios;

export * from './type';