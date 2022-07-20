<template>
  <main class="Y">
    <section class="forms">
		<div class="container">
        <form class="register" @submit.prevent="register">
            <h2>Register</h2>
			<p id="reg"> Register with your email and password.</p>
            <p class="labels">Email:</p>
            <input 
                type="email" 
                placeholder="Enter your email"
                v-model="register_form.email"
            />
			<p class="labels">Password:</p>
            <input
                type="password" 
                placeholder="Enter your password"
                v-model="register_form.password"
            />
            <input 
                type="submit"
                value="Register"/>
				<p>Already have an account?<router-link to="/login" style="color:#22162B; font-weight: bold; text-decoration: none;">Login </router-link></p>
			</form>
		</div>
		<div class="registrationimg">
           
        </div>
        </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const register_form=ref({});
        const store=useStore();

        const register= () => {
            store.dispatch('register' , register_form.value);
        }
        return {
            register_form,
            register
        }
    }
}
</script>

<style>
.Y{
    background-color: #724E91;
    background-size: cover;
	
}
.forms {
	display: flex;
	min-height: 100vh;
	justify-content: center;
	
}
form {
	flex: 1 1 0%;
	padding: 3rem 3rem 1rem;
    
}
.labels{
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
}
form.register {
	color:black;
}
h2 {
	font-size: 2rem;
	text-align: left;
    font-weight: bold;
	margin-bottom: 1rem;
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
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
	
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}
form.register input:not([type="submit"]) {
	border: 2px solid ;
    color:grey;
}
form.register input[type="submit"] {
	background-color: #22162B;
	color:#E54F6D;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 2.0rem;
	cursor: pointer;
	text-transform: uppercase;
}
.container{
    background-color: white;
    padding:50px;
    margin:50px;
    margin-right:0;    
}
#reg{
    text-align: left;
    color:black;
    margin-bottom:3rem;
}
.registrationimg{
	background-color: #FFF;
    padding:50px;
    margin:50px;
    margin-left:0;
    width: 686px;
    background: url('../assets/images/registration.jpg');
    background-size:100% 100%;
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>
