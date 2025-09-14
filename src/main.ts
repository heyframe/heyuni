import HeyUni from "@/heyuni-instance";
import '@/app/main';
void (async () => {
    await HeyUni.Application.start({
        apiContext:{
           baseURL: "http://localhost:8083/front-api",
           accessToken: "SWSCT1C2AEVGVULWOU00D2FSAG",
       }
    });
})();