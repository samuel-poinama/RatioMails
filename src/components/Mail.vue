<template>
    <p>{{ this.id }}</p>
    <p>object</p>
    <p>
        Content of the mail
    </p>
</template>

<script>
export default {
    name: 'mail-component',
    props: {
        id: Number
    }
}
</script>