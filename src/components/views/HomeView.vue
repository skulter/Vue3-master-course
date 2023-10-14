<script>
	import BaseLayout from '../ui/Layout/BaseLayout.vue';
	import HomeTable from "../ui/Home/HomeTable.vue";
	import HomePagination from "../ui/Home/HomePagination.vue";
	import { getQuotes } from '@/apis/getQuotes';

	export default {
		data() {
			const pageInfo = {
				page: 0,
				totalPages: 0,
			};
			const quotes = [];
			return {
				pageInfo,
				quotes
			}
		},
    components: { 
			BaseLayout,
			HomeTable,
			HomePagination,
		},
		computed: {
			groups() {
				return this.quotes.map(quote => ({
					id: quote._id,
					author: quote.author,
					quote: quote.content,
				}))
			}
		},
		async created() {
			const data = await getQuotes()
			this.pageInfo.page = data.page;
			this.pageInfo.totalPages = data.totalPages
			this.quotes = data.results;
			console.log(data)
		}
	}
</script>

<template>
	<BaseLayout>
		<article class="flex flex-col gap-8 p-4">
			<HomeTable :groups="groups"/>
			<HomePagination 
				:page="pageInfo.page"
				:total-pages="pageInfo.totalPages"
			/>
		</article>
	</BaseLayout>
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

