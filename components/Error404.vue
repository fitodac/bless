<script setup>
import tg from '@/composables/global'
</script>


<template>
<div class="content pt-52 pb-20 mx-auto">
	<div class="text-center">
		<div class="text-b2 text-xs font-extrabold leading-none">ERROR {{ tg.error.err404.code }}</div>
		<h1 class="text-primary text-4xl leading-none font-medium mt-1">{{ tg.error.err404.title }}</h1>
		<div class="text-primary font-medium mt-4">{{ tg.error.err404.message }}</div>

		<div class="py-10">
			<nuxt-link 
				to="/"
				class="bg-b4 text-white text-sm leading-none font-medium px-10 py-3 rounded-full transition-all hover:bg-b5">{{ tg.error.cta_text }}</nuxt-link>
		</div>
	</div>
</div>
</template>