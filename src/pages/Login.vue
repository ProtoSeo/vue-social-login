<template>
  <div className="login-container">
    <div className="login-content">
      <h1 className="login-title">Login to Social Login Example</h1>
      <SocialLogin/>
      <div className="or-separator">
        <span className="or-text">OR</span>
      </div>
      <LoginForm/>
      <span className="signup-link">New user? <RouterLink to="/signup"> Sign up!</RouterLink></span>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
import SocialLogin from "@/components/login/SocialLogin.vue";

export default {
  name: "Login",
  components: {
    LoginForm, SocialLogin
  }
}
</script>

<style scoped>
.login-container {
  text-align: center;
}

.login-content {
  background: #fff;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  width: 500px;
  display: inline-block;
  margin-top: 30px;
  vertical-align: middle;
  position: relative;
  padding: 35px;
}

.social-btn img {
  height: 32px;
  float: left;
  margin-top: 10px;
}

.signup-link span {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.login-title {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.65);
}
</style>