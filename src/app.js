/*
 * @Author: Mark
 * @Date: 2022-08-24 22:38:50
 * @Description: app 主入口文件
 */
import Vue from 'vue';
import Button from '../src/button.vue';
Vue.component('m-button', Button);

new Vue({
	el: '#app'
});
