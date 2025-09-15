import { ref, computed, type Ref, type ComputedRef } from "vue";
import {useHeyFrameContext} from "@/app/composables/useHeyFrameContext/useHeyFrameContext";

export function useUser() {
  const { apiClient } = useHeyFrameContext();
  const user: Ref<any | null> = ref(null);
  const country: Ref<any | null> = ref(null);

  const isLoggedIn: ComputedRef<boolean> = computed(
    () => !!user.value?.id && !!user.value?.active && !user.value?.guest
  );

  async function login(params: { username: string; password: string }) {
    let r = await apiClient.invoke("loginCustomer post /account/login", {
      method: "POST",
      body: params,
    });
    console.log(r)
    await refreshUser();
  }


  async function refreshUser() {
    const data =  await apiClient.invoke("readCustomer post /account/customer");
    user.value = data;
    return data;
  }


  return {
    user,
    isLoggedIn,
    login,
    refreshUser,
  };
}
