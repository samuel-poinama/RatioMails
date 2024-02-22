<template>
    <div class="login_container">
        <div class="login_card">
            <div class="login_content">
                <h1 class="login_title">Connexion</h1>
                <p class="login_description">Bienvenue sur la page de connexion</p>
                <form @submit.prevent="login" class="login_form">
                    <label for="username" class="login_label">Nom d'utilisateur:</label>
                    <input type="text" id="username" v-model="username" class="login_input" required>
                    <label for="password" class="login_label">Mot de passe:</label>
                    <input type="password" id="password" v-model="password" class="login_input" required>
                    <button type="submit" class="login_button">Connexion</button>
                </form>
                <p v-if="errorMessage" class="login_error">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'loginView',
    data() {
        return {
            username: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        login() {
            if (this.username === 'user' && this.password === 'password') {
                console.log('Connexion réussie');
            } else {
                this.errorMessage = 'Nom d\'utilisateur ou mot de passe invalide';
            }
        }
    }
}
</script>

<style scoped>
.login_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
}

.login_card {
    width: 400px;
    padding: 200px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.login_title {
    font-size: 34px;
    margin-bottom: 20px;
    color: #1a73e8;
}

.login_description {
    font-size: 16px;
    margin-bottom: 20px;
    color: #333;
}

.login_form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login_label {
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
}

.login_input {
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.login_button {
    width: 50%;
    padding: 18px;
    background-color: #1a73e8;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.login_button:hover {
    background-color: #0d47a1;
}

.login_error {
    font-size: 14px;
    color: red;
    margin-top: 10px;
}
</style>
