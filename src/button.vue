<template>
	<div>
		<button class="m-button">Mark</button>
	</div>
</template>
<script>
export default {};
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
