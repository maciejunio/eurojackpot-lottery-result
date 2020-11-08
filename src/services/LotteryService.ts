import axios from 'axios';
import LotteryModel from '@/models/LotteryModel';

export default class LotteryService {
  public async fetchResults(
    lottery: string,
    limit: number,
  ): Promise<LotteryModel | null> {
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
      variables: { limit: limit, lottery: lottery },
    });
    if (!response.data.data.draw) {
      return null;
    }
    return new LotteryModel(response.data.data.draw.draws);
  }
}
