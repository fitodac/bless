<script setup>
import { ref, computed, watch } from '@nuxtjs/composition-api'
import VueSlickCarousel from '@centiva/vue-slick-carousel'

import '@centiva/vue-slick-carousel/dist/vue-slick-carousel.css'
import '@centiva/vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import t from '@/composables/home'
import global from '@/composables/global'

const slider_opts = {
	dots: true,
	arrows: false,
	// fade: true,
	infinite: true,
	speed: 1200,
	autoplay: true,
  autoplaySpeed: 2600,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true
}
</script>



<template>
<div class="w-screen">

	<div>
		<VueSlickCarousel 
			class="z-20" 
			v-bind="slider_opts">

			<div 
				v-for="(s, i) in t.hero"
				:key="i"
				class="pt-[370px] relative 
				sm:pt-16 sm:flex sm:items-center sm:h-[360px] 
				md:h-[520px] 
				lg:h-[680px]">

				<div class="w-full px-6 left-0 top-0 absolute overfolw-x-hidden 
										sm:p-0 sm:w-1/2 sm:left-auto sm:right-0 
										md:w-7/12 
										2xl:w-6/12">
					<nuxt-img 
						quality="60"
						loading="lazy"
						format="webp"
						:src="s.img" 
						:alt="s.alt" 
						class="hero-image max-w-[400px] h-[360px] mx-auto object-cover object-left pointer-events-none sm:max-w-5xl md:h-[520px] lg:h-[680px]"
						sizes="sm:640px md:768px lg:900px xl:1024"/>
				</div>
				
				<div class="text-primary text-center max-w-[400px] px-10 py-6 mx-auto 
										sm:text-left sm:max-w-full sm:w-1/2 sm:h-full sm:pl-10 sm:py-0 sm:m-0 sm:flex sm:items-center 
										md:w-5/12 
										lg:w-[320px] lg:px-0 lg:absolute lg:left-1/4 lg:-ml-52
										xl:-ml-28 
										2xl:ml-6">
					<div>
						<h2 class="hero-title md:-mt-10">{{ s.title }}</h2>
						<div class="hero-intro">{{ s.description }}</div>
						
						<div class="mt-5">
							<nuxt-link
								:to="s.link"
								class="hero-button">{{ global.conozca_mas }}</nuxt-link>
						</div>
					</div>
				</div>
			</div>

		</VueSlickCarousel>
	</div>
</div>
</template>



<style lang="scss" scoped>
.hero-image{ @apply transition-all duration-[400ms] delay-[200ms] opacity-0; }
.hero-title{ @apply text-2xl leading-none top-10 relative transition-all duration-[400ms] delay-[200ms] opacity-0 sm:leading-none md:text-4xl md:leading-none; }
.hero-intro{ @apply leading-tight mt-2 transition-all duration-[400ms] delay-[300ms] top-10 relative opacity-0 sm:text-base sm:leading-tight md:text-lg md:leading-tight; }
.hero-button{ @apply bg-b4 text-white font-medium py-2 px-14 inline-block rounded-full transition-all duration-[400ms] delay-[400ms] top-6 relative opacity-0 hover:bg-primary; }


.slick-active .hero-image{ @apply opacity-100; }
.slick-active .hero-title{ @apply top-0 opacity-100; }
.slick-active .hero-intro{ @apply top-0 opacity-100; }
.slick-active .hero-button{ @apply top-0 opacity-100; }
</style>