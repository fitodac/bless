<script setup>
import { ref, reactive, computed } from '@nuxtjs/composition-api'


defineProps({
	title: String,
	intro: String,
	image: String,
	title_seo: String
})

</script>



<template>
<section v-if="title || intro || image">
	<div class="max-w-7xl px-6 mx-auto sm:px-10">
		<div class="flex flex-col md:grid md:grid-cols-12 md:gap-10">
			
			<div class="order-2 pt-6 md:order-1 md:col-span-5 md:pt-32 lg:col-span-4 lg:col-start-2 lg:pt-52">
				<h1 
					v-if="title" 
					class="text-primary text-4xl leading-tight text-center select-none md:text-left lg:text-5xl">
					{{ title }} 
					<span class="sr-only">{{ title_seo }}</span>
				</h1>
					
				<div 
					v-if="intro" 
					class="text-lg leading-tight text-center mt-2 select-none md:mt-3 md:text-left"
					v-html="intro"/>
			</div>

			<div class="page-header--image order-1 col-span-7 flex justify-end">

				<svg 
					v-if="image"
					xmlns="http://www.w3.org/2000/svg" 
					xmlns:xlink="http://www.w3.org/1999/xlink" 
					viewBox="0 0 1094 900"
					class="w-full mx-auto relative 
						sm:w-[80%] 
						md:w-full md:scale-110
						lg:-right-7 lg:scale-100
						xl:right-0">
					
					<defs>
						<path id="a" d="M722.679489,699.015018 C626.103948,877.427801 407.271116,949.74292 223.404615,864.004562 C41.1487547,779.017259 -45.5813162,568.549671 23.8853652,379.831838 L85.4398913,204.808971 C121.761174,94.0351036 98.6034795,25.7654467 15.9668067,0 L1093.0483,0 L722.679489,699.015018 Z"/>
					</defs>
					
					<g 
						fill="none" 
						fill-rule="evenodd">
						
						<mask 
							id="b" 
							fill="#fff">
							<use xlink:href="#a"/>
						</mask>

						<use xlink:href="#a" fill="#F8F8F8"/>

						<image 
							:xlink:href="image" 
							height="100%"
							class="object-cover"
							mask="url(#b)"/>
						
					</g>
				</svg>

				<!-- 
				<nuxt-img 
					v-if="image"
					:src="image" 
					:alt="title" 
					class="w-[600px] xl:w-[700px]"/> 
				-->
			</div>

		</div>
	</div>
</section>
</template>


<style lang="scss">
.page-header--image{

	

}// page-header--image

</style>