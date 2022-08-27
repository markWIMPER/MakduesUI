<!--
 * @Author: Mark
 * @Date: 2022-08-24 22:40:21
 * @Description: 单文件组件 (按钮)
-->
/** * @Author: Mark * @Date: 2022-08-25 22:08:51 * @Description: */
<template>
	<div>
		<!-- todo 重复性代码优化 -->
		<button class="m-button" v-if="!iconPosition || iconPosition === 'left'">
			<svg v-if="icon" class="icon">
				<use :xlink:href="`#i-${icon}`"></use>
			</svg>
			<slot></slot>
		</button>
		<button class="m-button" v-else>
			<slot></slot>
			<svg v-if="icon" class="icon">
				<use :xlink:href="`#i-${icon}`"></use>
			</svg>
		</button>
	</div>
</template>
<script>
export default {
	props: ['icon', 'iconPosition']
};
</script>
<style lang="scss">
.m-button {
	font-size: var(--font-size);
	padding: 0 1em;
	/*width*/
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	font: inherit;
	height: var(--button-height);
	background: var(--button-bg);
	&:hover {
		border-color: var(--border-color-hover);
	}

	&:active {
		background-color: var(--button-active-bg);
	}

	&:focus {
		outline: none;
	}
}
</style>
