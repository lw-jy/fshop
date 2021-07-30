<template>
<div>

    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/footer-guide.vue'
export default {
    components:{
       FooterGuide,
    }
}
</script>

<style lang="stylus" scoped>

</style>

