<template>
<div class="w-full leading-none mx-auto pt-1.5 top-0 absolute hidden z-50 md:block">
	<div class="container max-w-6xl text-right mx-auto">
		<div class="text-white text-xs inline-flex leading-none font-medium align-top">
			
			<div class="inline-flex items-center">
				<i class="ri-phone-fill"></i>
				<span class="ml-1">{{ tg.topbar.left }}</span>
			</div>
			
			<div class="inline-flex items-center ml-6 pr-10 lg:pr-5">
				<i class="ri-phone-fill"></i>
				<span class="ml-1">{{ tg.topbar.right }}</span>
			</div>

		</div>
	</div>
</div>
</template>


<script setup>
import tg from '@/composables/global'
</script>