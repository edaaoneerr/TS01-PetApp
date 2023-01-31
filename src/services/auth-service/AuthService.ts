import { User } from "@services/models";

class AuthService {
    recoverPassword(email: string): Promise<void> {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if (email == "error@email.com"){
                    reject({message: "Email not found"})
                }
                else{
                    resolve();
                }
            }, 3000)
        })
    }
    login(email: string, password: string): Promise<User> {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                if (email == "error@email.com"){
                    reject({message: "User not found"});
                }
                else{
                    const user: User = {
                        email: email,
                        id: "UserId"

                    }
                    resolve(user);
                }
    }, 3000)
   })
}
}
export default new AuthService;