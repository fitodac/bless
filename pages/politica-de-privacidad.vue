<script>
export default {
  head() {
		return {
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/politica-de-privacidad'
				}
			]
		}
  }
}
</script>


<script setup>
import t from '@/composables/politica-de-privacidad'
import PageHead from '@/components/sections/PageHead'
import PageContent from '@/components/sections/PageContent'
</script>


<template>
<div>
	
	<PageHead 
		:title="t.title" 
		:intro="t.intro" 
		:image="t.header_image"
		:title_seo="t.title_seo"/>


	<PageContent>
		<p>{{ t.content.p1 }}</p>
		<p class="mt-8">{{ t.content.p2 }}</p>
		<p class="mt-8">{{ t.content.p3 }}</p>
	</PageContent>

</div>
</template>