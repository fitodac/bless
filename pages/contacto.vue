<script setup>
import { ref, reactive, computed } from '@nuxtjs/composition-api'

import t from '@/composables/contacto'
import PageHead from '@/components/sections/PageHead'
import PageContent from '@/components/sections/PageContent'
import ContactForm from '@/components/ContactForm'

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
	head() {
		return {
			title: 'Comuníquese con nosotros al 0800 8939',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Oficinas Administrativas: Torre Independencia, Andes 1365, Of. 103. Oficinas Comerciales: Convención 1343, Of. 202'
				}
			],
			link: [
				{
					rel: 'canonical',
					href: 'https://bless.com.uy/contacto'
				}
			]
		}
  },


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

			if( !this.formdata.phone.value ){
				this.formdata.phone.errors += '<p>Necesitamos su número de teléfono para contactarlo</p>'
				err = true
			}

			if( !this.isValidPhone(this.formdata.phone.value) ){
				this.formdata.phone.errors += '<p>El teléfono debe ser válido</p>'
				err = true
			}

			if( !this.formdata.message.value ){
				this.formdata.message.errors += '<p>El campo de mensaje no puede estar vacío</p>'
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
					subject: 'Mensaje desde la wen de Bless',
					text: `<p>${this.formdata.message.value}</p>
					<br>
					<br>
					<p>Nombre: ${ this.formdata.name.value }</p>
					<p>Email: ${ this.formdata.email.value }</p>
					<p>Tel / Cel: ${ this.formdata.phone.value }</p>
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
<div>
	<PageHeader/>

	<PageHead 
		:title="t.title" 
		:intro="t.intro"
		:image="t.header_image"
		:title_seo="t.title_seo"/>

	<PageContent>

		<div class="grid gap-5 md:w-[500px] md:mx-auto lg:grid-cols-12 lg:gap-14 lg:w-full">
			<div class="col-span-8">
				<nuxt-img 
					quality="60"
					loading="lazy"
					:src="t.content.address_1.image.src" 
					:alt="t.content.address_1.image.alt" 
					class="w-full object-cover rounded-xl shadow-lg select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>
			</div>

			<div class="col-span-4 flex items-center">
				<div>
					<div class="text-primary text-xl font-semibold leading-tight md:mt-2">{{ t.content.address_1.desc }}</div>
					<div class="text-primary text-lg font-medium leading-tight">{{ t.content.address_1.title }}</div>
					<div class="text-primary leading-tight">{{ t.content.address_1.str }}</div>
				</div>
			</div>
		</div>

		<div class="grid gap-5 mt-10 md:w-[500px] md:mx-auto lg:grid-cols-12 lg:gap-14 lg:w-full lg:mt-16">
			<div class="col-span-4 flex items-center order-2 md:order-0">
				<div>
					<div class="text-primary text-xl font-semibold leading-tight md:mt-2">{{ t.content.address_2.desc }}</div>
					<div class="text-primary text-lg font-medium leading-tight">{{ t.content.address_2.title }}</div>
					<div class="text-primary leading-tight">{{ t.content.address_2.str }}</div>
				</div>
			</div>
			
			<div class="col-span-8 md:order-2">
				<nuxt-img 
					quality="60"
					loading="lazy"
					:src="t.content.address_2.image.src" 
					:alt="t.content.address_2.image.alt" 
					class="w-full object-cover rounded-xl shadow-lg select-none pointer-events-none"
					sizes="sm:640px md:768px lg:900px xl:1024"/>
			</div>
		</div>

	</PageContent>


	<ContactForm/>


</div>
</template>