import { Button } from "./ui/button";
import { doSocialLogin} from "@/app/actions";

const SocialLogin = () => {
  return (
    <form action={doSocialLogin} className="space-y-4">
        <div className="flex flex-col items-center space-y-3">
          <Button type="submit" name="action" value="google" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign In with Google
          </Button>
          <Button type="submit" name="action" value="github" className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900">
            Sign In with GitHub
          </Button>
        </div>
      </form>
  )
}

export default SocialLogin