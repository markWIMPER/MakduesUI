/*
 * @Author: Mark
 * @Date: 2022-09-03 12:30:12
 * @Description:
 */
import Button from './src/component/button.vue';
import ButtonGroup from './src/component/button-group';
import Icon from './src/component/icon';

// node_modules 目前不支持 imort
/**
 * 1. 用babel进行转译
 * 2. 内部进行转译后发包
 */
export { Button, ButtonGroup, Icon };
