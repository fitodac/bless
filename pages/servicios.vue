<script>
export default {
  head() {
		return {
			title: 'Bless brinda los mejores servicios de compañantes de enfermos',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'En Bless contamos con un servicio especializado para cada necesidad'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/servicios'
				}
			]
		}
  }
}
</script>


<script setup>
import t from '@/composables/servicios'
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

		<div 
			v-for="(service, idx) in t.content.services"
			:key="idx"
			class="grid gap-6 lg:grid-cols-12 lg:gap-10"
			:class="{'mt-32': idx}">

			<div class="lg:col-span-6" :class="{'lg:order-2': idx % 2}">
				<nuxt-img 
					quality="60"
					loading="lazy"
					:src="service.image.src" 
					:alt="service.image.alt" 
					class="w-full h-70 object-cover rounded-lg select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>
			</div>
			
			<div class="lg:flex lg:items-center lg:col-span-6">
				<div class="text-center lg:text-left">
					<h2 class="text-primary text-xl leading-tight font-medium select-none" v-html="service.title"></h2>

					<div class="mt-3 select-none">{{ service.content }}</div>

					<div class="text-primary font-medium leading-tight mt-10 md:text-sm">{{ t.content.contact }}</div>

					<div class="mt-5 md:mt-2">
						<nuxt-link 
							class="bg-b5 text-white leading-none font-medium px-10 py-3 inline-block rounded-full hover:bg-primary md:text-sm"
							to="/contacto">{{ t.content.contact_button }}</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		
	</PageContent>

</div>
</template>