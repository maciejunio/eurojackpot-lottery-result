import LotteryService from '@/services/LotteryService';
import LotteryModel from '@/models/LotteryModel';

describe('LotteryService', () => {
  const instance = new LotteryService('eurojackpot', 15);
  const response = instance.fetchResults();

  it('Service return LotteryModel correctly', () => {
    expect(response).toBeInstanceOf(LotteryModel);
  });
});
