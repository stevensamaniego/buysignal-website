/* ============================================
   BuySignal — Language Toggle (EN / ES)
   ============================================ */
(function () {
  'use strict';

  var translations = {
    es: {
      // Nav
      'nav_sell': 'Vender en Amazon',
      'nav_features': 'Funciones',
      'nav_compare': 'Comparar',
      'nav_pricing': 'Precios',
      'nav_faq': 'Preguntas',
      'nav_cta': 'Descargar App',

      // Hero
      'hero_badge': 'Próximamente en iOS',
      'hero_h1_1': 'Deja de adivinar.',
      'hero_h1_2': 'Obtén la señal.',
      'hero_subtitle': 'El escáner de productos más inteligente para vendedores de Amazon FBA — ya sea que escanees productos en tiendas o evalúes catálogos de mayoreo. Análisis con IA, herramientas de sourcing e inteligencia de mercado en una sola app.',
      'hero_subtitle_bold': 'Datos de mercado de Keepa incluidos — sin suscripción adicional.',
      'hero_btn_download': 'Descargar en App Store',
      'hero_btn_features': 'Descubre Cómo Funciona',

      // Phone mockup
      'phone_ready': 'Listo para Escanear',
      'phone_profit': 'Ganancia',
      'phone_break_even': 'Punto de Equilibrio',
      'phone_amazon_seller': 'Vendedor Amazon',
      'phone_not_on_listing': 'No está en el listado',
      'phone_90day': 'Tendencia 90 Días',
      'phone_stable': 'Estable',
      'phone_fba_sellers': 'Vendedores FBA',

      // Problem section
      'problem_label': 'El Problema',
      'problem_title': '¿Sigues usando SellerAmp?',
      'problem_title_sub': '¿Cansado de pagar $50/mes por una app que se congela?',
      'problem_subtitle': 'La mayoría de las herramientas de escaneo FBA fueron creadas hace años como wrappers web con interfaces sobrecargadas. Mereces algo mejor.',
      'problem_crashes_h': 'Crashes Constantes',
      'problem_crashes_p': 'Las apps web-wrapper se congelan a media búsqueda. Pierdes ofertas mientras miras un spinner de carga.',
      'problem_slow_h': 'Dolorosamente Lento',
      'problem_slow_p': 'Cada segundo cuenta — ya sea escaneando en tienda o revisando una lista de precios de mayoreo. Apps lentas significan ofertas perdidas.',
      'problem_overpriced_h': 'Demasiado Caro',
      'problem_overpriced_p': '¿$50–$70/mes por escaneo básico? Eso se come tus márgenes antes de comprar tu primer producto.',
      'problem_missing_h': 'Datos Críticos Faltantes',
      'problem_missing_p': 'Sin costo de punto de equilibrio. Sin alertas de vendedor Amazon. Estás a ciegas en cada escaneo.',
      'problem_hidden_h': 'Suscripciones Ocultas',
      'problem_hidden_p': 'Pagas $50/mes por la app, y luego descubres que necesitas Keepa ($21+/mes extra) solo para datos de ventas. El costo real es $70+/mes.',

      // Features section
      'features_label': 'Funciones',
      'features_title_1': 'Todo lo que necesitas.',
      'features_title_2': 'Nada que no.',
      'features_subtitle': 'Creado desde cero por vendedores FBA que estaban cansados de las mismas herramientas rotas que todos usan.',
      'feat_ai_analysis_h': 'Análisis IA ✨',
      'feat_ai_analysis_p': 'Cada escaneo incluye un resumen de mercado impulsado por IA — tendencias de demanda, panorama competitivo, riesgos de precio y consejos prácticos. Como tener un asesor experto en tu bolsillo.',
      'feat_ai_sourcing_h': 'Sourcing Mayoreo IA ✨',
      'feat_ai_sourcing_p': '¿Encontraste un producto ganador? Toca una vez y nuestra IA encuentra distribuidores mayoristas verificados — con sitios web, pasos de solicitud y pedidos mínimos. Sin más horas buscando en Google.',
      'feat_deal_scoring_h': 'Puntuación Avanzada',
      'feat_deal_scoring_p': 'Nuestro algoritmo propietario califica cada producto al instante — ganancia, ROI, tarifas, competencia y demanda en un veredicto claro de comprar/pasar. No es solo una calculadora — es un motor de decisiones.',
      'feat_deal_feed_h': 'Feed de Ofertas Curadas',
      'feat_deal_feed_p': 'No solo escanees — descubre. BuySignal muestra oportunidades rentables entre miles de productos — filtradas a lo que realmente puedes vender.',
      'feat_image_h': 'Reconocimiento de Imagen',
      'feat_image_p': '¿Sin código de barras? Sin problema. Toma una foto de cualquier producto y la IA de BuySignal lo identifica en segundos. Funciona con etiquetas, empaques e incluso vistas parciales.',
      'feat_charts_h': 'Analíticas Multi-Gráfica',
      'feat_charts_p': 'Tres gráficas interactivas por producto — historial de precios, tendencias de ranking de ventas y competencia de vendedores. Desliza entre ellas para detectar patrones al instante.',
      'feat_keepa_h': 'Datos Keepa Integrados',
      'feat_keepa_p': 'Los mismos datos de mercado confiables de Keepa en los que confían los mejores vendedores — historial de ranking de ventas, tendencias de precios, conteo de vendedores, seguimiento de competencia, estimados de ventas mensuales, datos de reseñas y señales de demanda — todo integrado directamente en BuySignal. Sin suscripción adicional a Keepa. Sin claves API. Sin configuración. Solo datos precisos en los que puedes confiar, incluidos en todos los planes.',

      // Features more
      'features_more_title': 'Además todo lo que esperarías',
      'feat_more_breakeven': 'Calculadora de punto de equilibrio',
      'feat_more_amazon_detect': 'Detección de vendedor Amazon',
      'feat_more_90day': 'Inteligencia de precios 90 días',
      'feat_more_roi': 'ROI objetivo ajustable con recálculo en vivo',
      'feat_more_competition': 'Seguimiento de tendencias de competencia',
      'feat_more_native': 'App iPhone real — rápida y responsiva',
      'feat_more_offline': 'Productos guardados sin conexión',
      'feat_more_csv': 'Exportación CSV',
      'feat_more_realtime': 'Inteligencia de mercado en tiempo real',
      'feat_more_search': 'Enlaces rápidos a Google y Amazon',

      // Comparison
      'comp_label': 'Comparación',
      'comp_title_1': 'BuySignal vs ',
      'comp_title_2': 'La Competencia',
      'comp_subtitle': 'Mira cómo BuySignal se compara con las herramientas por las que probablemente estás pagando de más.',
      'comp_feature': 'Función',
      'comp_breakeven': 'Costo de punto de equilibrio',
      'comp_amazon_detect': 'Detección de vendedor Amazon',
      'comp_price_history': 'Historial de precios 90 días',
      'comp_competition': 'Tendencias de competencia',
      'comp_native': 'App iOS nativa',
      'comp_offline': 'Productos guardados sin conexión',
      'comp_csv': 'Exportación CSV',
      'comp_free_tier': 'Plan gratuito',
      'comp_deal_feed': 'Feed de ofertas curadas',
      'comp_image_recog': 'Reconocimiento de imagen',
      'comp_ai_market': 'Análisis de mercado IA',
      'comp_ai_sourcing': 'Sourcing mayoreo IA',
      'comp_multi_chart': 'Analíticas multi-gráfica',
      'comp_keepa': 'Datos Keepa confiables',
      'comp_monthly': 'Precio mensual',
      'comp_real_cost': 'Costo real (con Keepa)',

      // Pricing
      'pricing_label': 'Precios',
      'pricing_title': 'Precios simples y honestos.',
      'pricing_subtitle': 'Todos los planes incluyen datos de mercado Keepa — sin suscripción adicional. Empieza gratis. Mejora cuando quieras. Cancela cuando quieras.',
      'pricing_monthly': 'Mensual',
      'pricing_annual': 'Anual',
      'pricing_save': 'Ahorra ~17%',
      'pricing_popular': 'Más Popular',
      'pricing_forever': 'para siempre',
      'pricing_per_month': 'por mes',
      'pricing_per_year': 'por año',
      'pricing_free_5scans': '5 escaneos por día',
      'pricing_basic_scoring': 'Puntuación básica de ofertas',
      'pricing_10saved': '10 productos guardados',
      'pricing_breakeven': 'Costo punto de equilibrio',
      'pricing_75scans': '75 escaneos por día',
      'pricing_adv_scoring': 'Algoritmo avanzado de puntuación',
      'pricing_unlimited_saved': 'Productos guardados ilimitados',
      'pricing_90day': 'Inteligencia de precios 90 días',
      'pricing_competition': 'Tendencias de competencia',
      'pricing_amazon_detect': 'Detección de vendedor Amazon',
      'pricing_unlimited_scans': 'Escaneos ilimitados',
      'pricing_everything_scout': 'Todo en Scout',
      'pricing_csv': 'Exportación CSV',
      'pricing_priority': 'Soporte prioritario',
      'pricing_early_access': 'Acceso anticipado a nuevas funciones',
      'pricing_btn_free': 'Empezar Gratis',
      'pricing_btn_trial': 'Prueba Gratuita',

      // Early access
      'early_label': 'Próximamente',
      'early_title_1': 'Sé el primero en ',
      'early_title_2': 'obtener la señal.',
      'early_subtitle': 'BuySignal se lanza pronto en la App Store. Únete a la lista de espera y te notificaremos en cuanto esté disponible — además, los primeros suscriptores obtienen su primer mes gratis.',
      'early_btn': 'Unirse a la Lista',
      'early_note': 'Sin spam. Solo una notificación de lanzamiento y tu código de mes gratis.',
      'early_stat_products': 'Productos Analizados y Creciendo',
      'early_stat_deals': 'Ofertas Encontradas Diario',
      'early_stat_speed': 'Velocidad de Escaneo',

      // New to selling
      'new_label': '¿Nuevo en Amazon?',
      'new_title_1': 'Empieza tu negocio FBA',
      'new_title_2': 'de la manera correcta.',
      'new_subtitle': 'Ya sea que tengas curiosidad sobre vender en línea o estés listo para lanzar tu primer producto, estos recursos te ayudarán a comenzar a vender en Amazon — y BuySignal estará aquí cuando estés listo para comprar más inteligentemente y escalar más rápido.',
      'new_become_h': 'Conviértete en Vendedor Amazon',
      'new_become_p': 'Crea tu cuenta de Amazon Seller Central. Elige entre el plan Individual ($0.99/venta) o Profesional ($39.99/mes).',
      'new_become_link': 'Visita sell.amazon.com →',
      'new_fba_h': 'Guía FBA para Principiantes',
      'new_fba_p': 'Fulfillment by Amazon — tú consigues productos, Amazon almacena, envía y maneja servicio al cliente. La forma más popular de vender.',
      'new_fba_link': 'Aprende sobre FBA →',
      'new_fbm_h': 'Guía FBM para Principiantes',
      'new_fbm_p': 'Fulfilled by Merchant — tú manejas almacenamiento y envíos. Tarifas más bajas, más control, ideal para artículos grandes o únicos.',
      'new_fbm_link': 'Aprende sobre FBM →',
      'new_university_h': 'Amazon Seller University',
      'new_university_p': 'Entrenamiento oficial gratuito de Amazon en video — cientos de tutoriales sobre configuración de cuenta, envíos FBA, listados de productos y crecimiento de tu negocio.',
      'new_university_link': 'Ver en YouTube →',

      // FAQ
      'faq_label': 'Preguntas',
      'faq_title': 'Preguntas frecuentes',
      'faq_subtitle': 'Todo lo que necesitas saber sobre BuySignal.',
      'faq_q1': '¿Necesito una cuenta de vendedor en Amazon?',
      'faq_a1': 'Sí. BuySignal requiere una cuenta de vendedor profesional de Amazon para acceder a datos de productos a través de la API de Amazon Selling Partner. Este es el mismo requisito que cualquier otra herramienta de escaneo FBA. ¿Aún no tienes una? <a href="#start-selling" style="color: var(--accent-green);">Consulta nuestra sección de inicio</a> para configurar tu cuenta — solo toma unos minutos.',
      'faq_q2': '¿Necesito una suscripción a Keepa?',
      'faq_a2': '<strong>No.</strong> BuySignal funciona con los mismos datos confiables de Keepa en los que confían los mejores vendedores de Amazon — pero los incluimos en todos los planes. Historial completo de ranking de ventas, tendencias de precios, conteo de vendedores y datos de demanda listos para usar. Sin suscripción adicional a Keepa. Sin tarifas extra. Sin claves API que configurar. Solo escanea y listo.',
      'faq_q3': '¿Cómo es BuySignal diferente de SellerAmp?',
      'faq_a3': 'BuySignal está construido desde cero como una app iPhone real — no una página web lenta disfrazada. Es más rápido, más confiable y significativamente más barato que la competencia. Incluye funciones de IA que ningún otro escáner tiene: análisis de mercado inteligente, sourcing mayoreo con IA y analíticas multi-gráfica — todo con datos de mercado confiables de Keepa. Desde $0/mes con plan gratuito.',
      'faq_q4': '¿Mis datos están seguros?',
      'faq_a4': 'Absolutamente. Tu conexión con Amazon está asegurada vía OAuth — nunca vemos ni almacenamos tu contraseña de Amazon. Todos los tokens API están encriptados con AES-256 en nuestros servidores. El historial de escaneos y productos guardados se almacenan localmente en tu dispositivo. Tomamos la seguridad en serio — tus datos son tuyos.',
      'faq_q5': '¿Puedo cancelar en cualquier momento?',
      'faq_a5': 'Sí. Las suscripciones de BuySignal se manejan completamente a través de la App Store. Puedes cancelar, mejorar o bajar de plan en cualquier momento desde los ajustes de tu Apple ID. Sin obstáculos, sin llamadas de "retención", sin trucos.',
      'faq_q6': '¿Funciona sin conexión?',
      'faq_a6': 'Tus productos guardados se pueden ver sin conexión — así puedes revisar escaneos anteriores en cualquier momento. Sin embargo, escanear nuevos productos requiere conexión a internet para obtener los últimos precios, rankings de ventas y datos de vendedores de nuestros servidores.',

      // Final CTA
      'cta_title': '¿Listo para comprar más inteligente?',
      'cta_subtitle': 'Retail o mayoreo — deja de pagar de más por herramientas que no cumplen. Empieza a obtener la señal.',
      'cta_btn': 'Descargar en App Store',

      // Footer
      'footer_tagline': 'El escáner de códigos de barras más inteligente para vendedores de Amazon FBA. Creado por vendedores, para vendedores.',
      'footer_product': 'Producto',
      'footer_legal': 'Legal',
      'footer_support': 'Soporte',
      'footer_contact': 'Contáctanos',
      'footer_privacy': 'Política de Privacidad',
      'footer_terms': 'Términos de Servicio',
      'footer_rights': '© 2026 XTS Supply LLC. Todos los derechos reservados.',
      'footer_disclaimer': 'BuySignal no está afiliado con Amazon.com, Inc. ni con ninguna de sus subsidiarias.',
      'footer_keepa': 'Datos de mercado proporcionados por Keepa',

      // Settings disclaimer in about
      'about_disclaimer': 'BuySignal no está afiliado con, respaldado por, ni patrocinado por Amazon.com, Inc.',
    }
  };

  // Get saved language or default to 'en'
  var currentLang = localStorage.getItem('buysignal_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('buysignal_lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (lang === 'en') {
        // Restore original English text
        var original = el.getAttribute('data-i18n-en');
        if (original !== null) {
          if (el.getAttribute('data-i18n-html') === 'true') {
            el.innerHTML = original;
          } else {
            el.textContent = original;
          }
        }
      } else if (translations[lang] && translations[lang][key]) {
        // Save original English text on first switch
        if (!el.hasAttribute('data-i18n-en')) {
          el.setAttribute('data-i18n-en', el.getAttribute('data-i18n-html') === 'true' ? el.innerHTML : el.textContent);
        }
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update toggle button
    var btn = document.getElementById('langToggle');
    if (btn) {
      var globeSvg = '<svg class="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
      btn.innerHTML = lang === 'en' ? globeSvg + 'Español' : globeSvg + 'English';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
    }

    // Update billing toggle text
    document.querySelectorAll('.period-text').forEach(function (el) {
      el.textContent = lang === 'es'
        ? (document.getElementById('billingToggle')?.classList.contains('active') ? 'por año' : 'por mes')
        : (document.getElementById('billingToggle')?.classList.contains('active') ? 'per year' : 'per month');
    });
  }

  // Create and inject the toggle button
  function injectToggle() {
    var navInner = document.querySelector('.nav-inner');
    if (!navInner) return;

    var btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.className = 'lang-toggle';
    btn.innerHTML = currentLang === 'en'
      ? '<svg class="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>Español'
      : '<svg class="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>English';
    btn.setAttribute('aria-label', currentLang === 'en' ? 'Cambiar a Español' : 'Switch to English');
    btn.addEventListener('click', function () {
      applyLanguage(currentLang === 'en' ? 'es' : 'en');
    });

    // Insert before the hamburger toggle
    var navToggle = document.getElementById('navToggle');
    if (navToggle) {
      navInner.insertBefore(btn, navToggle);
    } else {
      navInner.appendChild(btn);
    }
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectToggle();
      if (currentLang !== 'en') applyLanguage(currentLang);
    });
  } else {
    injectToggle();
    if (currentLang !== 'en') applyLanguage(currentLang);
  }

  // Expose for external use
  window.BuySignalI18n = { applyLanguage: applyLanguage, getCurrentLang: function () { return currentLang; } };
})();
