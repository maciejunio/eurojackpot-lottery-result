import axios from 'axios';
import LotteryModel from '@/models/LotteryModel';

export default class LotteryService {
  lottery: string;

  limit: number;

  constructor(lottery: string, limit: number) {
    this.lottery = lottery;
    this.limit = limit;
  }

  public async fetchResults(): Promise<LotteryModel | null> {
    const response = await axios.post(process.env.VUE_APP_GRAPHQL_API_URL, {
      query: `query fetchDraws($lottery: String!, $limit: Int!) {
        draw(type: $lottery, limit: $limit) {
          draws {
            date  
            numbers  
            additionalNumbers 
            jackpot    
            __typename
          }
        __typename
        }
      }`,
      variables: { limit: this.limit, lottery: this.lottery },
    });
    if (!response.data.data.draw) {
      return null;
    }
    return new LotteryModel(response.data.data.draw);
  }
}
