<template>
    <div class="wrapper">
        <div class="container">
            <h3 class="login-header">Вход в систему Events</h3>
            <p v-if="showError" class="text-danger">Пользователь не найден</p>
            <form action="">
                <input type="email" placeholder="Email" v-model="email" @input="updateError">
                <input type="password" placeholder="Пароль" v-model="password" @input="updateError">
                <button type="submit" class="btn-submit" @click.prevent="auth">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
import LoginService from "@/services/login-service";

export default {
    name: "LoginPage",
    data() {
        return {
            email: '',
            password: '',
            showError: false
        }
    },
    methods: {
        auth() {
            let user = LoginService.checkCredentials(this.email, this.password);

            if (!user) {
                this.showError = true;
                return;
            }

            LoginService.authUser(user);
        },
        updateError() {
            this.showError = false;
        }
    }
}
</script>

<style>
@import "../assets/css/login.css";
</style>