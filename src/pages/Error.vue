<template>
  <div className="error">
    <h1 className="title">
      Error
    </h1>
    <div className="desc">
      {{ errorMessage }}
    </div>
    <RouterLink to="/">
      <button className="go-back-btn btn btn-primary" type="button">Go Back</button>
    </RouterLink>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  name: "Error",
  setup() {
    const route = useRoute()
    const errorMessage = ref(route.query.error)
    return {errorMessage}
  }
}
</script>

<style scoped>
.error {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 40px;
  border: 1px solid #c8c8c8;
  text-align: center;
}

.error .title {
  font-size: 50px;
  letter-spacing: 10px;
  margin-bottom: 10px;
}

.error .desc {
  font-size: 20px;
  margin-bottom: 20px;
}

.go-back-btn {
  min-width: 160px;
}
</style>