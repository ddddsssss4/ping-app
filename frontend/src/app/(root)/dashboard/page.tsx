import { auth } from "@/auth"
import { SignOut } from "@/components/ui/sign-out"
import  DashBoard  from "@/components/ui/Ping"
const page = async () => {
  const session =await auth();
  if(!session?.user?.name) return null;
  return (
<>
    <div>
      <SignOut/>
      {JSON.stringify(session.user)}
      <DashBoard name={session?.user?.name}/>
    </div>


</>
  )
}

export default page
