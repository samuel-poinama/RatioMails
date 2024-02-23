<template>
    <h1>Mail Component</h1>
    <p>Objet: {{ objet }}</p>
    <p>From: {{ from }}</p>
    <p>To: {{ to }}</p>
    <p>Body: {{ body }}</p>
    <button @click="closeMail">Close</button>
</template>


<script>
export default {
    name: 'MailComponent',
    props: ['objet', 'from', 'to', 'body', 'closeMail'],
}
</script>