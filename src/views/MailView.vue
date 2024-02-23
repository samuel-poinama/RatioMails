<template>
    <div>
        <h1>Mail</h1>
        <p>Welcome to the mail page</p>
        <div v-for="mail in this.$store.state.sended" :key="mail.objet">
            <MailPreviewComponent :objet="mail.objet" :from="mail.from" :to="mail.to" :body="mail.body" @click="openMail(mail.objet, mail.from, mail.to, mail.body)"/>
        </div>

        <MailWriterComponent/>
    </div>

    
</template>

<script>
import MailPreviewComponent from '@/components/MailPreviewComponent.vue'
import MailWriterComponent from '@/components/MailWriterComponent.vue'

export default {
    name: 'mailView',
    components: {
        MailPreviewComponent,
        MailWriterComponent
    },
    data() {
        return {
            mails: [
                {
                    objet: "1",
                    from: "This is the from",
                    to: "This is the to",
                    body: "This is the body"
                },
                {
                    objet: "2",
                    from: "This is the from",
                    to: "This is the to",
                    body: "This is the body"
                },
                {
                    objet: "This is the objet",
                    from: "This is the from",
                    to: "This is the to",
                    body: "This is the body"
                }
            ]
        }
    },
    methods: {
        openMail(objet, from, to, body) {
            this.$router.push({ name: 'MailComponent', params: { objet, from, to, body } })
        }
    }
}
</script>