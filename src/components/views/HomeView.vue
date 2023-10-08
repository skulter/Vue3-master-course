<script>
	import BaseLayout from '../ui/Layout/BaseLayout.vue';
	import HomeTable from "../ui/Home/HomeTable.vue";
	import HomePagination from "../ui/Home/HomePagination.vue";
	// import { getQuote, getQuotes } from '@/apis/getQuotes';

	export default {
    computed: {},
    components: { 
			BaseLayout,
			HomeTable,
			HomePagination,
		},
	}
</script>

<template>
	<BaseLayout>
		<HomeTable/>
		<HomePagination/>
	</BaseLayout>
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

