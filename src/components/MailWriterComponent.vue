<template>
    <div>
        <h1>Mail Writer</h1>
        <p>Welcome to the mail writer page</p>
        <div>
            <input type="text" v-model="objet" placeholder="Objet">
            <br>
            <input type="text" v-model="to" placeholder="To">
            <br>
            <textarea v-model="body" placeholder="Body"></textarea>
            <br>
            <button @click="sendMail">Send</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MailWriterComponents',
    data() {
        return {
            objet: "",
            to: "",
            body: ""
        }
    },
    methods: {
        sendMail() {
            const data = {
                objet: this.objet,
                from: this.$store.state.email,
                to: this.to,
                body: this.body
            }

            if (data.to === this.$store.state.email) {
                this.$store.commit('addReceived', data)
            } else {
                this.$store.commit('addSended', data)
            }

            this.objet = ""
            this.to = ""
            this.body = ""
        }
    }
}

</script>