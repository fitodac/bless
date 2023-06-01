<script>
export default {
  head() {
		return {
			title: 'Bless, una empresa dedicada a servir y acompañar',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Realizamos un riguroso proceso de selección y una capacitación profesional a cargo de nuestra Dirección Técnica, lo que nos permite brindar un servicio de excelencia, seriedad, respeto y cariño.'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/empresa'
				}
			]
		}
  }
}
</script>


<script setup>
import t from '@/composables/empresa'
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
							
		<div class="grid lg:grid-cols-12 gap-10 mt-10">
			<div class="lg:col-span-6">
				<p>{{ t.content.p2 }}</p>	
			</div>
			
			<div class="lg:col-span-6">
				<p v-html="t.content.p3"></p>
			</div>
		</div>


		<div class="grid lg:grid-cols-12 gap-10 mt-10">
			<div class="lg:col-span-6">
				<div class="relative">
					<nuxt-img 
						quality="60"
						loading="lazy"
						:src="t.content.mission.image.src" 
						:alt="t.content.mission.image.alt" 
						class="w-full h-60 object-cover rounded-xl select-none pointer-events-none"
						sizes="sm:640px md:768px lg:900px xl:1024"/>
					
					<h2 class="bg-gradient-to-t from-black to-transparent text-white text-2xl leading-none font-bold px-3 pb-3 pt-10 left-0 right-0 bottom-0 absolute select-none rounded-b-lg">{{ t.content.mission.title }}</h2>
				</div>

				<p class="mt-3" v-html="t.content.mission.p1"/>
			</div>

			<div class="lg:col-span-6">
				<div class="relative">
					<nuxt-img 
						quality="60"
						loading="lazy"
						:src="t.content.vision.image.src" 
						:alt="t.content.vision.image.alt" 
						class="w-full h-60 object-cover rounded-xl select-none pointer-events-none"
						sizes="sm:640px md:768px lg:900px xl:1024"/>
				
					<h3 class="bg-gradient-to-t from-black to-transparent text-white text-2xl leading-none font-bold px-3 pb-3 pt-10 left-0 right-0 bottom-0 absolute select-none opacity-60 rounded-b-lg">{{ t.content.vision.title }}</h3>
				</div>

				<p class="mt-3">{{ t.content.vision.p1 }}</p>
			</div>
		</div>
	</PageContent>

</div>
</template>