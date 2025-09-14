import HeyUni from "@/heyuni-instance";

const ApiService = HeyUni.Classes.ApiService;

class AccountService extends ApiService {
    constructor(httpClient) {
        super(httpClient);
        this.name = 'accountService';
    }



}
export default AccountService;
