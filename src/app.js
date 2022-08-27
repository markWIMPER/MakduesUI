/*
 * @Author: Mark
 * @Date: 2022-08-24 22:38:50
 * @Description: app 主入口文件
 */
import Vue from 'vue';
import Button from '../src/component/button.vue';
import Icon from '../src/component/icon.vue';
Vue.component('m-button', Button);
Vue.component('m-icon', Icon);
new Vue({
	el: '#app'
});
