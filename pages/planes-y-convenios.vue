<script>
export default {
  head() {
		return {
			title: 'Bless tiene un plan pensado para cada necesidad',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Conozca nuestros planes Dos Generaciones, Tres Generaciones, Afiliación Individual, Grupo Afinidad o nuestros Convenios'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/planes-y-convenios'
				}
			]
		}
  }
}
</script>



<script setup>
import { ref, reactive, computed, useRoute, useRouter, onMounted } from '@nuxtjs/composition-api'

import t from '@/composables/planes-y-convenios'
import convenios from '@/composables/convenios'

import PageHead from '@/components/sections/PageHead'
import PageContent from '@/components/sections/PageContent'
import Conventions from '@/components/Conventions'


const route = useRoute()
const router = useRouter()
const current_tab = ref(0)


const tabnav_class = (key) => {
	let resp = 'text-sm leading-none font-medium px-4 py-4 relative transition-all cursor-pointer select-none hover:bg-b3 hover:text-white'

	if( current_tab.value === key ){
		resp = resp + ' bg-b3 text-white rounded-r-lg rounded-l-3xl'
	}else{
		resp = resp + ' bg-gray-200 text-primary mr-5 rounded-full'
	}
	
	return resp
}


const tab_navigation = (idx, new_hash) => {
	current_tab.value = idx
	if( new_hash ) router.replace({ hash: new_hash})
}


const plan = computed(() => { return {...t.plans[current_tab.value]}})

onMounted(() => {
	t.plans.map((item, idx) => {
		if( route.value.hash === `#${item.key}` ) current_tab.value = idx
	})
})
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

	<div class="h-[130px] mt-[-110px] relative">
		<div v-for="(p, idx) in t.plans" :key="idx" class="w-full h-[1px] top-0 absolute">
			<div :id="p.key" class=" "></div>
		</div>
	</div>


	<section class="grid lg:grid-cols-12">

		<!-- MOBILE -->
		<div 
			v-if="!route.hash"
			class="col-span-12 grid grid-cols-2 gap-6 lg:hidden">
			<div 
				v-for="(p, idx) in t.plans" 
				:key="idx"
				class="h-48 relative rounded-xl cursor-pointer overflow-hidden"
				@click="tab_navigation(idx, p.key)">

				<nuxt-img 
					quality="60"
					loading="lazy"
					:src="p.image.src" 
					:alt="p.image.alt" 
					class="w-full object-cover select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>

				<h2 
					class="bg-gradient-to-t from-black to-transparent text-white text-lg leading-none font-medium px-3 pt-10 pb-3 left-0 bottom-0 right-0 absolute opacity-70">
					{{ p.title }}
				</h2>

			</div>
		</div>
		<!-- / MOBILE -->
		

		<div class="col-span-3 hidden relative lg:block">
			<ul>
				<li
				v-for="(p, idx) in t.plans"
				:key="idx"
				:class="[tabnav_class(idx), {'mt-2': idx}]"
				@click="tab_navigation(idx, p.key)">
					<span>{{ p.title }}</span>
					<span 
						v-if="current_tab === idx"
						class="bg-b3 w-5 h-5 -mt-0.5 -right-1.5 absolute rotate-45 rounded"></span>
				</li>
			</ul>
		</div>

		
		<div 
			class="col-span-9 relative"
			:class="{'hidden lg:block': !route.hash}">
			<div class="pb-20 lg:pl-6 xl:pl-14">
				<nuxt-img 
					quality="60"
					loading="lazy"
					:src="plan.image.src" 
					:alt="plan.image.alt" 
					class="w-full h-[400px] object-cover rounded-xl select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>

				<h3 
					class="text-primary text-3xl leading-none font-semibold"
					:class="{'mt-4': plan.image.src}">{{ plan.title }}</h3>

				<div class="mt-3">
					<p v-for="(p, i) in plan.content" :key="i" :class="{'mt-5': i}">{{ p }}</p>
				</div>

				<!--
				<div 
					v-if="plan.features.length" 
					class="grid grid-cols-4 mt-10">
					<div 
						v-for="(f, i) in plan.features"
						:key="i"
						class="border-gray-100 text-gray-500 text-sm leading-tight text-center font-medium px-3 py-5"
						:class="{'border-l': i}">

						<nuxt-img 
							quality="60"
							loading="lazy"
							v-if="f.icon" 
							:src="f.icon" 
							:alt="`icono: ${f.title}`"
							class="w-[70px] mx-auto select-none pointer-events-none"/>
						
						<div :class="{'mt-2': f.icon}">{{ f.title }}</div>
					</div>
				</div>
				-->
			
			
				<Conventions
					v-if="'convenios' === plan.key"
					class="mt-10"/>


				<div class="text-center mt-20 lg:hidden">
					<nuxt-link 
						to="planes-y-convenios"
						class="bg-primary text-white leading-none font-medium px-16 py-3 rounded-full">Ver otros convenios</nuxt-link>
				</div>

			</div>
		</div>

	</section>
		
	</PageContent>

</div>
</template>