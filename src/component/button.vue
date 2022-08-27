<!--
 * @Author: Mark
 * @Date: 2022-08-24 22:40:21
 * @Description: 单文件组件 (按钮)
-->
/** * @Author: Mark * @Date: 2022-08-25 22:08:51 * @Description: */
<template>
	<!-- todo 重复性代码优化 -->
	<!-- iconPosition 依据传入的值进行调用clss属性 -->
	<button class="m-button" :class="{ [`icon-${iconPosition}`]: true }" @click="clickEvent">
		<m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
		<m-icon class="icon loading" v-if="loading" name="loading"></m-icon>
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
		loading: {
			type: Boolean,
			default: false
		},
		iconPosition: {
			type: String,
			default: 'left',
			validator: value => {
				return !(value !== 'left' && value !== 'right'); //异常约束
			}
		}
	},
	methods: {
		clickEvent() {
			this.$emit('click');
		}
	}
};
</script>
<style lang="scss">
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
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
	.loading {
		animation: spin 1s infinite ease-out;
	}
}
</style>
