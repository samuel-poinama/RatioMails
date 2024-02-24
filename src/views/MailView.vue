<template>
    <div class="w-screen h-screen overflow-hidden text-stone-600 bg-gray-100">
        <MailInbox/>
        <NewMailWidget/>
    </div>
</template>

<script>
import MailInbox from '@/components/MailInbox.vue'

export default {
    name: 'mailView',
    components: {
        MailInbox
    }
}
</script>