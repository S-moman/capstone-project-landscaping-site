import { useContext, useDebugValue } from "react";
import { UserContext } from "../context/UserProvider";


 const useAuth = () => {
    const { currentUser } = useContext(UserContext)
    useDebugValue(currentUser, currentUser => currentUser?.employee || currentUser?.customer ? "Logged In" : "Logged Out")
    // console.log(useDebugValue)


  return (
    useContext(UserContext)
  )

};

export default useAuth