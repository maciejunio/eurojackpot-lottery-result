interface Draw {
  additionalNumbers: string[];
  date: string;
  jackpot: string;
  numbers: string[];
  __typename: string;
}

export default class LotteryModel {
  draws: Draw[];

  constructor(data: LotteryModel) {
    this.draws = data.draws;
  }
}
