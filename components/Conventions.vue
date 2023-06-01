<script setup>
import convenios from '@/composables/convenios'

defineProps({
	content: Object
})
</script>


<template>
<div>
	<div
		v-for="(list, i) in convenios.companies"
		:key="i"
		:class="{'mt-8': i}">
		
		<h4 class="text-primary font-medium leading-none">{{ list.title }}</h4>

		<div 
			v-if="list.items.length" 
			class="grid grid-cols-5 gap-x-4 gap-y-3 mt-3">
			<nuxt-link 
				v-for="(item, idx) in list.items"
				:key="idx"
				class="bg-gray-50 text-xs font-medium leading-none px-4 py-3 flex items-center justify-center transition rounded-lg cursor-pointer hover:bg-b4 hover:text-white hover:shadow-lg"
				:to="`/convenios/${item.link}`">
				<span class="text-center">{{ item.title }}</span>
			</nuxt-link>
		</div>
	</div>
</div>
</template>