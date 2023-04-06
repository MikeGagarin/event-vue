<template>
    <div class="wrapper">
        <div class="container">
            <h3 class="login-header">Вход в систему Events</h3>
            <form action="">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Пароль">
                <button type="submit" class="btn-submit">Войти</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage"
}
</script>

<style>
@import "../assets/css/login.css";
</style>