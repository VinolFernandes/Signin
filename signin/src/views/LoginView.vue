<template>
  <main class="x">
    <section class="forms">
      <div class="container">
        <div class="logincont">
          <form class="login" @submit.prevent="login">
            <h2>Login</h2>
            <p id="log">Login with your email and password.</p>
            <p class="labels">Email:</p>
            <input
              type="email"
              placeholder="Enter your email"
              v-model="login_form.email"
            />
            <p class="labels">Password:</p>
            <input
              type="password"
              placeholder="Enter your password"
              v-model="login_form.password"
            />
            <input type="submit" value="Login" />
            <p>
              Dont have an account?<router-link
                to="/register"
                style="color: #22162b; font-weight: bold; text-decoration: none"
                >Sign up instantly</router-link
              >
            </p>
          </form>
        </div>
      </div>
      <div class="helloworld"></div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
// import Vue from 'vue'
// import axios from 'axios'

// Vue.use(axios);
export default {
  setup() {
    const login_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch('login', login_form.value);
    };
    return {
      login_form,
      login,
    };
  },
  // mounted(){
  //   Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees').
  //   then((res)=>{
  //     console.log(res);
  //   })
  // }
};
</script>

<style>
.forms {
  display: flex;
  margin: auto;
  justify-content: center;
  overflow: auto;
  box-shadow:inherit 10px;
}
.labels {
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
}

form {
  flex: 1 1 0%;
  padding: 3rem 3rem 1rem;
}
.logincont {
  min-width: 200px;
  max-height: 630px;
  width: fit-content;
  height: fit-content;
}

h2 {
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
  margin-bottom: 1rem;
}
#log {
  text-align: left;
  color: black;
  margin-bottom: 3rem;
}
input {
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
  border: 10px;
  border-radius: 0.7rem;
}
input:not([type='submit']) {
  opacity: 0.8;
  transition: 0.4s;
}
input:focus:not([type='submit']) {
  opacity: 1;
}
input::placeholder {
  text-align: center;
}
form.login input:not([type='submit']) {
  border: 2px solid;
  color: grey;
}
form.login input[type='submit'] {
  background-color: #e54f6d;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  text-transform: uppercase;
}
.x {
  background-color: #724e91;
  background-size: 100% 100%;
}
.container {
  background-color: white;
  padding: 50px;
  margin: 50px;
  margin-right: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.helloworld {
  background-color: #fff;
  padding: 50px;
  margin: 50px;
  margin-left: 0;
  width: 686px;
  background: url('../assets/images/back.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
