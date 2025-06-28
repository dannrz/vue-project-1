import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('MyCounter', () => {
    test('should match snapshot', () => {
        // MyCounter
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    })

    it('renders the counter value correctly', () => {
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        })

        const [counter, square] = wrapper.findAll('h3');

        expect(counter.text()).toContain('Counter 5');
        expect(square.text()).toContain('Square 25');
        // console.log(wrapper.html())
    })

    it('increments the counter when the button is clicked', async () => {
        const value = 5

        const wrapper = mount(MyCounter, {
            props: {
                value: value,
            }
        })

        const button = wrapper.find<HTMLButtonElement>('button');
        await button.trigger('click');

        const [counter, square] = wrapper.findAll('h3');

        expect(counter.text()).toContain(`Counter ${value + 1}`);
        expect(square.text()).toContain(`Square ${(value + 1) * (value + 1)}`);
    })

    it('decrements the counter when the button is clicked twice', async () => {
        const value = 5

        const wrapper = mount(MyCounter, {
            props: {
                value,
            }
        })

        const [, btnDec] = wrapper.findAll<HTMLButtonElement>('button');

        await btnDec.trigger('click');
        await btnDec.trigger('click');

        const [counter, square] = wrapper.findAll('h3');

        expect(counter.text()).toContain(`Counter ${value - 2}`);
        expect(square.text()).toContain(`Square ${(value - 2) * (value - 2)}`)

    })
})