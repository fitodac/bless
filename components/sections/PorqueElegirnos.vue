<template>
	<section class="relative overflow-hidden">
		<div class="container text-center px-6 mx-auto relative z-20">
			<nuxt-link to="/por-que-elegirnos" class="inline-block">
				<nuxt-img 
					quality="60"
					loading="lazy"
					src="banner-elegirnos-sm.png" 
					alt="¿Por qué elegirnos?" 
					class="w-[270px] mx-auto select-none pointer-events-none md:hidden"/>
				
				<nuxt-img 
					quality="60"
					loading="lazy"
					src="banner-elegirnos-lg.png" 
					alt="Porqué elegirnos" 
					class="w-[700px] mx-auto hidden select-none pointer-events-none
									md:block 
									lg:w-[800px]"/>
			</nuxt-link>
		</div>

		<div class="bg-oval bg-gray-100 w-full top-[100px] inset-x-0 top-[300px] bottom-0 absolute z-10"></div>
	</section>
</template>


<style lang="scss" scoped>
.bg-oval{
	&::before{
		content: '';
		@apply bg-gray-100 absolute;
		width: 120%;
		height: 100px;
		left: -10%;
		top: -50px;
		border-radius: 100%;
	}
}
</style>