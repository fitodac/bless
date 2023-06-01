<script setup>
import { ref, onMounted } from '@nuxtjs/composition-api'

import t from '@/composables/convenios'
import PageHead from '@/components/sections/PageHead'
import PageContent from '@/components/sections/PageContent'
import Error404 from '@/components/Error404'

import Conventions from '@/components/Conventions'
</script>


<script>
export default{
	head() {
		return {
			title: `Bless, convenio con ${this.company.prefix} ${this.company.title}`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Realizamos un riguroso proceso de selección y una capacitación profesional a cargo de nuestra Dirección Técnica y Técnicos en Acompañamiento Terapéutico, titulados en la Universidad Católica del Uruguay, lo que nos permite brindar un servicio de excelencia, seriedad, respeto y cariño.'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: `https://bless.com.uy/convenios/${this.company.link}`
				}
			]
		}
  },

	async asyncData({ params }) {
		const slug = params.company
		
		let company = null

		t.companies.map(el => {
			const resp = el.items.filter(i => i.link === slug)
			if( resp.length ) company = resp[0]
		})

		return { slug, company }
	}
}
</script>



<template>
<div v-if="company">
	<PageHeader/>


	<PageHead 
		:title="t.title" 
		:intro="'<h2>' + t.intro.part1 + company.prefix + ' ' + `<span class='font-semibold'>${company.title}</span>` + t.intro.part2 + '</h2>'"
		:image="t.header_image"
		:title_seo="t.title_seo"/>


	<PageContent>
		<div v-html="company.content"/>

		<div class="mt-8 flex items-center justify-center">
			<div>{{ t.content.p1 }}</div>
			
			<nuxt-link 
				to="/contacto"
				class="bg-b3 text-white leading-none font-medium px-10 py-3 ml-4 rounded-full hover:bg-b4">{{ t.content.cta_text }}</nuxt-link>
		</div>

		
		<div class="mt-16 mb-20">
			<h3 class="text-primary text-xl font-medium leading-none">{{ t.content.other_conventions }}</h3>
			<Conventions class="mt-6"/>
		</div>
	</PageContent> 

</div>

<Error404 v-else/>
</template>