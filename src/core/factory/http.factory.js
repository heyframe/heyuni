import {createAPIClient} from "@heyframe/uni-api-client";
import HeyUni from "@/heyuni-instance";


export default function createHTTPClient(context) {
    return createClient(context);
}

function createClient() {
    const client = createAPIClient({
        baseURL: HeyUni.Context.api.baseURL,
        accessToken: HeyUni.Context.api.accessToken,
    });

    client.hook('onResponseError', (err) => {
        console.error('请求失败：', err);
    });

    return client;
}