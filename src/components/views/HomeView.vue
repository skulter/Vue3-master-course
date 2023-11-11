<script>
	import HomeTable from "../ui/Home/HomeTable.vue";
	import HomePagination from "../ui/Home/HomePagination.vue";
	import { getQuotes } from '@/apis/getQuotes';
	import { computed, defineComponent, onMounted, ref } from "vue";
	
	export default defineComponent({
		components: { 
			HomeTable,
			HomePagination,
		},
		setup () {
			const pageInfo = ref({
				page: 0,
				totalPages: 0,
			});
			const quotes = ref([]);

			const updateQuotes = async (page) => {
				const data = await getQuotes(page);
				pageInfo.value.page = data.page;
				pageInfo.totalPages = data.totalPages;
				quotes.value = data.results;
			}

			const onPageUpdate = (flag) => {
				if(flag === "next") {
					pageInfo.value.page += 1;
				} else {
					pageInfo.value.page -= 1;
				}
				updateQuotes(pageInfo.value.page);
			}

			onMounted(() => {
				updateQuotes(1);
			});

			const groups = computed(() => quotes.value.map(quote => ({
				id: quote._id,
				author: quote.author,
				quote: quote.content
			})));
			
			return {
				// data
				pageInfo,
				quotes,
				// computed
				groups,
				// methods
				updateQuotes, 
				onPageUpdate,
			}
		},
	});
</script>

<template>
	<article class="flex flex-col gap-8 p-4">
		<HomeTable :groups="groups"/>
		<HomePagination 
			:page="pageInfo.page"
			:total-pages="pageInfo.totalPages"
			@change-page="onPageUpdate"
		/>
	</article>
</template>

<style>
.hello {
	color: var(--blue)
}
</style>

