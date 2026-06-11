document.addEventListener("DOMContentLoaded", () => {
    // Inicializador Modular
    initComprehensiveData();
    initAccessibilityFeatures();
    initAdvancedCarousel();
    initAccessibleAccordion();
    initScrollRevealEngine();
});

/* ==========================================================================
   1. CAMADA DE DADOS EXPANDIDA (Arquitetura JSON/Objetos)
   ========================================================================== */
function initComprehensiveData() {
    
    // 1.1 Dataset dos Pilares Ambientais (8 itens informativos)
    const pillarsData = [
        { title: "Transição Energética", desc: "Substituição total de combustíveis fósseis por matrizes limpas: solar, eólica, biomassa e hidrogênio verde." },
        { title: "Reflorestamento Ativo", desc: "Recomposição de biomas vitais com espécies nativas para recuperação de bacias hidrográficas e sumidouros de carbono." },
        { title: "Economia Circular", desc: "Eliminação do conceito de 'lixo' através do redesenho de produtos voltado para o reaproveitamento integral cíclico." },
        { title: "Saneamento e Água", desc: "Universalização do tratamento de efluentes, preservação de aquíferos superficiais e subterrâneos e combate a perdas de água." },
        { title: "Preservação de Solo", desc: "Fomento à agroecologia e agricultura regenerativa, reduzindo o uso de defensivos químicos e evitando a desertificação." },
        { title: "Proteção da Biodiversidade", desc: "Criação de corredores ecológicos e fortalecimento de unidades de conservação para fauna e flora ameaçadas." },
        { title: "Logística Reversa", desc: "Responsabilização pós-consumo de indústrias e corporações para destinação final segura de eletroeletrônicos e embalagens." },
        { title: "Cidades Sustentáveis", desc: "Expansão de modais de transporte público de emissão zero, criação de zonas verdes urbanas e eficiência bioclimática em prédios." }
    ];

    const pillarsGrid = document.getElementById("pillars-grid");
    if (pillarsGrid) {
        pillarsGrid.innerHTML = pillarsData.map(item => `
            <article class="card" role="article">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `).join('');
    }

    // 1.2 Dataset de Métricas Críticas Globais
    const metricsData = [
        { num: "1.5°C", title: "Limite Crítico", desc: "O teto máximo de aumento da temperatura global estipulado no Acordo de Paris para evitar catástrofes irreversíveis." },
        { num: "1 Milhão", title: "Espécies em Risco", desc: "Animais e plantas sob risco iminente de extinção nas próximas décadas caso o ritmo de degradação continue." },
        { num: "8 Milhões", title: "Tons de Plástico/Ano", desc: "Volume massivo de resíduos plásticos despejados anualmente em nossos oceanos, destruindo a fauna marinha." },
        { num: "-30%", title: "Perda de Florestas", desc: "Redução da cobertura vegetal primária global estimada nas últimas décadas devido à expansão industrial e agrícola ilegal." }
    ];

    const metricsGrid = document.getElementById("metrics-grid");
    if (metricsGrid) {
        metricsGrid.innerHTML = metricsData.map(metric => `
            <div class="metric-card">
                <span class="metric-number">${metric.num}</span>
                <h3>${metric.title}</h3>
                <p>${metric.desc}</p>
            </div>
        `).join('');
    }

    // 1.3 Dataset do Carrossel de Ecossistemas sob Risco (5 itens)
    const ecoData = [
        { title: "Floresta Amazônica", desc: "Considerada o maior regulador climático do hemisfério sul. Seu desmatamento desregula o ciclo de chuvas na América Latina inteira." },
        { title: "Recifes de Corais", desc: "Berço da biodiversidade marinha global. O aumento da temperatura dos oceanos provoca o branqueamento e morte em massa destes ecossistemas." },
        { title: "Zonas Árticas", desc: "A perda das calotas polares reduz o efeito albedo da Terra, acelerando o ciclo de aquecimento global e elevando o nível dos mares." },
        { title: "Pantanal Sul-Americano", desc: "A maior planície inundável do mundo sofre com secas severas extremas e incêndios criminosos que ameaçam espécies endêmicas." },
        { title: "Florestas de Mangue", desc: "Barreiras de proteção costeira cruciais contra erosão e incríveis sequestradores de carbono, ameaçados pela especulação imobiliária." }
    ];

    const carouselSlider = document.getElementById("carousel-slider");
    if (carouselSlider) {
        carouselSlider.innerHTML = ecoData.map((eco, index) => `
            <div class="carousel-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} de ${ecoData.length}">
                <h3>${eco.title}</h3>
                <p>${eco.desc}</p>
            </div>
        `).join('');
    }

    // 1.4 Dataset de Linha do Tempo Histórica
    const timelineData = [
        { year: "1972", title: "Conferência de Estocolmo", desc: "Primeira grande reunião global focada no meio ambiente promovida pela ONU, iniciando o direito internacional ambiental." },
        { year: "1992", title: "Eco-92 (Rio de Janeiro)", desc: "Consolidação do conceito de Desenvolvimento Sustentável e assinatura da Convenção do Clima e Diversidade Biológica." },
        { year: "1997", title: "Protocolo de Quioto", desc: "O primeiro tratado internacional com metas juridicamente vinculantes para redução de gases de efeito estufa pelos países industrializados." },
        { year: "2015", title: "Acordo de Paris", desc: "Pacto global histórico onde quase todas as nações se comprometeram a limitar o aquecimento global a menos de 2°C." },
        { year: "2026", title: "Metas Decenais Atuais", desc: "O ano limite para que governos revisem suas frentes de descarbonização estrutural para evitar a quebra dos sistemas climáticos globais." }
    ];

    const timelineContainer = document.getElementById("timeline-container");
    if (timelineContainer) {
        timelineContainer.innerHTML = timelineData.map(event => `
            <div class="timeline-item">
                <span class="timeline-year">${event.year}</span>
                <h3>${event.title}</h3>
                <p>${event.desc}</p>
            </div>
        `).join('');
    }

    // 1.5 Dataset do FAQ Técnico e Científico (6 itens estruturados)
    const faqData = [
        { q: "Qual a diferença entre efeito estufa e aquecimento global?", a: "O efeito estufa é um mecanismo natural que mantém a Terra aquecida e habitável. O aquecimento global é o agravamento artificial desse efeito decorrente das emissões de gases poluentes pela atividade humana." },
        { q: "O mercado de créditos de carbono funciona de verdade?", a: "Sim, como uma ferramenta complementar de transição econômica. Países ou empresas que reduzem emissões geram créditos que podem ser comprados por quem ainda atinge tetos altos, incentivando financeiramente a mitigação global." },
        { q: "Carros elétricos são 100% ecológicos?", a: "Eles reduzem a zero as emissões diretas durante o uso urbano. Porém, sua sustentabilidade real depende de onde vem a energia que recarrega suas baterias e da responsabilidade socioambiental na mineração do lítio." },
        { q: "Como o desmatamento afeta a distribuição de água potável?", a: "As árvores realizam a evapotranspiração, alimentando os chamados 'rios voadores'. Sem as florestas, o ciclo de precipitação quebra, causando secas extremas em centros agrícolas e reservatórios urbanos situados a milhares de quilômetros de distância." },
        { q: "O que significa o conceito de Pegada Ecológica?", a: "É um indicador que calcula a quantidade de recursos naturais renováveis da Terra necessários para sustentar o estilo de vida de uma pessoa, comunidade ou país, mapeando nossa taxa de consumo contra a capacidade regenerativa biológica." },
        { q: "Quais são as alternativas individuais mais eficazes?", a: "Reduzir o consumo de carne bovina, optar por transporte coletivo ou bicicleta, evitar plástico descartável de uso único e pressionar corporações por políticas corporativas transparentes e sustentáveis." }
    ];

    const faqAccordion = document.getElementById("faq-accordion");
    if (faqAccordion) {
        faqAccordion.innerHTML = faqData.map((faq, index) => `
            <div class="accordion-item">
                <button class="accordion-header" aria-expanded="false" aria-controls="faq-ans-${index}">
                    ${faq.q}
                    <span class="icon" aria-hidden="true">➕</span>
                </button>
                <div id="faq-ans-${index}" class="accordion-content" role="region">
                    <p>${faq.a}</p>
                </div>
            </div>
        `).join('');
    }
}

