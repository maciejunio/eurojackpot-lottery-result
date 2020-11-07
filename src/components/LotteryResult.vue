<template>
  <div class="lotteryResult">
    <div class="buttonWrapper">
      <button
        class="button"
        id="nextButton"
        :disabled="nextDrawsAvailable"
        @click="nextDraws"
      >
        Next
      </button>
      <button
        class="button"
        id="previousButton"
        :disabled="previousDrawsAvailable"
        @click="previousDraws"
      >
        Previous
      </button>
    </div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="th-lg">Date</th>
            <th scope="col" class="th-lg">Jackpot</th>
            <th scope="col">Wining Numbers</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(draw, index) in drawsToDisplay" :key="index">
            <th scope="row">{{ draw.date }}</th>
            <td>{{ formatNumber(draw.jackpot) }}</td>
            <td class="numberCol">
              <Number
                v-for="number in draw.numbers"
                :key="number"
                :number="number"
                class="normal"
              />
              <Number
                v-for="number in draw.additionalNumbers"
                :key="`${number}Additional`"
                :number="number"
                class="additional"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Number from '@/components/Number.vue';

@Component({
  components: {
    Number,
  },
})
export default class LotteryResult extends Vue {
  @Prop() private draws!: string;

  private itemsToDisplayStart = 0;

  private itemsToDisplayEnd = 5;

  public formatNumber(number: string) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  public nextDraws() {
    if (this.itemsToDisplayStart > 0) {
      this.itemsToDisplayStart -= 5;
      this.itemsToDisplayEnd -= 5;
    }
  }

  public previousDraws() {
    if (this.itemsToDisplayEnd < this.draws.length) {
      this.itemsToDisplayStart += 5;
      this.itemsToDisplayEnd += 5;
    }
  }

  public get nextDrawsAvailable() {
    if (this.itemsToDisplayStart > 0) {
      return false;
    }
    return true;
  }

  public get previousDrawsAvailable() {
    if (this.itemsToDisplayEnd < this.draws.length) {
      return false;
    }
    return true;
  }

  public get drawsToDisplay() {
    return this.draws.slice(this.itemsToDisplayStart, this.itemsToDisplayEnd);
  }
}
</script>

<style lang="scss" scoped>
.lotteryResult {
  background-color: #252f5a;
  border-radius: 10px;
  padding: 30px;

  .buttonWrapper {
    margin-bottom: 20px;
    button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .table {
    color: #ffffff;
    .th-lg {
      @media (max-width: 960px) {
        min-width: 9rem;
      }
    }
  }
  .numberCol {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
