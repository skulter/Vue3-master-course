<script>
	import BaseLayout from '../ui/Layout/BaseLayout.vue';
	import HomeTable from "../ui/Home/HomeTable.vue";
	import HomePagination from "../ui/Home/HomePagination.vue";

	export default {
    computed: {},
    components: { 
			BaseLayout,
			HomeTable,
			HomePagination,
		}
	}
</script>

<template>
		<div
			class="bg-white"
			:style="{height: 'window.innerHeight'}"
		>
			<BaseLayout>
				<HomeTable/>
				<HomePagination/>
			</BaseLayout>
		</div>   
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

