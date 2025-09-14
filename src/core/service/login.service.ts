import type {ContextStore} from "@/app/store/context.store";

export interface LoginService {
    loginByEmail: (email: string, pass: string) => Promise<void>;
    // getToken: () => string;
    // isLoggedIn: () => boolean;
}

export default function createLoginService(
    httpClient: InitContainer['httpClient'],
    context: ContextStore['api'],
): LoginService {

    return {
        loginByEmail,
    }

    function loginByEmail(email: string, pass: string): Promise<void> {
        return httpClient.invoke("loginCustomer post /account/login", {
            body: {
                username: email,
                password: pass,
            },
        })
        .then((res: string) => {
            console.log(res)
        });
    }
}

