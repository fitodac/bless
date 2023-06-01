<template>
<div>
	<div 
		ref="target"
		class="h-28 left-0 top-0 absolute"></div>


	<div
		class="bg-white border-t border-gray-100 h-14 inset-x-0 fixed transition-all duration-300 shadow-xl z-50 sm:hidden"
		:class="{'-bottom-20': navbar_visible, 'bottom-[10px]': !navbar_visible}">
		<Navbar type="footer"/>	
	</div>


	<section class="bg-white border-t-2 border-secondary px-6 pt-8 pb-24 md:pb-10">
		<div class="container max-w-5xl mx-auto">
			
			<div class="text-sm font-light md:grid md:grid-cols-12 md:gap-10">
				<div class="text-center leading-tight md:col-span-8 md:flex md:items-center md:text-left">
					<strong class="font-bold block md:w-[130px]">{{ tg.footer.offices }}</strong>
					<div class="">
						<span class="mt-0.5 block md:mt-0">{{ tg.footer.address }}</span>
						<span class="mt-0.5 block md:mt-0">{{ tg.footer.phone }}</span>
					</div>
				</div>

				<div class="text-center mt-5 md:col-span-4 md:mt-0 md:flex md:items-center md:justify-end">
					<a 
						href="https://acompania.uy" 
						target="_blank"
						class="inline-block">
						<span class="text-xs">{{ tg.footer.with_the_support_of }}</span>
						<nuxt-img 
							quality="60"
							loading="lazy"
							src="brand-acompania.png" 
							alt="Acompaña" 
							class="w-28 mx-auto mt-1 select-none pointer-events-none md:mt-0 md:inline-block"/>
					</a>
				</div>
			</div>

		</div>
	</section>
</div>
</template>


<script setup>
import tg from '@/composables/global'
import { ref } from '@nuxtjs/composition-api'
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const navbar_visible = useElementVisibility(target)
</script>