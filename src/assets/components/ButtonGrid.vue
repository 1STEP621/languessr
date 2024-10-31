<template>
  <div :class="$style.grid">
    <slot />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-654Zm174 174Zm-348 0Zm174 174Zm0-234L360-660v-220h240v220L480-540Zm180 180L540-480l120-120h220v240H660Zm-580 0v-240h220l120 120-120 120H80ZM360-80v-220l120-120 120 120v220H360Zm120-574 40-40v-106h-80v106l40 40ZM160-440h106l40-40-40-40H160v80Zm280 280h80v-106l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z"/></svg>
  </div>
</template>

<style module>
.grid {
  display: grid;
  gap: 1em;
  margin-top: 2em;

  button {
    width: 12em;
    height: 4em;
    line-height: 1;
    padding: 1.2em 1.5em;

    /* font-size: 1.5em;
    background: none; */
  }
  :nth-child(1) {
    grid-column: 2;
    grid-row: 1;
    /* align-items: flex-end; */
  }
  :nth-child(2) {
    grid-column: 3;
    grid-row: 2;
    /* justify-content: flex-start; */
  }
  :nth-child(3) {
    grid-column: 2;
    grid-row: 3;
    /* align-items: flex-start; */
  }
  :nth-child(4) {
    grid-column: 1;
    grid-row: 2;
    /* justify-content: flex-end; */
  }
  svg {
    fill: currentColor;
    width: 4em;
    height: 4em;

    grid-column: 2;
    grid-row: 2;

    justify-self: center;
    align-self: center;
  }
}
</style>
