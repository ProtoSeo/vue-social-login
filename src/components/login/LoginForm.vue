<template>
  <form>
    <div className="form-item">
      <input type="email" name="email"
             className="form-control" placeholder="Email" v-model="state.form.email" required/>
    </div>
    <div className="form-item">
      <input type="password" name="password"
             className="form-control" placeholder="Password" @keyup.enter="submit()" v-model="state.form.password"
             required/>
    </div>
    <div className="form-item">
      <button type="submit" className="btn btn-block btn-primary" @click="submit()">Login</button>
    </div>
  </form>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";
import router from "@/scripts/router";

export default {
  name: "LoginForm",
  setup() {
    const state = reactive({
      form: {
        email: "",
        password: ""
      }
    })
    const submit = () => {
      axios.post("/api/v1/login", state.form).then((res) => {
        sessionStorage.setItem("id", res.data);
        router.push({path: "/"});
        window.alert("로그인하였습니다.");
      }).catch(() => {
        window.alert("로그인 정보가 존재하지 않습니다..");
      });
    }
    return {state, submit}
  }
}
</script>

<style scoped>
</style>