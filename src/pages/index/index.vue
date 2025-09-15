<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"/>
    <view class="text-area">
      <text class="title">{{ userInfo?.nickname }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import {ref,onMounted} from 'vue'
import HeyUni from "@/heyuni-instance";
import AccountService from "@/core/service/api/account.service";
import {useUser} from "@/app/composables/useUser/useUser";

const title = ref('Hello')


// let loginService = HeyUni.Service('accountService') as AccountService;
// loginService.loginByEmail('test@test.com','heyframe');


const userComposable = useUser();
const userInfo = ref(null);
onMounted(async () => {
  await userComposable.login({ username: 'test@test.com', password: 'heyframe' });
  userInfo.value = userComposable.user.value
});

</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
