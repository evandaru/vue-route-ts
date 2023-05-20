<template >
  <div class="flex flex-col justify-center items-center h-screen ">
    <nav class="flex flex-row gap-5">
      <RouterLink to="/">Home </RouterLink>
      <RouterLink to="/form"> form</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts">


</script>