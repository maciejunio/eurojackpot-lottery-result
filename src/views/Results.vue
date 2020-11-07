<template>
  <div class="results">
    <h1>Eurojackpot results</h1>
    <LotteryResult v-if="results" :draws="results.draws" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LotteryService from '@/services/LotteryService';
import LotteryModel from '@/models/LotteryModel';
import LotteryResult from '@/components/LotteryResult.vue';
import { Nullable } from '@/utils/Nullable';

@Component({
  components: {
    LotteryResult,
  },
})
export default class Results extends Vue {
  private results: Nullable<LotteryModel> = null;

  async mounted() {
    const lotteryService = new LotteryService('eurojackpot', 15);
    this.results = await lotteryService.fetchResults();
  }
}
</script>

<style lang="scss" scoped>
.results {
  min-height: 100vh;
  padding: 15px;
}
</style>
