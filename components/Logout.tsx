import { doLogOut } from "@/app/actions"
import { Button } from "./ui/button"
const Logout = () => {
  return (
    <form action={doLogOut}>
       <Button type="submit" variant={"secondary"} className="my-5">Logout</Button>
    </form>
  )
}

export default Logout