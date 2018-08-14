import { user } from "./user";

export class auth
{
    

    signin:boolean=false;
    type:{"user":boolean,"admin":boolean,"anonymous":boolean}=
    {"user":false,"admin":false,"anonymous":true}    
    user:user=new user(); //update
    

}