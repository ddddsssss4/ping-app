import { auth } from "@/auth"
import { SignOut } from "@/components/ui/sign-out";

const page = async () => {
    const session =await auth();
  return (
    <div>
     <div>{JSON.stringify(session)}</div> 
     <div><SignOut/></div>
    </div>
  )
}

export default page