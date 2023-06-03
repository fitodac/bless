export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bless',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Bless, con experiencia en el rubro, un grupo selecto de profesionales en la materia decidieron unirse para conformar el mejor servicio de acompañantes de enfermos del país. Con una verdadera vocación de servicio en todos los integrantes, comenzando por los acompañantes que se seleccionan y capacitan unicamente entre enfermeros y Auxiliares de enfermería con título habilitado por el Ministerio de Salúd Pública.' },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    htmlAttrs: {
      lang: 'es'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{ rel: 'canonical', href: 'https://bless.com.uy'}
    ],
		bodyAttrs: {
			class: 'antialiased'
		}
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
		'@/assets/scss/main.scss',
  ],

	googleFonts: {
		families: {
			Roboto: [300, 400, 500, 700]
		}
	},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		// '~/plugins/vue-image.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
		'@nuxtjs/composition-api/module',
		'@nuxt/image',
		'@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
		'@nuxtjs/sitemap',
		['nuxt-mail', {
			
			message: [
				// {to: 'info@bless.com.uy'},
				// {to: 'info@acompania.com.uy'},
				// {to: 'correobless@gmail.com'}
				{to: 'fitodac@gmail.com'}
			],
			smtp: {
				host: 'localhost',
				port: 465,
				auth: {
					user: 'contacto@bless.com.uy',
					pass: '6j$CkQr[LjZc'
				},
			},
		}],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

	tailwindcss: {
		configPath: 'tailwind.config.js',
    exposeConfig: true
  },

	target: 'static',

	sitemap: {
		hostname: 'https://bless.com.uy',
    gzip: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
    routes: [
      '/',
      '/empresa',
      '/servicios',
      '/planes-y-convenios',
      '/por-que-elegirnos',
      '/contacto',
			'/convenios/direccion-nacional-de-aduanas',
			'/convenios/ministerio-de-industria',
			'/convenios/ministerio-de-relaciones-exteriores',
			'/convenios/ministerio-de-turismo',
			'/convenios/banco-de-prevision-social',
			'/convenios/presidencia-de-la-republica',
			'/convenios/opp',
			'/convenios/onsc',
			'/convenios/ministerio-de-economia',
			'/convenios/ministerio-de-transporte-y-obras-publicas',
			'/convenios/ministerio-de-educacion-y-cultura',
			'/convenios/ministerio-de-trabajo-y-seguridad-social',
			'/convenios/ministerio-del-interior',
			'/convenios/ministerio-de-ganaderia-agricultura-y-pesca',
			'/convenios/ministerio-de-desarrollo-social',
			'/convenios/banco-de-seguros-del-estado',
			'/convenios/banco-central-del-uruguay',
			'/convenios/poder-judicial',
			'/convenios/antel',
			'/convenios/ute',
			'/convenios/ose',
			'/convenios/ancap',
			'/convenios/diario-el-pais',
			'/convenios/isusa',
			'/convenios/copsa',
			'/convenios/ministerio-de-salud-publica',
			'/convenios/audavi',
			'/convenios/asociacion-de-asistentes-sociales',
			'/convenios/circulo-de-periodistas-deportivos',
			'/convenios/cooperativa-magisterial',
			'/convenios/club-nacional-de-football',
			'/convenios/asociacion-general-de-autores',
			'/convenios/asociacion-de-magistrados-del-uruguay',
			'/convenios/fucvam',
			'/convenios/fuecys',
			'/politica-de-privacidad'
    ]
	}
}