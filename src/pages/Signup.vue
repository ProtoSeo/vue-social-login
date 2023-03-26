<template>
  <div className="signup-container">
    <div className="signup-content">
      <h1 className="signup-title">Signup to Social Login Example</h1>
      <SocialSignup/>
      <div className="or-separator">
        <span className="or-text">OR</span>
      </div>
      <SignupForm/>
      <span className="login-link">Already have an account?<RouterLink to="/login"> Login!</RouterLink></span>
    </div>
  </div>
</template>

<script>
import SocialSignup from "@/components/signup/SocialSignup.vue";
import SignupForm from "@/components/signup/SignupForm.vue";

export default {
  name: "Signup",
  components: {
    SocialSignup, SignupForm
  }
}
</script>

<style scoped>
.signup-container {
  text-align: center;
}

.signup-content {
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

.social-btn {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 16px;
}

.social-btn img {
  height: 32px;
  float: left;
  margin-top: 10px;
}

.social-btn.google {
  margin-top: 7px;
}

.social-btn.facebook img {
  height: 24px;
  margin-left: 3px;
}

.social-btn.github img {
  height: 24px;
  margin-left: 3px;
}

.login-link span {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

.signup-title {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.65);
}
</style>