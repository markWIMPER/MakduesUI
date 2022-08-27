<!--
 * @Author: Mark
 * @Date: 2022-08-24 22:40:21
 * @Description: 单文件组件 (按钮)
-->
/** * @Author: Mark * @Date: 2022-08-25 22:08:51 * @Description: */
<template>
	<!-- todo 重复性代码优化 -->
	<!-- iconPosition 依据传入的值进行调用clss属性 -->
	<button class="m-button" :class="{ [`icon-${iconPosition}`]: true }">
		<m-icon class="icon" v-if="icon" :name="icon"></m-icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>
</template>
<script>
export default {
	// props: ['icon', 'iconPosition']
	props: {
		icon: {},
		iconPosition: {
			type: String,
			default: 'left',
			validator: value => {
				return !(value !== 'left' && value !== 'right'); //异常约束
			}
		}
	}
};
</script>
<style lang="scss">
.m-button {
	font-size: var(--font-size);
	height: var(--button-height);
	padding: 0 1em;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	&:hover {
		border-color: var(--border-color-hover);
	}

	&:active {
		background-color: var(--button-active-bg);
	}

	&:focus {
		outline: none;
	}
	> .content {
		order: 2;
	}
	> .icon {
		order: 1;
		margin-right: 0.1em;
	}
	&.icon-right {
		> .content {
			order: 1;
		}
		> .icon {
			order: 2;
			margin-right: 0;
			margin-left: 0.1em;
		}
	}
}
</style>
