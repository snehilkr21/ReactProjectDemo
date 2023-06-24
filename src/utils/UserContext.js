import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"random",
        email:"sn@gmail.com"
    }
})
userContext.displayName ="UserContext"
export default userContext