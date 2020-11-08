import LotteryService from '@/services/LotteryService';
import LotteryModel from '@/models/LotteryModel';

describe('LotteryService', () => {
  process.env.VUE_APP_GRAPHQL_API_URL = 'http://localhost:8010/graphql';

  it('Service return model correctly for good params', async () => {
    const instance = new LotteryService();
    const response = await instance.fetchResults('eurojackpot', 15);
    expect(response).toBeInstanceOf(LotteryModel);
    expect(response).not.toBeNull();
    expect(response!.draws.length).toBe(15);
  });

  it('Service return model correctly for bad params', async () => {
    const instance = new LotteryService();
    const response = await instance.fetchResults('', 0);
    expect(response).toBeInstanceOf(LotteryModel);
    expect(response).not.toBeNull();
    expect(response!.draws.length).toBe(0);
  });
});
