namespace AdvancedTS{
    interface User {
        id:number;
        userName:string;
        role:string;
        avators:string
        token:string;
    }

    const user:User = {
        id:0,
        userName:"Terrance",
        role:"Web developer",
        avators:"http://img.com",
        token:"fsxxxx",
    }

    //keyof
    const pick = <T,K extends keyof T> (obj:T,attri:K[]):T[K][]=>{
        return attri.map(key=>obj[key]);
    } 

    pick(user,["id",])
}