/* ==========================================================================
   2. ACESSIBILIDADE DE ALTO NÍVEL (Contraste e Escalonamento de Fontes)
   ========================================================================== */
function initAccessibilityFeatures() {
    const btnContrast = document.getElementById("btn-contrast");
    const btnFontIncrease = document.getElementById("btn-font-increase");
    const btnFontDecrease = document.getElementById("btn-font-decrease");
    
    let fontPercentage = 100;

    // Gerenciador de Alto Contraste
    if (btnContrast) {
        btnContrast.addEventListener("click", () => {
            const isToggled = document.body.classList.toggle("high-contrast");
            btnContrast.setAttribute("aria-pressed", isToggled ? "true" : "false");
        });
    }

    // Escalonamento Dinâmico de Fontes
    if (btnFontIncrease) {
        btnFontIncrease.addEventListener("click", () => {
            if (fontPercentage < 140) { 
                fontPercentage += 10;
                document.documentElement.style.setProperty('--font-base-size', `${fontPercentage}%`);
            }
        });
    }

    if (btnFontDecrease) {
        btnFontDecrease.addEventListener("click", () => {
            if (fontPercentage > 90) { 
                fontPercentage -= 10;
                document.documentElement.style.setProperty('--font-base-size', `${fontPercentage}%`);
            }
        });
    }
}

/* ==========================================================================
   3. INTERATIVIDADE: CARROSSEL AVANÇADO
   ========================================================================== */
function initAdvancedCarousel() {
    const slider = document.getElementById("carousel-slider");
    const prevBtn = document.getElementById("prev-slide");
    const nextBtn = document.getElementById("next-slide");
    
    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    
    function applySlideTransform() {
        const slides = document.querySelectorAll(".carousel-slide");
        const totalSlides = slides.length;
        
        if(currentIndex >= totalSlides) currentIndex = 0;
        if(currentIndex < 0) currentIndex = totalSlides - 1;
        
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        applySlideTransform();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        applySlideTransform();
    });
}

/* ==========================================================================
   4. INTERATIVIDADE: ACORDEÕES ACESSÍVEIS (EXPANDABLES)
   ========================================================================== */
function initAccessibleAccordion() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = header.getAttribute("aria-expanded") === "true";
            const icon = header.querySelector(".icon");

            // Fecha todos os painéis irmãos para manter foco limpo
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.setAttribute("aria-expanded", "false");
                    otherHeader.nextElementSibling.classList.remove("active");
                    const internalIcon = otherHeader.querySelector(".icon");
                    if (internalIcon) internalIcon.textContent = "➕";
                }
            });

            // Alterna o estado atual
            header.setAttribute("aria-expanded", !isOpen ? "true" : "false");
            content.classList.toggle("active");
            if (icon) icon.textContent = !isOpen ? "➖" : "➕";
        });
    });
}

/* ==========================================================================
   5. MOTOR DE ANIMAÇÃO DE ENTRADA (Intersection Observer Engine)
   ========================================================================== */
function initScrollRevealEngine() {
    const targets = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target); // Libera processamento do hardware
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    });

    targets.forEach(target => observer.observe(target));
}

