<template>
  <main class="x">
    <section class="forms">
        <!-- <form class="register" @submit.prevent="register">
            <h2>Register</h2>
            <input 
                type="email" 
                placeholder="Enter your email"
                v-model="register_form.email"
            />
            <input
                type="password" 
                placeholder="Enter your password"
                v-model="register_form.password"
            />
            <input 
                type="submit"
                value="Register"/>
        </form> -->
        <div class="container">
            <div class="logincont">
                <form class="login" @submit.prevent="login">
                    <h2>Login</h2>
                    <p id="log"> Login with your email and password.</p>
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
                    <input 
                        type="submit"
                        value="Login"/>
                    <p>Dont have an account?<a href="RegisterView.vue" style="color:#22162B; font-weight: bold;">Sign up instantly</a></p>
                </form>
            </div>
            
        </div>
        <div class="helloworld">
           
        </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup(){
        const login_form=ref({});
        // const register_form=ref({});
        const store=useStore();

        const login= () => {
            store.dispatch('login' , login_form.value);
        }
        // const register= () => {
        //     store.dispatch('register' , register_form.value);
        // }
        return {
            login_form,
            // register_form,
            login,
            // register
        }
    }

}
</script>

<style>
   .forms {
	display: flex;
	min-height: 100vh;
    margin: auto;
    
    /* padding: 10px; */
}
.labels{
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
}

form {
	flex: 1 1 0%;
	padding: 3rem 3rem 1rem;
}
/* form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
} */
h2 {
	font-size: 2rem;
	text-align: left;
    font-weight: bold;
	margin-bottom: 1rem;
}
#log{
    text-align: left;
    color:black;
    margin-bottom:3rem;
}
input {
	/* appearance: none;
	border: none;
	outline: none;
	background: none; */
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.2rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
    border: 10px;
    border-radius: 0.7rem;
    /* background-color: #2c3e50; */
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	
    text-align: center;
}
/* form.register input:not([type="submit"]) {
	color: #FFF;
	border-bottom: 2px solid #FFF;
} */
form.login input:not([type="submit"]) {
	border: 2px solid ;
    color:grey;
}
form.login input[type="submit"] {
	background-color:#E54F6D;
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 2.0rem;
	cursor: pointer;
	text-transform: uppercase;
}
/* form.register input[type="submit"] {
	background-color: #FFF;
	color: rgb(245, 66, 101);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
} */
.x{
    background-color: #724E91;
}
.container{
    background-color: white;
    padding:50px;
    margin:50px;
    margin-right:0;
    
}
.helloworld{
    background-color: #FFF;
    padding:50px;
    margin:50px;
    margin-left:0;
    background: url('../assets/images/abc.jpg');
    /* background-size:; */
    
    flex: 1 1 10%;
	

    

}
</style>