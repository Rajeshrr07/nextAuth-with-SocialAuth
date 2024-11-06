import { auth } from "@/auth"
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

const home = async() => {
  const session = await auth();
  if(!session?.user) redirect('/')
  return (
    <div className="flex flex-col justify-center items-center m-4">
    <h2>Welcome</h2>
    { session?.user?.name ? <>
      <h1 className="text-3xl my-3"> {session?.user?.name}</h1>
      <Image src = {session?.user?.image} alt= {session?.user?.name} width={72} height={72} className="rounded-full"/>
    </> : <h2>{session?.user?.email}</h2>}
    

    <Logout />
    
  </div>
  )
}

export default home