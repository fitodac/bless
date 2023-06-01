<script setup>
import tg from '@/composables/global'
import { computed, useRoute } from '@nuxtjs/composition-api'


const route = useRoute()


const props = defineProps({
	type: {
		type: String,
		default: 'header'
	}
})

console.log('route', route.value.name, route.value.hash)

const url_with_hash = computed(() => {
	if( route.value.name === 'planes-y-convenios' && route.value.hash ){ return true }
})
</script>



<template>
<div>
	<nav :class="`navbar-${type}`">
		<ul :class="{'bg-white': (type === 'footer')}">
			<li 
				class="nav-item"
				:class="{'order-3': (type === 'footer')}">
				<nuxt-link to="/" class="nav-link">
					<i v-if="type === 'footer'" class="ri-home-5-line"></i>
					<span>{{ tg.navbar.index }}</span>
				</nuxt-link>
			</li>

			<li 
				class="nav-item"
				:class="{'border-none': (type === 'footer')}">
				<nuxt-link to="/empresa" class="nav-link">
					<i v-if="type === 'footer'" class="ri-account-pin-box-line"></i>
					<span>{{ tg.navbar.company }}</span>
				</nuxt-link>
			</li>

			<li 
				class="nav-item"
				:class="{'': (type === 'footer')}">
				<nuxt-link to="/servicios" class="nav-link">
					<i v-if="type === 'footer'" class="ri-hand-heart-line"></i>
					<span>{{ tg.navbar.services }}</span>
				</nuxt-link>
			</li>

			<li 
				class="nav-item"
				:class="{'order-4': (type === 'footer')}">
				<nuxt-link 
					to="/planes-y-convenios" 
					class="nav-link"
					:class="{'nuxt-link-exact-active': url_with_hash}">
					<i v-if="type === 'footer'" class="ri-star-line"></i>
					<span>{{ tg.navbar.plans }}</span>
				</nuxt-link>
			</li>

			<li 
				v-if="type === 'header'"
				class="nav-item">
				<nuxt-link to="/por-que-elegirnos" class="nav-link">
					<span>{{ tg.navbar.why_choose_us }}</span>
				</nuxt-link>
			</li>

			<li 
				class="nav-item"
				:class="{'order-5': (type === 'footer')}">
				<nuxt-link to="/contacto" class="nav-link">
					<i v-if="type === 'footer'" class="ri-mail-check-line"></i>
					<span>{{ tg.navbar.contact }}</span>
				</nuxt-link>
			</li>
		</ul>
	</nav>


	<div
		v-if="type === 'header'"
		class="text-white text-sm px-5 mt-3 md:hidden">

		<div>
			<i class="ri-phone-fill"></i>
			<span>{{ tg.topbar.left }}</span>
		</div>
		
		<div class="mt-1">
			<i class="ri-phone-fill"></i>
			<span>{{ tg.topbar.right }}</span>
		</div>

	</div>
</div>
</template>





<style lang="css" scoped>
.navbar-header{ @apply px-3 lg:px-6; }
.navbar-header ul{ @apply md:flex md:justify-between lg:justify-end; }
.navbar-header .nav-item{ @apply text-white font-medium tracking-wide px-3 py-2 select-none sm:font-medium md:py-3 lg:inline-flex lg:items-center lg:whitespace-nowrap lg:py-0 lg:text-sm xl:max-w-max xl:px-5; }
.navbar-header .nav-link{ @apply inline-block leading-tight transition-all hover:text-b2; }
.navbar-header .nav-link.nuxt-link-exact-active{ @apply text-primary; }


.navbar-footer{ @apply h-full; }
.navbar-footer ul{ @apply w-full h-full flex; }
.navbar-footer .nav-item{ @apply border-l border-gray-100 text-xs leading-none text-center flex-1; }
.navbar-footer .nav-link{ @apply bg-white h-full px-4 py-3 flex flex-col justify-center; }
.navbar-footer .nav-link.nuxt-link-exact-active{ @apply bg-b5 text-white; }
.navbar-footer .nav-link [class^=ri-]{ @apply text-xl leading-none; }
.navbar-footer .nav-link span{ @apply block; }
</style>