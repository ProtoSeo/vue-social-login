<template>
  <div className="profile-container">
    <div className="container">
      <div className="profile-info">
        <div className="profile-name">
          <h2>{{ provider}}</h2>
          <p className="profile-email">{{ email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  name: "Profile",
  setup() {
    const route = useRoute()
    const email = ref(route.query.email)
    const provider = ref(route.query.provider)

    return {email, provider}
  }
}
</script>

<style scoped>
.profile-container {
  padding-top: 30px;
}

.profile-info {
  text-align: center;
}

.profile-info .profile-avatar img {
  border-radius: 50%;
  max-width: 250px;
}

.profile-info .profile-name {
  font-weight: 500;
  font-size: 18px;
}

.profile-info .profile-email {
  font-weight: 400;
}

.text-avatar {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  vertical-align: middle;
  text-align: center;
  border-radius: 50%;
  background: #46b5e5;
  background: linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
  background-image: -ms-linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
  background-image: -moz-linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
  background-image: -o-linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
  background-image: -webkit-linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
  background-image: linear-gradient(45deg, #46b5e5 1%, #1e88e5 64%, #40baf5 97%);
}

.text-avatar span {
  line-height: 200px;
  color: #fff;
  font-size: 3em;
}
</style>