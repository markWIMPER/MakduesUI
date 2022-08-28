/*
 * @Author: Mark
 * @Date: 2022-08-28 15:17:47
 * @Description: m-button 测试用例
 */
const expect = chai.expect;
import Vue from 'vue';
import Button from '../src/component/button';

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Button', () => {
	it('存在.', () => {
		expect(Button).to.be.ok;
	});

	it('可以设置icon.', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'setting'
			}
		}).$mount();
		const useElement = vm.$el.querySelector('use');
		expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting');
		vm.$destroy();
	});

	it('可以设置loading.', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'setting',
				loaading: true
			}
		}).$mount();
		const useElement = vm.$el.querySelectorAll('use');
		expect(useElement.length).to.equal(1);
		vm.$destroy();
	});

	it('可以设置icon位置(right).', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'setting',
				iconPosition: 'right'
			}
		}).$mount(div);
		const icon = vm.$el.querySelector('svg');
		expect(getComputedStyle(icon).order).to.eq('2');
		vm.$el.remove();
		vm.$destroy();
	});

	it('可以设置icon位置(默认left).', () => {
		const div = document.createElement('div');
		document.body.appendChild(div);
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			propsData: {
				icon: 'setting',
				iconPosition: 'left'
			}
		}).$mount(div);
		const icon = vm.$el.querySelector('svg');
		expect(getComputedStyle(icon).order).to.eq('1');
		vm.$el.remove();
		vm.$destroy();
	});

	it('点击button,触发click事件', () => {
		const Constructor = Vue.extend(Button);
		const vm = new Constructor({
			icon: 'setting'
		}).$mount();

		const callback = sinon.fake();
		vm.$on('click', callback);
		vm.$el.click();
		expect(callback).to.have.been.called;
	});
});
