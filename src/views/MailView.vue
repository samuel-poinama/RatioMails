<template>
    <div>
        <h1>Mail</h1>
        <p>Welcome to the mail page</p>
    </div>
    <NewMailWidget/>
</template>

<script>
import NewMailWidget from '@/components/NewMailWidget.vue'

export default {
    name: 'mailView',
    components: {
        NewMailWidget
    }
}
</script>