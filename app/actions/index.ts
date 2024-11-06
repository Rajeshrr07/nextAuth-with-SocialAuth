'use server'

import { signIn,signOut } from "@/auth";
 
export async function doSocialLogin(formData) {
  const action = formData.get('action')
  await signIn(action,{redirectTo:'/home'})
  console.log('action: ', action);
  
}
export async function doLogOut() {
  await signOut({redirectTo:"/"})
  
}

// export async function doCredentialLogin(formData){
//   try {
//     const response = await signIn("credentials",{
//       email : formData.get('email'),
//       password : formData.get('password'),
//       redirect : false,
//     });
//     return response;
//   } catch (error) {
//     throw new Error(error)
//   }
// }


export async function doCredentialLogin(formData:string){
  try {
    const response = await signIn("credentials", {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,  // You might set this to true for automatic redirects
    });

    if (!response || response.error) {
      console.error("Login failed:", response?.error);
      throw new Error(response?.error || "Unknown login error");
    }
    
    return response;
  } catch (error) {
    console.error("An unexpected error occurred:", error.message);
    throw error;  // Return or throw a more specific error if needed
  }
}
