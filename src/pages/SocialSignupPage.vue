<template>
  <div className="signup-container">
    <div className="signup-content">
      <h1 className="signup-title">Social Signup post processing</h1>
      <form>
        <div className="form-item">
          <input type="text" name="nickname"
                 className="form-control" placeholder="nickname"
                 v-model="state.form.nickname" required/>
        </div>
        <div className="form-item">
          <input type="text" name="provider"
                 className="form-control" placeholder="Provider"
                 v-model="state.form.provider" required readonly/>
        </div>
        <div className="form-item">
          <input type="email" name="email"
                 className="form-control" placeholder="Email"
                 v-model="state.form.email" required readonly/>
        </div>
        <div className="form-item">
          <input type="password" name="password"
                 className="form-control" placeholder="Password"
                 v-model="state.form.password" required/>
        </div>
        <div className="form-item">
          <button type="submit" className="btn btn-block btn-primary" @click="submit()">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import router from "@/scripts/router";
import {useRoute} from "vue-router";

export default {
  name: "SocialSignupPage",
  setup() {
    const route = useRoute()
    const state = reactive({
      form: {
        email: route.query.email,
        provider: route.query.provider,
        nickname: "",
        password: ""
      }
    })
    const submit = () => {
      axios.post("/api/v1/signup", state.form).then((res) => {
        sessionStorage.setItem("id", res.data);
        router.push({path: "/"});
        window.alert("회원가입하였습니다.");
      }).catch(() => {
        window.alert("잘못된 정보 입니다.");
      });
    }
    return {state, submit}
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

.signup-title {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.65);
}
</style>