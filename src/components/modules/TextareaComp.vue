<template>
  <div>
    <p class="error">{{error}}</p>
    <textarea></textarea>
  </div>
</template>

<script>
export default {
  name: 'textarea',
  data() {
    return {
      error: '入力は必須です',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
