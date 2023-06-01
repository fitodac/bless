<script setup>
import global from '@/composables/global'
import { ref, computed, watch, useRoute } from '@nuxtjs/composition-api'
import { useElementVisibility } from '@vueuse/core'


const target = ref(null)
const menu_mobile_visible = ref(false)
const navbar_visible = useElementVisibility(target)
const route = useRoute()


const menu_class = computed(() => {
	if( menu_mobile_visible.value ){
		return 'ml-[100vw]'
	}else{
		return ''
	}
})

const toggleNavbar = () => {
	menu_mobile_visible.value = !menu_mobile_visible.value
}

watch(navbar_visible, (val) => { if(!val) menu_mobile_visible.value = val })
</script>



<template>
<div>
	<div ref="target" class="h-28 left-0 top-0 absolute"></div>


	<section class="px-6 left-0 right-0 top-2 absolute z-40 md:top-8 md:fixed md:left-0 md:right-0">

		<div class="container max-w-6xl mx-auto">
			<div 
				class="section bg-b5 mx-auto rounded-full transition-all duration-300"
				:class="{'shadow-none': !navbar_visible}">

				<div class="w-full py-2-- px-4 mx-auto">
					<div class="flex justify-between items-center">
						<h1 
							v-if="'index' === route.name" 
							class="-top-1 relative z-20">
							
							<nuxt-img 
								src="/brand-white.svg" 
								:alt="global.sitename" 
								class="w-[100px] select-none pointer-events-none"/>

							<span class="sr-only">{{ global.sitename }} {{ global.title_seo }}</span>
						</h1>


						<div 
							v-else
							class="-top-1 relative z-20">

							<nuxt-link to="/">
								<nuxt-img 
									src="/brand-white.svg" 
									:alt="global.sitename" 
									class="w-[100px] select-none pointer-events-none"/>
							</nuxt-link>

							<span class="sr-only">{{ global.sitename }}</span>
						</div>


						<div class="flex items-center">
							<button 
								@click="toggleNavbar"
								class="text-white w-5 h-5 hidden justify-center items-center relative z-20 sm:flex lg:hidden">
								<i class="ri-menu-line text-2xl" v-if="!menu_mobile_visible"></i>
								<i class="ri-close-line text-2xl" v-if="menu_mobile_visible"></i>
							</button>


							<div class="flex items-center ml-4">
								<div 
									class="bg-b5 mt-6 left-6 right-6 top-0 absolute transition-all duration-300 rounded-b-[30px] overflow-hidden z-10 lg:bg-transparent lg:h-auto lg:mt-0 lg:relative"
									:class="{
										'h-[350px] md:h-[96px] md:pt-9 lg:pt-0': menu_mobile_visible, 
										'h-0': !menu_mobile_visible
									}">
									<Navbar class="pt-8 sm:pt-7 md:pt-0"/>
								</div>


								<div class="bg-primary text-white font-medium leading-none text-center px-5 py-2 -mr-4 relative rounded-full z-20">
									<span class="text-xl font-bold block">{{ global.phone }}</span>
									<span class="text-xs -mt-1.5 block">{{ global.phone_title }}</span>
								</div>
							</div>
						</div>
						
					</div>

				</div>

			</div>
		</div>
	</section>

	<div 
		class="fixed backdrop-grayscale transition-all duration-300 z-30"
		:class="{
			'bg-white bg-opacity-70 inset-0': menu_mobile_visible, 
			'pointer-events-none': !menu_mobile_visible
		}"></div>
</div>
</template>



<style lang="scss" scoped>
@media (min-width: 768px){
	.section:not(.shadow-none){
		box-shadow: 0 -20px 130px rgba(#000, .8);
	}
}
</style>