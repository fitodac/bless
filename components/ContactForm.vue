<script setup>
import { ref, reactive } from '@nuxtjs/composition-api'

import t from '@/composables/global'

const formdata = reactive({
	name: {
		value: '',
		errors: ''
	},
	email: {
		value: '',
		errors: ''
	},
	phone: {
		value: '',
		errors: ''
	},
	message: {
		value: '',
		errors: ''
	},
	acceptance: {
		value: false,
		errors: ''
	}
})

const sending = ref(false)
const sent = ref(false)
</script>



<script>
export default {
	methods: {
		isValidEmail(string){
			const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regex.test(string)
		},

		isValidPhone(string){
			const regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
			return regex.test(string)
		},


		sendmail() {

			this.sending = true
			let err = false

			Object.keys(this.formdata).map(i => { this.formdata[i].errors = '' })

			if( !this.formdata.name.value ){
				this.formdata.name.errors += '<p>Debe incluír su nombre</p>'
				err = true
			}

			if( !this.formdata.email.value ){
				this.formdata.email.errors += '<p>Debe incluír su email</p>'
				err = true
			}

			if( !this.isValidEmail(this.formdata.email.value) ){
				this.formdata.email.errors += '<p>El email debe ser válido</p>'
				err = true
			}

			// if( !this.formdata.phone.value ){
			// 	this.formdata.phone.errors += '<p>Necesitamos su número de teléfono para contactarlo</p>'
			// 	err = true
			// }

			// if( !this.isValidPhone(this.formdata.phone.value) ){
			// 	this.formdata.phone.errors += '<p>El teléfono debe ser válido</p>'
			// 	err = true
			// }

			if( !this.formdata.message.value ){
				this.formdata.message.errors += '<p>El campo de mensaje no puede estar vacío</p>'
				err = true
			}

			if( this.formdata.message.value.length < 100 ){
				this.formdata.message.errors += '<p>El mensaje debe tener como mínimo 100 caracteres</p>'
				err = true
			}

			if( !this.formdata.acceptance.value ){
				this.formdata.acceptance.errors += '<p>Por favor, ántes de continuar, acepte nuestra Política de Privacidad</p>'
				err = true
			}

			if( err ){
				this.sending = false
				return
			}else{

				this.$mail.send({
					from: this.formdata.name.value,
					subject: 'Mensaje desde la web de Bless',
					html: `<p style="font-family:sans-serif;">${this.formdata.message.value}</p>
					<br>
					<br>
					<p style="font-family:sans-serif;"><b>Nombre:</b> ${ this.formdata.name.value }</p>
					<p style="font-family:sans-serif;"><b>Email:</b> ${ this.formdata.email.value }</p>
					<p style="font-family:sans-serif;"><b>Tel / Cel:</b> ${ this.formdata.phone.value }</p>
					`
				})
				.then(() => { 
					this.sending = false
					this.sent = true
				})

			}

		}
	}
}
</script>





