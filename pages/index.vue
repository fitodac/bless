<script>
export default{
  layout: 'homepage'
}
</script>


<script setup>
import tg from '@/composables/global'
import t from '@/composables/home'

import PorqueElegirnos from '@/components/sections/PorqueElegirnos'
import ContactForm from '@/components/ContactForm'


const buttonBackground = (val) => {
	switch(val){
		case 'b2': return 'bg-b2'; break;
		case 'b3': return 'bg-b3'; break;
		case 'b4': return 'bg-b4'; break;
		case 'b5': return 'bg-b5'; break;
	}
}
</script>




<template>
	<div>
		<HeroSlider/>


		<PorqueElegirnos class="mt-12"/>



		<section class="bg-gray-100">
			<div class="container max-w-3xl px-6 py-20 mx-auto lg:max-w-5xl lg:px-0">

				<div class="md:grid md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 lg:gap-5">
				
					<div 
						v-for="(plan, i) in t.plans" 
						:key="i"
						class="w-[300px] mx-auto relative lg:w-full"
						:class="{'mt-14 md:mt-0': i}">

						<div class="bg-white p-5 pt-[145px] rounded-xl shadow-xl lg:h-full lg:p-3 lg:pt-[125px]">

							<div v-if="plan.img.length" class="w-[260px] h-[160px] -mt-3 flex items-end left-5 -top-1 absolute rounded-xl overflow-hidden lg:w-11/12 lg:h-[140px] lg:left-3">
								<h3 class="bg-gradient-to-t from-black to-transparent text-white text-lg font-bold leading-none w-full px-4 pb-3 pt-10 relative z-20">{{ plan.title }}</h3>
								<nuxt-img 
									quality="60"
									loading="lazy"
									:src="plan.img" 
									:alt="plan.title"
									class="w-full h-full left-0 top-0 absolute object-cover object-position-top z-10 select-none pointer-events-none" 
									sizes="sm:640px md:768px lg:900px xl:1024"/>
							</div>

							<div class="px-3 pt-4 lg:h-full lg:flex lg:flex-col">
								<ul class="lg:flex-1">
									<li 
										v-for="(item, i) in plan.list" 
										:key="i"
										class="text-primary text-sm leading-tight pl-2.5 relative"
										:class="{'mt-1': i}">
										<i class="ri-checkbox-blank-circle-fill text-[5px] leading-none left-0 top-1.5 absolute"></i>
										<span>{{item}}</span>	
									</li>
								</ul>

								<div class="mt-4">
									<nuxt-link 
									:to="plan.button.link"
									class="w-full text-white leading-none font-medium text-center py-3 px-6 block rounded-full transition-all hover:bg-primary-light"
									:class="buttonBackground(plan.button.color)">{{ plan.button.text }}</nuxt-link>
								</div>
							</div>

						</div>

					</div>

				</div>

			</div>
		</section>

		
		<ContactForm/>
		
		
	</div>
</template>




