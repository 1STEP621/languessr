<template>
  <div :class="$style.loader"></div>
</template>

<style module>
/* https://css-loaders.com/spinner/ */

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid #80808010;
  border-right-color: #80808080;
  animation: l2 1s infinite linear;
}
@keyframes l2 {to{transform: rotate(1turn)}}
</style>
