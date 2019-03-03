<template>
  <button
    v-on="$listeners"
    class="button"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: none;
  border: 0;
  margin: 0;
  border-radius: 2px;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  text-decoration: none;
  color: inherit;
  -moz-focus-inner: none;
}
.button.disabled {
  cursor: default;
  pointer-events: none;
}
</style>
