namespace RetunUse{
  const getUserInfo = (name:string,age:number)=>{
      return{
          name, 
          age
      }
  }

  type GetUserInfo = ReturnType<typeof getUserInfo>;
  const user:GetUserInfo={
      name:"Terrance",
      age:290
  }
}