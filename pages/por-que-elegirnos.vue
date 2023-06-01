<script>
export default {
  head() {
		return {
			title: '¿Por qué Bless es la mejor opción?',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'En Bless, contamos con un equipo de acompañantes con vocación de servicio y además le brindamos un reintegro diario por internación'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/por-que-elegirnos'
				}
			]
		}
  }
}
</script>



<script setup>
import t from '@/composables/por-que-elegirnos'
import PageHead from '@/components/sections/PageHead'
import PageContent from '@/components/sections/PageContent'
</script>


<template>
<div>
	<PageHeader/>

	<PageHead 
		:title="t.title" 
		:intro="t.intro"
		:image="t.header_image"
		:title_seo="t.title_seo"/>

	<PageContent>
		<section 
			v-for="(section, idx) in t.content"
			:key="idx"
			class="grid gap-5 md:grid-cols-12 md:gap-10 lg:gap-14"
			:class="{'mt-20': idx}">

			<div 
				class="md:col-span-6 lg:col-span-5"
				:class="{'lg:order-2': idx % 2, 'lg:col-start-2': !(idx % 2)}">

				<nuxt-img 
					quality="60"
					loading="lazy"
					v-if="section.image.src.length"
					:src="section.image.src" 
					:alt="section.image.alt" 
					class="w-full h-64 object-cover shadow-lg rounded-xl select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>

			</div>
			
			
			<div 
				class="flex items-center md:col-span-6 lg:col-span-5"
				:class="{'lg:col-start-2': idx % 2}">
				<div>
					<h2 class="text-primary text-2xl font-medium leading-none">{{ section.title }}</h2>
					<div class="mt-2">{{ section.content }}</div>
				</div>
			</div>

		</section>
	</PageContent>

</div>
</template>