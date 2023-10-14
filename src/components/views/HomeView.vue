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
		methods: {
			onPageUpdate(flag) {
				if(flag === 'next') {
					this.pageInfo.page += 1;
				}
				else {
					this.pageInfo.page -= 1;
				}
				this.updateQuotes(this.pageInfo.page)
			},
			async updateQuotes(page) {
				const data = await getQuotes(page)
				this.pageInfo.page = data.page;
				this.pageInfo.totalPages = data.totalPages
				this.quotes = data.results;
			}
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
		created() {
			this.updateQuotes(1)
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
				@change-page="onPageUpdate"
			/>
		</article>
	</BaseLayout>
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

