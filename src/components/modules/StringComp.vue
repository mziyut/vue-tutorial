<template>
  <div>
    <p>{{string}}</p>
  </div>
</template>

<script>
export default {
  name: 'stringComp',
  data() {
    return {
      string: '入力された文字列を出す',
    };
  },
};
</script>

<style scoped>
</style>
