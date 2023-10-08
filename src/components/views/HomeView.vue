<script>
	import HomeLayout from '../ui/Layout/HomeLayout.vue';
	import HomeTable from "../ui/Home/HomeTable.vue";
	import HomePagination from "../ui/Home/HomePagination.vue";

	export default {
    computed: {},
    components: { 
			HomeLayout,
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
			<HomeLayout>
				<HomeTable/>
				<HomePagination/>
			</HomeLayout>
		</div>   
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

