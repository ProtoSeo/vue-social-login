<template>
  <header className="app-header">
    <div className="container">
      <div className="app-branding">
        <RouterLink to="/" className="app-title">Social Login</RouterLink>
      </div>
      <div className="app-options">
        <nav className="app-nav">
          <ul>
            <li>
              <RouterLink to="/login">Login</RouterLink>
            </li>
            <li>
              <RouterLink to="/signup">Signup</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}

</script>

<style scoped>
.app-header {
  height: 60px;
  position: relative;
  z-index: 10;
}

.app-title {
  line-height: 60px;
  vertical-align: middle;
  font-size: 1.35em;
}

.app-branding {
  float: left;
}

.app-options {
  float: right;
}

.app-nav ul {
  list-style-position: none;
  margin: 0;
  padding: 0;
}

.app-nav ul li {
  list-style-type: none;
  display: inline-block;
}

.app-nav ul li a {
  display: inline-block;
  line-height: 60px;
  vertical-align: middle;
  padding-left: 15px;
  padding-right: 15px;
  color: rgba(0,0,0,0.65);
}

.app-nav ul li a:hover {
  color: #0f96f6;
}

.app-nav ul li a.active {
  color: #0f96f6;
}
</style>