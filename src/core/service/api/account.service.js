import HeyUni from "@/heyuni-instance";

const ApiService = HeyUni.Classes.ApiService;

class AccountService extends ApiService {
  constructor(httpClient) {
    super(httpClient);
    this.name = 'accountService';
  }

  loginByEmail(email, password) {
    return this.httpClient.invoke("loginCustomer post /account/login", {
      body: {
        username: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res)
      });
  }

}

export default AccountService;
