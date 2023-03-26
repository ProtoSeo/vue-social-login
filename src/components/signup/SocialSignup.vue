<template>
  <div className="social-signup">
    <a className="btn btn-block social-btn naver" :href="NAVER_AUTH_URL+OAUTH2_REDIRECT_SIGNUP_URI">
      <img src="../../assets/NaverLogo.png" alt="Naver"/></a>

    <a className="btn btn-block social-btn kakao" :href="KAKAO_AUTH_URL+OAUTH2_REDIRECT_SIGNUP_URI">
      <img src="../../assets/KakaoLogo.png" alt="Kakao"/></a>

    <a className="btn btn-block social-btn google" :href="GOOGLE_AUTH_URL+OAUTH2_REDIRECT_SIGNUP_URI">
      <img src="../../assets/GoogleLogo.png" alt="Google"/></a>

    <a className="btn btn-block social-btn twitch" :href="TWITCH_AUTH_URL+OAUTH2_REDIRECT_SIGNUP_URI">
      <img src="../../assets/TwitchLogo.png" alt="Twtich"/></a>
  </div>
</template>

<script>
import constants from "@/constants";

export default {
  name: "SocialSignup",
  data() {
    return {
      GOOGLE_AUTH_URL: constants.GOOGLE_AUTH_URL,
      KAKAO_AUTH_URL: constants.KAKAO_AUTH_URL,
      NAVER_AUTH_URL: constants.NAVER_AUTH_URL,
      TWITCH_AUTH_URL: constants.TWITCH_AUTH_URL,
      OAUTH2_REDIRECT_SIGNUP_URI: constants.OAUTH2_REDIRECT_SIGNUP_URI,
    }
  }
}
</script>

<style scoped>
.social-btn img {
  height: 32px;
  margin-top: 5px;
}
</style>