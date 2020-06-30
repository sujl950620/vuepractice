<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit="onSubmitForm"></form>
    </div>
</template>

<script>
export default {
    data() {
        
    },
    methods : {
        onSubmitForm(e) {
            e.preventDefault();
        }
    }
};
</script>

<style>

</style>