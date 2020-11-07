// Import the `mount()` method from Vue Test Utils
import { shallowMount } from '@vue/test-utils';
import LotteryResult from '@/components/LotteryResult.vue';

import drawMock from '../mocks/drawMock';

describe('LotteryResult', () => {
  const wrapper = shallowMount(LotteryResult, {
    propsData: {
      draws: drawMock,
    },
  });
  const vm = wrapper.vm as any;
  it('Pagination works correctly', () => {
    expect(vm.itemsToDisplayStart).toBe(0);
    expect(vm.itemsToDisplayEnd).toBe(5);
    expect(vm.nextDrawsAvailable).toBe(true);
    expect(vm.previousDrawsAvailable).toBe(false);

    vm.previousDraws();
    expect(vm.itemsToDisplayStart).toBe(5);
    expect(vm.itemsToDisplayEnd).toBe(10);
    expect(vm.nextDrawsAvailable).toBe(false);
    expect(vm.previousDrawsAvailable).toBe(false);

    vm.previousDraws();
    expect(vm.itemsToDisplayStart).toBe(10);
    expect(vm.itemsToDisplayEnd).toBe(15);
    expect(vm.nextDrawsAvailable).toBe(false);
    expect(vm.previousDrawsAvailable).toBe(true);

    vm.nextDraws();
    expect(vm.itemsToDisplayStart).toBe(5);
    expect(vm.itemsToDisplayEnd).toBe(10);
  });
  it('Format number return correct string', () => {
    const number1 = '33000000';
    expect(vm.formatNumber(number1)).toBe('33 000 000');

    const number2 = '133000000';
    expect(vm.formatNumber(number2)).toBe('133 000 000');

    const number3 = '3300000';
    expect(vm.formatNumber(number3)).toBe('3 300 000');

    const number4 = '330000';
    expect(vm.formatNumber(number4)).toBe('330 000');
  });
});
