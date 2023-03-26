<template>
  <div className="home-container">
    <div className="container">
      <h1 className="home-title">Hello World</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.home-container {
  text-align: center;
  min-height: calc(100vh - 60px);
  overflow: auto;
  position: relative;
  padding-top: 60px;
}

.home-title {
  font-size: 25px;
  font-weight: 400;
  color: rgba(0,0,0,0.70);
  margin-top: 50px;
}
</style>