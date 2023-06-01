<script setup>
import { useRoute, useRouter } from '@nuxtjs/composition-api'
import 'remixicon/fonts/remixicon.css'
import PorqueElegirnos from '@/components/sections/PorqueElegirnos'

const route = useRoute()
const router = useRouter()
</script>


<template>
	<div class="main-wrapper">
		<topbar/>
		<PageHeader/>
		<nuxt/>

		<div v-if="'por-que-elegirnos' !== route.name && 'contacto' !== route.name">
			<PorqueElegirnos/>
			<div class="bg-gray-100 h-20"></div>
		</div>

		<PageFooter/>
	</div>
</template>