<template>
<section class="bg-b5 px-6 pt-10 pb-16">
	<div 
		v-if="!sent" 
		class="container max-w-sm mx-auto relative md:max-w-5xl lg:pt-4">


		<div 
			v-if="sending"
			class="bg-b5 bg-opacity-60 flex items-center justify-center inset-0 absolute z-20">
			<div role="status" class="flex flex-col items-center">
				<svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin" viewBox="0 0 100 101" fill="#3b2e87" xmlns="http://www.w3.org/2000/svg">
					<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
				</svg>
				<span class="text-white text-xs leading-none font-semibold uppercase mt-3 block">Enviando</span>
			</div>
		</div>


		
		<div 
			class="grid gap-10 md:grid-cols-12"
			:class="{'pointer-events-none': sending}">
			<div class="md:col-span-5">
				<h4 class="text-white text-2xl font-medium leading-none text-center select-none md:text-4xl md:text-left md:leading-none md:font-light">{{ t.contact.form_title }}</h4>
			</div>
			

			<form @submit.prevent="sendmail" class="md:col-span-7">
				<div class="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-3">
					<div class="lg:col-span-12">
						<label class="bg-white border border-gray-400 text-primary-light text-sm leading-none w-full flex items-center rounded-full overflow-hidden">
							<span class="text-gray-400 pl-4 cursor-pointer select-none">{{ t.contact.form.name.label }}:</span>
							<input 
								type="text" 
								v-model="formdata.name.value" 
								maxwidth="100"
								class="pl-2 pr-4 py-3 flex-1 focus:outline-none"
								@keyup="formdata.name.errors = ''"/>
							
							<nuxt-img 
								loading="lazy"
								src="icon-required.svg" 
								class="w-4 mr-2 select-none pointer-events-none" 
								alt="información requerida"/>

						</label>

						<div 
							v-if="formdata.name.errors"
							class="field-error"
							v-html="formdata.name.errors"/>
					</div>
					
					<div class="mt-5 lg:col-span-6 lg:mt-0">
						<label class="bg-white border border-gray-400 text-primary-light text-sm leading-none w-full flex items-center rounded-full overflow-hidden">
							<span class="text-gray-400 pl-4 cursor-pointer select-none">{{ t.contact.form.email.label }}:</span>
							<input 
								type="text" 
								v-model="formdata.email.value" 
								maxwidth="100"
								class="pl-2 pr-4 py-3 flex-1 focus:outline-none"
								@keyup="formdata.email.errors = ''"/>
							
							<nuxt-img 
								loading="lazy" 
								src="icon-required.svg" 
								class="w-4 mr-2 select-none pointer-events-none" 
								alt="información requerida"/>
						</label>

						<div 
							v-if="formdata.email.errors"
							class="field-error"
							v-html="formdata.email.errors"/>
					</div>

					<div class="mt-5 lg:col-span-6 lg:mt-0">
						<label class="bg-white border border-gray-400 text-primary-light text-sm leading-none w-full flex items-center rounded-full overflow-hidden">
							<span class="text-gray-400 pl-4 cursor-pointer select-none">{{ t.contact.form.phone.label }}:</span>
							<input 
								type="text" 
								v-model="formdata.phone.value" 
								maxwidth="100"
								class="pl-2 pr-4 py-3 flex-1 focus:outline-none"/>
							
							<nuxt-img 
								loading="lazy" 
								src="icon-required.svg" 
								class="w-6 mr-2 select-none pointer-events-none" 
								alt="información requerida"/>
						</label>

						<div 
							v-if="formdata.phone.errors"
							class="field-error"
							v-html="formdata.phone.errors"/>
					</div>


					<div class="mt-5 lg:col-span-12 lg:mt-0">
						<label class="bg-white border border-gray-400 text-primary-light text-sm leading-none w-full block rounded-xl overflow-hidden">
							<div class="flex justify-between">
								<span class="text-gray-400 pl-4 pt-3 block cursor-pointer select-none">{{ t.contact.form.message.label }}:</span>
								
								<nuxt-img 
									loading="lazy" 
									src="icon-required.svg" 
									class="w-4 mr-2 mt-1.5 select-none" 
									alt="información requerida"/>
							</div>
							<textarea 
								v-model="formdata.message.value"
								rows="6"
								class="w-full px-4 pt-1 pb-4 resize-none lg:h-[80px] focus:outline-none"
								@keyup="formdata.message.errors = ''"/>
						</label>

						<div 
							v-if="formdata.message.value.length < 100"
							class="text-white text-xs font-medium leading-none text-right mt-2">
							<span class="">{{ t.contact.min_length_message_text }}</span>
							<span class="ml-3">{{ formdata.message.value.length }} / 100</span>
						</div>

						<div 
							v-if="formdata.message.errors"
							class="field-error"
							v-html="formdata.message.errors"/>
					</div>


					<div class="mt-5 md:flex md:items-center md:justify-end lg:col-span-12 lg:mt-0">
						<div>
							<div class="flex items-center relative">
								<input 
									type="checkbox"
									v-model="formdata.acceptance.value"
									@change="formdata.acceptance.errors = ''"
									class="invisible"
									id="f-acceptance">

								<span 
									class="bg-white w-4 h-4 inline-block relative cursor-pointer"
									@click="formdata.acceptance.value = !formdata.acceptance.value"></span>
								
								<label 
									class="text-white text-sm font-medium pt-1 ml-3 cursor-pointer select-none"
									for="f-acceptance">
									{{ t.contact.privacy_policy.label }} <nuxt-link to="/politica-de-privacidad" class="underline">{{ t.contact.privacy_policy.policy_text }}</nuxt-link>
								</label>
							</div>

							<div 
								v-if="formdata.acceptance.errors"
								class="field-error"
								v-html="formdata.acceptance.errors"/>
						</div>

						<div class="mt-5 md:ml-6 md:mt-0">
							<button class="bg-b3 text-white leading-none text-center font-medium w-full py-3.5 px-12 rounded-full hover:bg-primary hover:text-white">Enviar</button>
						</div>
					</div>


				</div>
			</form>
		</div>

	</div>



	<div v-else class="text-white leading-tight text-center pt-0 pb-14">
		<nuxt-img 
			loading="lazy"
			src="/icon-sent.svg" 
			class="w-[200px] mx-auto select-none pointer-events-none"
			alt="mensaje enviado"/>

		<div class="text-3xl font-medium leading-none">{{ t.contact.sent.message }}</div>
		<p class="mt-1">{{ t.contact.sent.p1 }}</p>
		<p class="">{{ t.contact.sent.p2 }}</p>
	</div>

</section>
</template>


<style lang="scss" scoped>
.field-error{ 
	@apply text-white text-xs leading-tight font-medium pl-8 mt-1 relative; 

	&::before{
		content: '!';
		@apply bg-red-500 text-white text-xs text-center font-medium w-4 h-4 block left-2 absolute rounded-full;
	}
}

#f-acceptance:checked + span::after{
	content: '';
	background: url('@/static/icon-check.svg') no-repeat center / cover;
	width: 100%;
	height: 100%;
	display: block;
}
</style>