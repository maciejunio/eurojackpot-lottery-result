<template>
  <div class="number">
    {{ number }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Number extends Vue {
  @Prop() private number!: string;
}
</script>

<style lang="scss" scoped>
.number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    width: 30px;
    height: 30px;
    margin: 0px 5px;
  }
}
.additional {
  background-color: #f6c900;
}
.normal {
  background-color: #46bfe0;
}
</style>
