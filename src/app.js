/*
 * @Author: Mark
 * @Date: 2022-08-24 22:38:50
 * @Description: app 主入口文件
 */
import Vue from 'vue';
import Button from '../src/component/button.vue';
import Icon from '../src/component/icon.vue';
import ButtonGroup from '../src/component/button-group.vue';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
chai.use(spies);

Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
Vue.component('m-button-group', ButtonGroup);

new Vue({
	el: '#app',
	data: {
		loading1: false
	}
});

// 单元测试 - icon
{
	const Constructor = Vue.extend(Button);
	const vm = new Constructor({
		propsData: {
			icon: 'setting'
		}
	});
	vm.$mount();
	let useElement = vm.$el.querySelector('use');
	let href = useElement.getAttribute('xlink:href');
	expect(href).to.eq('#i-setting');
}

// 单元测试 - loading
{
	const Constructor = Vue.extend(Button);
	const vm = new Constructor({
		propsData: {
			icon: 'setting ',
			loading: true
		}
	});
	vm.$mount();
	let useElement = vm.$el.querySelector('use');
	let href = useElement.getAttribute('xlink:href');
	expect(href).to.eq('#i-loading');
}

// 单元测试 - icon - position;
{
	const div = document.createElement('div');
	document.body.appendChild(div);
	const Constructor = Vue.extend(Button);
	const vm = new Constructor({
		propsData: {
			icon: 'setting ',
			loading: true,
			iconPosition: 'right'
		}
	});
	vm.$mount(div);
	let svg = vm.$el.querySelector('svg');
	let { order } = window.getComputedStyle(svg);
	expect(order).to.eq('2');
	vm.$el.remove();
	vm.$destroy();
}

// 单元测试 - click;
{
	const Constructor = Vue.extend(Button);
	const vm = new Constructor({
		propsData: {
			icon: 'setting '
		}
	});
	vm.$mount('#test');

	let spy = chai.spy(() => {
		console.log(1234);
	});

	vm.$on('click', spy);

	let button2 = vm.$el;
	button2.click();
	expect(spy).to.have.been.called(); //被调用了
}
