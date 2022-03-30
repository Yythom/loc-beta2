class LoginService {
    static async login() {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, 2000);
        })
    }
}
export default LoginService