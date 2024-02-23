<template>
    <div class="mailPreview">
        <p> {{ objet }} </p>
        <p> {{ from }} </p>
    </div>
</template>



<script>
export default {
    name: 'MailPreviewComponent',
    props: ['objet', 'from'],
}
</script>

<style>
.mailPreview {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

</style>