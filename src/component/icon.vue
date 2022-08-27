<!--
 * @Author: Mark
 * @Date: 2022-08-27 16:03:01
 * @Description: 
-->
<template>
	<svg class="m-icon">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>
<script>
export default {
	props: ['name']
};
</script>
<style lang="scss" scoped>
.m-icon {
	width: 1em;
	height: 1em;
}
</style>
