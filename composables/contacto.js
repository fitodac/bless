export default({
	title: 'Contacto',
	title_seo: ', comuníquese con nosotros al 0800 8939',
	intro: '',
	header_image: '/page-header/contacto.webp',
	content: {
		form_title: 'Contamos con el mejor servicio de atención al cliente',
		form: {
			name: {
				label: 'Nombre',
				type: 'text',
				cols: 12
			},
			email: {
				label: 'Email',
				type: 'email',
				cols: 6
			},
			phone: {
				label: 'Teléfono/Celular',
				type: 'text',
				cols: 6
			},
			message: {
				label: 'Mensaje',
				type: 'textarea',
				cols: 12
			}
		},

		min_length_message_text: 'El mensaje debe tener 100 caracteres como mínimo',

		privacy_policy: {
			label: 'He leído y acepto la ',
			policy_text: 'Política de Privacidad'
		},

		button: {
			text: 'Enviar'
		},

		sent: {
			message: 'Hemos recibido su mensaje',
			p1: 'y le responderemos a la brevedad posible',
			p2: 'Muchas gracias por contactarnos'
		},
		
		address_1: {
			image: {
				src: '/maps/map1.webp',
				alt: 'Oficinas administrativas'
			},
			desc: 'Oficinas Administrativas',
			title: 'Torre Independencia',
			str: 'Andes 1365, Of. 103'
		},
		address_2: {
			image: {
				src: '/maps/map2.webp',
				alt: 'Oficinas comerciales'
			},
			desc: 'Oficinas Comerciales',
			title: '',
			str: 'Convención 1343, Of. 202'
		}
	}
})