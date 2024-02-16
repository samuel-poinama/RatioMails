<template>
    <div>
        <h1>Mail</h1>
        <p>Welcome to the mail page</p>
        <mail-component id="1" />
    </div>
</template>

<script>
import Mail from '@/components/Mail.vue'

export default {
    name: 'mailView',
    components: {
        'mail-component': Mail
    }
}
</script>