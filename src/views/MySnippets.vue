<template>
  <div class="MySnippets">


  </div>
</template>

<script>
  // @ is an alias to /src
  import LayoutHome from '@/layouts/LayoutHome.vue'
  import axios from 'axios';
  import router from "@/router";

  export default {
    name: 'MySnippets',
    components: {},
    data() {
      return {}
    },
    methods: {

    },
    created() {
      this.$emit('update:layout', LayoutHome)
    },
    mounted() {

    }
  }
</script>

