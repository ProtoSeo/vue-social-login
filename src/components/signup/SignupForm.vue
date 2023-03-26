<template>
  <form>
    <div className="form-item">
      <input type="text" name="nickname"
             className="form-control" placeholder="nickname"
             v-model="state.form.nickname" required/>
    </div>
    <div className="form-item">
      <input type="email" name="email"
             className="form-control" placeholder="Email"
             v-model="state.form.email" required/>
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
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import router from "@/scripts/router";

export default {
  name: "SignupForm",
  setup() {
    const state = reactive({
      form: {
        email: "",
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
</style>