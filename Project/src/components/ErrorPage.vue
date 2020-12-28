<template>
    <div class="app">
        <h1 class="text-danger">An Error Occured!
        </h1>
        <h1 class="error">404</h1>
        <h2>Some of the functions has not been improved or perfected</h2>
        <h2>Sorry for the unconvenience brought to you!!</h2>
        <router-link :to="{path:'/'}"><button type="button" class="btn btn-reverse btn-lg">
            <span class="glyphicon glyphicon-arrow-left"></span>
            Back to Homepage
            </button></router-link>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
.app{
    width: 100%;
    height: 650px;
    margin-top: 53px;
    text-align: center;
    color: white;
    background-color:  #121212;
}
.error{
    font-size: 150px;
}
</style>
