/**
 * ═══════════════════════════════════════════════════
 *  NIVELLMEDICAL AG — Shared Site Integration
 *  nivell-site.js · Version 4.0 · Mai 2026
 *  Online-Assistent · Promo-Codes · Navigation
 * ═══════════════════════════════════════════════════
 */

// ── ONLINE ASSISTANT — Multilingual Knowledge Base ──
const NIVELLIPSO_KNOWLEDGE = [
  { keywords: ['preis','kosten','chf','gebühr','gebuehr','tarif','price','cost','prix','coût','prezzo','costo','цена','стоимость','precio','coste'],
    answers: {
      de: "Unsere Preise (gültig ab 01.05.2026, exkl. MWSt.):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Retainer: ab CHF 120\n\nMit persönlichem Promo-Code aus dem Honor & Reward Programm zusätzlich vergünstigt. Details: sales@nivellipso.com",
      en: "Our prices (valid from 01.05.2026, excl. VAT):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Retainer: from CHF 120\n\nAdditional discounts with personal promo code from the Honor & Reward Programme. Details: sales@nivellipso.com",
      fr: "Nos tarifs (valables dès le 01.05.2026, TVA excl.):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Retainer: dès CHF 120\n\nRéductions supplémentaires avec code promo personnel du programme Honor & Reward. Détails: sales@nivellipso.com",
      it: "I nostri prezzi (validi dal 01.05.2026, IVA escl.):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Retainer: da CHF 120\n\nSconti aggiuntivi con codice promo personale del programma Honor & Reward. Dettagli: sales@nivellipso.com",
      ru: "Наши цены (действительны с 01.05.2026, без НДС):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Ретейнер: от CHF 120\n\nДополнительные скидки с личным промо-кодом программы Honor & Reward. Подробности: sales@nivellipso.com",
      es: "Nuestros precios (válidos desde 01.05.2026, IVA excl.):\n\n• Single Arch: CHF 590 – CHF 1'450\n• Dual Arch: CHF 920 – CHF 2'200 (Premium)\n• Touch-Up: CHF 390 / CHF 540\n• Retenedor: desde CHF 120\n\nDescuentos adicionales con código promo personal del programa Honor & Reward. Detalles: sales@nivellipso.com"
    }
  },
  { keywords: ['promo','rabatt','discount','code','honor','reward','bonus','punkte','st tropez','reise','incentive','remise','sconto','скидка','descuento'],
    answers: {
      de: "Das nivellipso® Honor & Reward Programm:\n\n• Jeder aktive Nivellipso-Arzt erhält einen persönlichen Promo-Code\n• Discount bis 25% auf Aligner-Bestellungen\n• Brackets mit -45% für Nivellipso-Mitglieder\n• Anniversary-Boni und Volume-Rewards\n• Top-Tier: Incentive-Reise (z.B. St. Tropez)\n\nIhr persönlicher Code: sales@nivellipso.com anfragen.",
      en: "The nivellipso® Honor & Reward Programme:\n\n• Every active Nivellipso doctor receives a personal promo code\n• Discount up to 25% on aligner orders\n• Brackets at -45% for Nivellipso members\n• Anniversary bonuses and volume rewards\n• Top-Tier: incentive trip (e.g. St. Tropez)\n\nRequest your personal code: sales@nivellipso.com",
      fr: "Le programme nivellipso® Honor & Reward:\n\n• Chaque médecin Nivellipso actif reçoit un code promo personnel\n• Remise jusqu'à 25% sur les commandes d'aligneurs\n• Brackets à -45% pour les membres Nivellipso\n• Bonus anniversaire et volume rewards\n• Top-Tier: voyage incitatif (ex. St. Tropez)\n\nDemandez votre code personnel: sales@nivellipso.com",
      it: "Il programma nivellipso® Honor & Reward:\n\n• Ogni medico Nivellipso attivo riceve un codice promo personale\n• Sconto fino al 25% sugli ordini di allineatori\n• Bracket al -45% per i membri Nivellipso\n• Bonus anniversario e volume rewards\n• Top-Tier: viaggio incentive (es. St. Tropez)\n\nRichiedi il tuo codice personale: sales@nivellipso.com",
      ru: "Программа nivellipso® Honor & Reward:\n\n• Каждый активный врач Nivellipso получает личный промо-код\n• Скидка до 25% на заказы элайнеров\n• Брекеты со скидкой 45% для членов Nivellipso\n• Юбилейные бонусы и объёмные награды\n• Топ-уровень: поощрительная поездка (напр. Сен-Тропе)\n\nЗапросите ваш личный код: sales@nivellipso.com",
      es: "El programa nivellipso® Honor & Reward:\n\n• Cada médico Nivellipso activo recibe un código promo personal\n• Descuento hasta 25% en pedidos de alineadores\n• Brackets con -45% para miembros Nivellipso\n• Bonos de aniversario y volume rewards\n• Top-Tier: viaje de incentivo (ej. St. Tropez)\n\nSolicite su código personal: sales@nivellipso.com"
    }
  },
  { keywords: ['soft','regular','intense','phase','system','three-aligner','3-aligner','drei aligner','three aligner','tre aligner'],
    answers: {
      de: "Das nivellipso® Three-Aligner-System hat drei Phasen:\n\n• SOFT: Sanfter Behandlungsstart, Gewebeanpassung (Phase 01)\n• REGULAR: Aktive Zahnbewegung, optimale Balance (Phase 02)\n• INTENSE: Finale Stabilisierung, keine Rezidive (Phase 03)\n\nDrei differenzierte Materialien pro Stufe. Biomechanisch überlegen, klinisch validiert.",
      en: "The nivellipso® Three-Aligner System has three phases:\n\n• SOFT: Gentle treatment start, tissue adaptation (Phase 01)\n• REGULAR: Active tooth movement, optimal balance (Phase 02)\n• INTENSE: Final stabilisation, no relapse (Phase 03)\n\nThree differentiated materials per stage. Biomechanically superior, clinically validated.",
      fr: "Le système Three-Aligner de nivellipso® comporte trois phases:\n\n• SOFT: Début de traitement en douceur, adaptation tissulaire (Phase 01)\n• REGULAR: Mouvement actif des dents, équilibre optimal (Phase 02)\n• INTENSE: Stabilisation finale, sans récidive (Phase 03)\n\nTrois matériaux différenciés par étape. Supérieur biomécaniquement, validé cliniquement.",
      it: "Il sistema Three-Aligner di nivellipso® ha tre fasi:\n\n• SOFT: Inizio delicato del trattamento, adattamento tissutale (Fase 01)\n• REGULAR: Movimento attivo dei denti, equilibrio ottimale (Fase 02)\n• INTENSE: Stabilizzazione finale, nessuna recidiva (Fase 03)\n\nTre materiali differenziati per fase. Superiore biomeccanicamente, validato clinicamente.",
      ru: "Система Three-Aligner nivellipso® имеет три фазы:\n\n• SOFT: Мягкое начало лечения, адаптация тканей (Фаза 01)\n• REGULAR: Активное движение зубов, оптимальный баланс (Фаза 02)\n• INTENSE: Окончательная стабилизация, без рецидивов (Фаза 03)\n\nТри дифференцированных материала для каждого этапа. Биомеханически превосходный, клинически подтверждённый.",
      es: "El sistema Three-Aligner de nivellipso® tiene tres fases:\n\n• SOFT: Inicio suave del tratamiento, adaptación tisular (Fase 01)\n• REGULAR: Movimiento activo de los dientes, equilibrio óptimo (Fase 02)\n• INTENSE: Estabilización final, sin recidiva (Fase 03)\n\nTres materiales diferenciados por etapa. Superiores biomecánicamente, validados clínicamente."
    }
  },
  { keywords: ['lieferzeit','liefer','versand','wann','dauer','wie lange','delivery','livraison','consegna','доставка','entrega','délai','shipping'],
    answers: {
      de: "Lieferzeiten:\n\n• Treatment-Plan: 3 Werktage nach Scan-Eingang\n• Aligner Standard: 5–10 Werktage\n• Express (CH/FL): 2–3 Werktage, CHF 45.—\n• Frei Haus ab CHF 600 Bestellwert\n\nDirektversand ab Manufaktur Schaffhausen.",
      en: "Delivery times:\n\n• Treatment Plan: 3 business days after scan receipt\n• Aligner Standard: 5–10 business days\n• Express (CH/FL): 2–3 business days, CHF 45.—\n• Free shipping from CHF 600 order value\n\nDirect shipping from the Schaffhausen manufactory.",
      fr: "Délais de livraison:\n\n• Plan de traitement: 3 jours ouvrables après réception du scan\n• Aligneur standard: 5–10 jours ouvrables\n• Express (CH/FL): 2–3 jours ouvrables, CHF 45.—\n• Livraison gratuite dès CHF 600 de commande\n\nExpédition directe depuis la manufacture de Schaffhouse.",
      it: "Tempi di consegna:\n\n• Piano di trattamento: 3 giorni lavorativi dopo ricezione scan\n• Allineatori standard: 5–10 giorni lavorativi\n• Express (CH/FL): 2–3 giorni lavorativi, CHF 45.—\n• Spedizione gratuita da CHF 600 di ordine\n\nSpedizione diretta dalla manifattura di Sciaffusa.",
      ru: "Сроки доставки:\n\n• План лечения: 3 рабочих дня после получения скана\n• Элайнеры стандарт: 5–10 рабочих дней\n• Экспресс (CH/FL): 2–3 рабочих дня, CHF 45.—\n• Бесплатная доставка от CHF 600\n\nПрямая отправка из мануфактуры в Шаффхаузене.",
      es: "Tiempos de entrega:\n\n• Plan de tratamiento: 3 días hábiles tras recepción del escáner\n• Alineadores estándar: 5–10 días hábiles\n• Express (CH/FL): 2–3 días hábiles, CHF 45.—\n• Envío gratuito desde CHF 600 de pedido\n\nEnvío directo desde la manufactura de Schaffhausen."
    }
  },
  { keywords: ['bracket','metall','keramik','selbstligierend','self-lig','metal','ceramic','céramique','ceramica','металл','керамика','cerámica'],
    answers: {
      de: "Unsere Bracket-Linie:\n\n• Metall (MIM): CHF 2.40/Stk · Standard\n• Keramik (monokristallin): CHF 7.80/Stk · ästhetisch\n• Selbstligierend (passiv): CHF 9.50/Stk · Premium\n\nNivellipso-Mitglieder: -45% Rabatt mit Promo-Code. Bestellung via Doctor Portal.",
      en: "Our bracket range:\n\n• Metal (MIM): CHF 2.40/unit · Standard\n• Ceramic (monocrystalline): CHF 7.80/unit · Aesthetic\n• Self-ligating (passive): CHF 9.50/unit · Premium\n\nNivellipso members: -45% discount with promo code. Order via Doctor Portal.",
      fr: "Notre gamme de brackets:\n\n• Métal (MIM): CHF 2.40/pièce · Standard\n• Céramique (monocristallin): CHF 7.80/pièce · Esthétique\n• Autoligaturant (passif): CHF 9.50/pièce · Premium\n\nMembres Nivellipso: -45% avec code promo. Commande via Doctor Portal.",
      it: "La nostra gamma di bracket:\n\n• Metallo (MIM): CHF 2.40/pz · Standard\n• Ceramica (monocristallina): CHF 7.80/pz · Estetico\n• Autolegante (passivo): CHF 9.50/pz · Premium\n\nMembri Nivellipso: -45% sconto con codice promo. Ordine tramite Doctor Portal.",
      ru: "Наш ассортимент брекетов:\n\n• Металл (MIM): CHF 2.40/шт · Стандарт\n• Керамика (монокристаллическая): CHF 7.80/шт · Эстетические\n• Самолигирующие (пассивные): CHF 9.50/шт · Премиум\n\nЧленам Nivellipso: скидка 45% с промо-кодом. Заказ через Doctor Portal.",
      es: "Nuestra gama de brackets:\n\n• Metal (MIM): CHF 2.40/ud · Estándar\n• Cerámica (monocristalina): CHF 7.80/ud · Estético\n• Autoligado (pasivo): CHF 9.50/ud · Premium\n\nMiembros Nivellipso: -45% descuento con código promo. Pedido vía Doctor Portal."
    }
  },
  { keywords: ['visibal','app','patient','compliance','tracking','suivi','monitoraggio','мониторинг','seguimiento'],
    answers: {
      de: "VISIBAL ist unsere klinische Begleit-Plattform:\n\n• Patient-App: Behandlungsfortschritt, Online-Assistent, Foto-Doku, 22h-Tracking\n• Praxis-Dashboard: Compliance-Monitoring aller Patienten\n• Monatliches Patient-Mailing in 6 Sprachen\n• Podcast für Patienten\n\nBasic gratis für nivellipso®-Kunden. Pro: CHF 89/Monat.",
      en: "VISIBAL is our clinical companion platform:\n\n• Patient App: treatment progress, online assistant, photo documentation, 22h tracking\n• Practice Dashboard: compliance monitoring for all patients\n• Monthly patient mailing in 6 languages\n• Podcast for patients\n\nBasic free for nivellipso® customers. Pro: CHF 89/month.",
      fr: "VISIBAL est notre plateforme d'accompagnement clinique:\n\n• App patient: suivi du traitement, assistant en ligne, documentation photo, tracking 22h\n• Tableau de bord cabinet: monitoring de tous les patients\n• Mailing mensuel aux patients en 6 langues\n• Podcast pour patients\n\nBasic gratuit pour les clients nivellipso®. Pro: CHF 89/mois.",
      it: "VISIBAL è la nostra piattaforma di accompagnamento clinico:\n\n• App paziente: progresso del trattamento, assistente online, documentazione foto, tracking 22h\n• Dashboard studio: monitoraggio conformità di tutti i pazienti\n• Mailing mensile ai pazienti in 6 lingue\n• Podcast per pazienti\n\nBasic gratuito per i clienti nivellipso®. Pro: CHF 89/mese.",
      ru: "VISIBAL — наша клиническая платформа сопровождения:\n\n• Приложение для пациента: прогресс лечения, онлайн-ассистент, фото-документация, трекинг 22ч\n• Панель клиники: мониторинг соблюдения режима всех пациентов\n• Ежемесячная рассылка пациентам на 6 языках\n• Подкаст для пациентов\n\nBasic бесплатно для клиентов nivellipso®. Pro: CHF 89/месяц.",
      es: "VISIBAL es nuestra plataforma clínica de acompañamiento:\n\n• App paciente: progreso del tratamiento, asistente online, documentación fotográfica, tracking 22h\n• Panel de la clínica: monitoreo de cumplimiento de todos los pacientes\n• Mailing mensual a pacientes en 6 idiomas\n• Podcast para pacientes\n\nBasic gratuito para clientes nivellipso®. Pro: CHF 89/mes."
    }
  },
  { keywords: ['22h','tragezeit','tragen','wear','stunden','hours','heures','ore','часов','horas'],
    answers: {
      de: "Die 22-Stunden-Regel:\n\nAligner müssen mindestens 22h/Tag getragen werden. Unter 20h verliert die Schiene biomechanische Wirksamkeit. Bewegung der Zähne stoppt, Behandlung verzögert sich.\n\nVISIBAL trackt die Tragezeit automatisch und erinnert die Patienten.",
      en: "The 22-hour rule:\n\nAligners must be worn for at least 22h/day. Below 20h the aligner loses biomechanical effectiveness. Tooth movement stops and treatment is delayed.\n\nVISIBAL automatically tracks wear time and reminds patients.",
      fr: "La règle des 22 heures:\n\nLes aligneurs doivent être portés au moins 22h/jour. En dessous de 20h l'aligneur perd son efficacité biomécanique. Le mouvement dentaire s'arrête et le traitement est retardé.\n\nVISIBAL suit automatiquement le temps de port et rappelle les patients.",
      it: "La regola delle 22 ore:\n\nGli allineatori devono essere indossati almeno 22h/giorno. Sotto le 20h perdono efficacia biomeccanica. Il movimento dentale si ferma e il trattamento si ritarda.\n\nVISIBAL traccia automaticamente il tempo di utilizzo e ricorda ai pazienti.",
      ru: "Правило 22 часов:\n\nЭлайнеры необходимо носить не менее 22ч/день. При меньше 20ч элайнер теряет биомеханическую эффективность. Движение зубов прекращается, лечение затягивается.\n\nVISIBAL автоматически отслеживает время ношения и напоминает пациентам.",
      es: "La regla de las 22 horas:\n\nLos alineadores deben llevarse al menos 22h/día. Por debajo de 20h el alineador pierde eficacia biomecánica. El movimiento dental se detiene y el tratamiento se retrasa.\n\nVISIBAL rastrea automáticamente el tiempo de uso y recuerda a los pacientes."
    }
  },
  { keywords: ['schmerz','druck','weh','unangenehm','pressure','pain','douleur','dolore','боль','dolor'],
    answers: {
      de: "Druckgefühl in den ersten 2–3 Tagen nach Stufenwechsel ist normal und gewünscht — er zeigt aktive Zahnbewegung. In der REGULAR-Phase besonders ausgeprägt.\n\nBei starken Schmerzen, Schleimhautverletzungen oder unerwarteten Symptomen: direkten Kontakt mit Ihrer Praxis aufnehmen.",
      en: "Pressure in the first 2–3 days after a stage change is normal and expected — it indicates active tooth movement. Most pronounced in the REGULAR phase.\n\nFor severe pain, mucosal injuries or unexpected symptoms: contact your practice directly.",
      fr: "Une sensation de pression dans les 2–3 premiers jours après un changement d'étape est normale — elle indique un mouvement dentaire actif. Particulièrement prononcée en phase REGULAR.\n\nEn cas de douleurs intenses ou de symptômes inattendus: contactez votre cabinet directement.",
      it: "Una sensazione di pressione nei primi 2–3 giorni dopo il cambio di step è normale — indica un movimento dentale attivo. Particolarmente pronunciata nella fase REGULAR.\n\nIn caso di dolori forti o sintomi inattesi: contattate direttamente il vostro studio.",
      ru: "Ощущение давления в первые 2–3 дня после смены этапа — нормально и ожидаемо. Особенно выражено в фазе REGULAR.\n\nПри сильной боли или неожиданных симптомах: свяжитесь с вашей клиникой напрямую.",
      es: "La presión durante los primeros 2–3 días tras un cambio de etapa es normal y esperada. Más pronunciada en la fase REGULAR.\n\nAnte dolor intenso o síntomas inesperados: contacte directamente con su clínica."
    }
  },
  { keywords: ['essen','trinken','kaffee','food','drink','coffee','manger','boire','mangiare','bere','еда','пить','comer','beber','café'],
    answers: {
      de: "Mit Aligner essen und trinken:\n\n• Vor dem Essen: Schiene immer abnehmen\n• Trinken: Nur Wasser mit Aligner OK\n• Kaffee, Säfte, Alkohol: ohne Aligner — sonst Verfärbung/Verformung\n• Zähne putzen vor dem Wiedereinsetzen",
      en: "Eating and drinking with aligners:\n\n• Before eating: always remove the aligner\n• Drinking: only water is OK with the aligner in\n• Coffee, juices, alcohol: remove aligner first — otherwise staining/warping\n• Brush teeth before reinserting",
      fr: "Manger et boire avec des aligneurs:\n\n• Avant de manger: toujours retirer l'aligneur\n• Boissons: seule l'eau est autorisée avec l'aligneur\n• Café, jus, alcool: sans aligneur — sinon coloration/déformation\n• Se brosser les dents avant de remettre l'aligneur",
      it: "Mangiare e bere con gli allineatori:\n\n• Prima di mangiare: rimuovere sempre l'allineatore\n• Bere: solo acqua con l'allineatore indossato\n• Caffè, succhi, alcolici: senza allineatore — altrimenti colorazione/deformazione\n• Lavarsi i denti prima di reinserire",
      ru: "Еда и питьё с элайнерами:\n\n• Перед едой: всегда снимайте элайнер\n• Напитки: только вода с элайнером\n• Кофе, соки, алкоголь: без элайнера — иначе окрашивание/деформация\n• Почистите зубы перед повторным надеванием",
      es: "Comer y beber con alineadores:\n\n• Antes de comer: siempre retirar el alineador\n• Beber: solo agua está permitido con el alineador puesto\n• Café, zumos, alcohol: sin alineador — de lo contrario manchas/deformación\n• Cepillarse los dientes antes de volver a colocar"
    }
  },
  { keywords: ['retainer','rezidiv','nachbehandlung','retention','relapse','récidive','recidiva','рецидив'],
    answers: {
      de: "Retainer nach der Behandlung sind essentiell:\n\nZähne haben ein natürliches Rezidiv-Potential. Ohne Retainer können sich die Zähne zurückbewegen.\n\nUnser Angebot:\n• Single Arch Paar: CHF 120\n• Dual Arch Paar: CHF 190\n• 3er-Set (Stabilität): CHF 320 / 520\n\nIndividuelle Empfehlung durch Ihre Praxis.",
      en: "Retainers after treatment are essential:\n\nTeeth have a natural relapse potential. Without retainers, teeth can shift back.\n\nOur offer:\n• Single Arch pair: CHF 120\n• Dual Arch pair: CHF 190\n• 3-set (stability): CHF 320 / 520\n\nIndividual recommendation from your practice.",
      fr: "Les retainers après traitement sont essentiels:\n\nLes dents ont un potentiel de récidive naturel. Sans retainers, les dents peuvent se déplacer.\n\nNotre offre:\n• Paire Single Arch: CHF 120\n• Paire Dual Arch: CHF 190\n• Set de 3 (stabilité): CHF 320 / 520\n\nRecommandation individuelle de votre cabinet.",
      it: "I retainer dopo il trattamento sono essenziali:\n\nI denti hanno un potenziale naturale di recidiva. Senza retainer possono spostarsi nuovamente.\n\nLa nostra offerta:\n• Coppia Single Arch: CHF 120\n• Coppia Dual Arch: CHF 190\n• Set da 3 (stabilità): CHF 320 / 520\n\nRaccomandazione individuale del vostro studio.",
      ru: "Ретейнеры после лечения необходимы:\n\nЗубы имеют естественный потенциал рецидива. Без ретейнеров зубы могут сместиться обратно.\n\nНаше предложение:\n• Пара Single Arch: CHF 120\n• Пара Dual Arch: CHF 190\n• Набор из 3 (стабильность): CHF 320 / 520\n\nИндивидуальная рекомендация вашей клиники.",
      es: "Los retenedores después del tratamiento son esenciales:\n\nLos dientes tienen un potencial natural de recidiva. Sin retenedores pueden volver a moverse.\n\nNuestra oferta:\n• Par Single Arch: CHF 120\n• Par Dual Arch: CHF 190\n• Set de 3 (estabilidad): CHF 320 / 520\n\nRecomendación individual de su clínica."
    }
  },
  { keywords: ['demo','beratung','termin','visite','kennenlernen','appointment','consultation','rendez-vous','appuntamento','консультация','cita'],
    answers: {
      de: "Demo & Beratung:\n\n• Dr. Albin Vukaj kommt persönlich in Ihre Praxis (Schweiz, kostenfrei)\n• 30-Minuten Online-Beratung via Doctor Portal\n• VISIBAL-Demo: 5 Pilot-Praxen aktiv, kostenlos testen\n\nAnfrage: sales@nivellipso.com · +41 79 469 71 76",
      en: "Demo & Consultation:\n\n• Dr. Albin Vukaj visits your practice in person (Switzerland, free of charge)\n• 30-minute online consultation via Doctor Portal\n• VISIBAL demo: 5 pilot practices active, free to test\n\nRequest: sales@nivellipso.com · +41 79 469 71 76",
      fr: "Démo & Consultation:\n\n• Dr. Albin Vukaj se rend personnellement dans votre cabinet (Suisse, gratuit)\n• Consultation en ligne de 30 minutes via Doctor Portal\n• Démo VISIBAL: 5 cabinets pilotes, test gratuit\n\nDemande: sales@nivellipso.com · +41 79 469 71 76",
      it: "Demo & Consulenza:\n\n• Il Dr. Albin Vukaj visita personalmente il vostro studio (Svizzera, gratuito)\n• Consulenza online di 30 minuti tramite Doctor Portal\n• Demo VISIBAL: 5 studi pilota attivi, test gratuito\n\nRichiesta: sales@nivellipso.com · +41 79 469 71 76",
      ru: "Демонстрация и консультация:\n\n• Д-р Альбин Вукай лично посещает вашу клинику (Швейцария, бесплатно)\n• 30-минутная онлайн-консультация через Doctor Portal\n• Демо VISIBAL: 5 пилотных клиник, бесплатное тестирование\n\nЗапрос: sales@nivellipso.com · +41 79 469 71 76",
      es: "Demo & Consultoría:\n\n• El Dr. Albin Vukaj visita personalmente su clínica (Suiza, gratuito)\n• Consulta online de 30 minutos vía Doctor Portal\n• Demo VISIBAL: 5 clínicas piloto activas, prueba gratuita\n\nSolicitud: sales@nivellipso.com · +41 79 469 71 76"
    }
  },
  { keywords: ['swiss','schweiz','schaffhausen','made in','herkunft','origin','suisse','svizzera','швейцария','suiza'],
    answers: {
      de: "Swiss-Made in Schaffhausen:\n\n• Produktion 100% in der Schweiz seit 2015\n• CE MDR Klasse IIa zertifiziert\n• ISO 13485 Medizinprodukte\n• PET-G biokompatibel, 1.0 mm\n• Vollständige Rückverfolgbarkeit jeder Charge",
      en: "Swiss-Made in Schaffhausen:\n\n• 100% production in Switzerland since 2015\n• CE MDR Class IIa certified\n• ISO 13485 Medical Devices\n• PET-G biocompatible, 1.0 mm\n• Full traceability of every batch",
      fr: "Swiss-Made à Schaffhouse:\n\n• Production 100% en Suisse depuis 2015\n• Certifié CE MDR Classe IIa\n• ISO 13485 Dispositifs médicaux\n• PET-G biocompatible, 1.0 mm\n• Traçabilité complète de chaque lot",
      it: "Swiss-Made a Sciaffusa:\n\n• Produzione 100% in Svizzera dal 2015\n• Certificato CE MDR Classe IIa\n• ISO 13485 Dispositivi medici\n• PET-G biocompatibile, 1.0 mm\n• Tracciabilità completa di ogni lotto",
      ru: "Swiss-Made в Шаффхаузене:\n\n• 100% производство в Швейцарии с 2015 года\n• Сертифицировано CE MDR Класс IIa\n• ISO 13485 Медицинские изделия\n• PET-G биосовместимый, 1.0 мм\n• Полная прослеживаемость каждой партии",
      es: "Swiss-Made en Schaffhausen:\n\n• Producción 100% en Suiza desde 2015\n• Certificado CE MDR Clase IIa\n• ISO 13485 Dispositivos médicos\n• PET-G biocompatible, 1.0 mm\n• Trazabilidad completa de cada lote"
    }
  },
  { keywords: ['portal','doctor','bestellung','order','einloggen','login','commander','ordinare','заказ','pedido'],
    answers: {
      de: "Bestellungen laufen über das Doctor Portal:\n\nnivellonlign.com\n\n• STL/PLY Scans hochladen\n• Treatment-Plan reviewen und freigeben\n• Brackets, Bögen, Zubehör direkt bestellen\n• Bestellhistorie & Tracking\n\nZugang: sales@nivellipso.com",
      en: "Orders are placed via the Doctor Portal:\n\nnivellonlign.com\n\n• Upload STL/PLY scans\n• Review and approve treatment plan\n• Order brackets, archwires, accessories directly\n• Order history & tracking\n\nAccess: sales@nivellipso.com",
      fr: "Les commandes se passent via le Doctor Portal:\n\nnivellonlign.com\n\n• Télécharger les scans STL/PLY\n• Réviser et approuver le plan de traitement\n• Commander brackets, arcs, accessoires directement\n• Historique des commandes & suivi\n\nAccès: sales@nivellipso.com",
      it: "Gli ordini vengono effettuati tramite il Doctor Portal:\n\nnivellonlign.com\n\n• Caricare scan STL/PLY\n• Revisionare e approvare il piano di trattamento\n• Ordinare bracket, archi, accessori direttamente\n• Storico ordini & tracking\n\nAccesso: sales@nivellipso.com",
      ru: "Заказы размещаются через Doctor Portal:\n\nnivellonlign.com\n\n• Загрузить сканы STL/PLY\n• Просмотреть и утвердить план лечения\n• Заказать брекеты, дуги, аксессуары напрямую\n• История заказов и трекинг\n\nДоступ: sales@nivellipso.com",
      es: "Los pedidos se realizan a través del Doctor Portal:\n\nnivellonlign.com\n\n• Subir escáneres STL/PLY\n• Revisar y aprobar el plan de tratamiento\n• Pedir brackets, arcos, accesorios directamente\n• Historial de pedidos & tracking\n\nAcceso: sales@nivellipso.com"
    }
  },
  { keywords: ['kontakt','erreich','anruf','mail','contact','joindre','contatto','контакт','contacto'],
    answers: {
      de: "So erreichen Sie uns:\n\n• Klinische Beratung & Planung: Dr. Albin Vukaj\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO & Systemfragen: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Adresse: Altgraben 31, CH-4624 Härkingen",
      en: "How to reach us:\n\n• Clinical Consulting & Planning: Dr. Albin Vukaj\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO & System Questions: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Address: Altgraben 31, CH-4624 Härkingen",
      fr: "Comment nous joindre:\n\n• Conseil clinique & planification: Dr. Albin Vukaj\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO & questions système: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Adresse: Altgraben 31, CH-4624 Härkingen",
      it: "Come contattarci:\n\n• Consulenza clinica & pianificazione: Dr. Albin Vukaj\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO & domande di sistema: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Indirizzo: Altgraben 31, CH-4624 Härkingen",
      ru: "Как связаться с нами:\n\n• Клиническая консультация и планирование: Д-р Альбин Вукай\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO и вопросы системы: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Адрес: Altgraben 31, CH-4624 Härkingen",
      es: "Cómo contactarnos:\n\n• Asesoramiento clínico & planificación: Dr. Albin Vukaj\n  sales@nivellipso.com · +41 79 469 71 76\n\n• CEO & preguntas del sistema: Mag. Lorenz Hirsch\n  ceo@nivellipso.com · +41 61 422 22 12\n\n• Dirección: Altgraben 31, CH-4624 Härkingen"
    }
  }
];

const NIVELL_FALLBACK = {
  de: "Für diese spezifische Frage empfehle ich den direkten Kontakt mit unserem Team:\n\n• Klinische Fragen: Dr. Albin Vukaj — sales@nivellipso.com\n• Telefonisch: +41 79 469 71 76\n\nDie Antwort kommt schnell und persönlich. Gerne kann ich Ihnen auch zu folgenden Themen helfen: Preise, Lieferzeiten, das Three-Aligner-System, VISIBAL, Honor & Reward Programm.",
  en: "For this specific question I recommend contacting our team directly:\n\n• Clinical questions: Dr. Albin Vukaj — sales@nivellipso.com\n• Phone: +41 79 469 71 76\n\nThe answer comes quickly and personally. I can also help you with: prices, delivery times, the Three-Aligner System, VISIBAL, Honor & Reward Programme.",
  fr: "Pour cette question spécifique, je vous recommande de contacter directement notre équipe:\n\n• Questions cliniques: Dr. Albin Vukaj — sales@nivellipso.com\n• Téléphone: +41 79 469 71 76\n\nLa réponse vient rapidement et personnellement. Je peux aussi vous aider sur: prix, délais, le système Three-Aligner, VISIBAL, programme Honor & Reward.",
  it: "Per questa domanda specifica, raccomando il contatto diretto con il nostro team:\n\n• Domande cliniche: Dr. Albin Vukaj — sales@nivellipso.com\n• Telefono: +41 79 469 71 76\n\nLa risposta arriva rapidamente e personalmente. Posso anche aiutarvi su: prezzi, tempi di consegna, sistema Three-Aligner, VISIBAL, programma Honor & Reward.",
  ru: "По этому конкретному вопросу рекомендую обратиться напрямую к нашей команде:\n\n• Клинические вопросы: Д-р Альбин Вукай — sales@nivellipso.com\n• Телефон: +41 79 469 71 76\n\nОтвет придёт быстро и лично. Я также могу помочь по: ценам, срокам доставки, системе Three-Aligner, VISIBAL, программе Honor & Reward.",
  es: "Para esta pregunta específica recomiendo contactar directamente con nuestro equipo:\n\n• Preguntas clínicas: Dr. Albin Vukaj — sales@nivellipso.com\n• Teléfono: +41 79 469 71 76\n\nLa respuesta llega rápida y personalmente. También puedo ayudarle con: precios, tiempos de entrega, el sistema Three-Aligner, VISIBAL, programa Honor & Reward."
};

function findAnswer(question) {
  const lang = getLang();
  const q = question.toLowerCase();
  let best = null, max = 0;
  for (const topic of NIVELLIPSO_KNOWLEDGE) {
    let score = 0;
    for (const kw of topic.keywords) { if (q.includes(kw)) score += kw.length; }
    if (score > max) { max = score; best = topic; }
  }
  if (!best) return null;
  return best.answers[lang] || best.answers['de'];
}

// ── CHAT ──
let chatOpen = false;
function toggleNivellChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  const btn = document.getElementById('chatToggle');
  if (!win) return;
  win.classList.toggle('open', chatOpen);
  if (btn) {
    const icon = btn.querySelector('.chat-icon, .c-icon');
    const close = btn.querySelector('.chat-close, .c-close');
    const label = btn.querySelector('.chat-label, .c-label');
    if (icon) icon.style.display = chatOpen ? 'none' : 'block';
    if (close) close.style.display = chatOpen ? 'block' : 'none';
    if (label) label.style.display = chatOpen ? 'none' : 'inline';
  }
}

function addNivellMsg(text, role) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = role === 'user' ? 'msg msg-user msg-u' : 'msg msg-bot msg-b';
  div.style.whiteSpace = 'pre-wrap';
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showNivellTyping() {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const d = document.createElement('div');
  d.id = 'typing';
  d.className = 'typing typing-dots typing-d';
  d.innerHTML = '<span></span><span></span><span></span>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideNivellTyping() { const t = document.getElementById('typing'); if (t) t.remove(); }

async function sendNivellChat(systemPrompt) {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const suggs = document.getElementById('chatSugg');
  if (suggs) suggs.style.display = 'none';
  addNivellMsg(text, 'user');
  showNivellTyping();

  const localAnswer = findAnswer(text);
  await new Promise(r => setTimeout(r, 700 + Math.random() * 600));

  if (localAnswer) {
    hideNivellTyping();
    addNivellMsg(localAnswer, 'bot');
    return;
  }

  hideNivellTyping();
  addNivellMsg(NIVELL_FALLBACK[getLang()] || NIVELL_FALLBACK['de'],
    'bot'
  );
}

function sendNivellSugg(btn, systemPrompt) {
  const input = document.getElementById('chatInput');
  if (input) input.value = btn.textContent;
  sendNivellChat(systemPrompt);
}

// ── PROMO CODE SYSTEM ──
function activatePromoCode(code) {
  if (!code || code.length < 4) return false;
  localStorage.setItem('nivell_promo', code.toUpperCase());
  localStorage.setItem('nivell_promo_active', '1');
  showPromoUI(code);
  return true;
}

function showPromoUI(code) {
  const banner = document.getElementById('promoBanner');
  if (banner) {
    banner.innerHTML = '✓ Promo-Code <strong>' + code + '</strong> aktiv · Persönliche Konditionen werden angezeigt';
    banner.style.display = 'block';
  }
}

function getActivePromo() {
  return localStorage.getItem('nivell_promo_active') === '1' ? localStorage.getItem('nivell_promo') : null;
}

function checkUrlPromo() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('promo');
  if (code) activatePromoCode(code);
  else {
    const existing = getActivePromo();
    if (existing) showPromoUI(existing);
  }
}

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade, .n-fade').forEach(el => obs.observe(el));
}

// ── ACTIVE NAV ──
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .n-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(path) && path !== '') a.classList.add('active');
  });
}

// ── FAQ ──
function toggleNivellFaq(btn) {
  const item = btn.closest('.faq-item, .n-faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open, .n-faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── PRICING TABS ──
function showNivellTab(id, btn) {
  document.querySelectorAll('.n-ppanel, .pricing-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.n-ptab, .ptab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById(id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── LANGUAGE ──
const NIVELL_LANGS = {
  de: { flag: '🇩🇪', code: 'DE', name: 'Deutsch' },
  fr: { flag: '🇫🇷', code: 'FR', name: 'Français' },
  it: { flag: '🇮🇹', code: 'IT', name: 'Italiano' },
  en: { flag: '🇬🇧', code: 'EN', name: 'English' },
  ru: { flag: '🇷🇺', code: 'RU', name: 'Русский' },
  es: { flag: '🇪🇸', code: 'ES', name: 'Español' }
};
function getLang() { return localStorage.getItem('nivell_lang') || 'de'; }
function saveLang(lang) { localStorage.setItem('nivell_lang', lang); }
function setNivellLang(lang, T) {
  saveLang(lang);
  document.querySelectorAll('.lang-btn.open').forEach(b => b.classList.remove('open'));
  const t = { ...(T?.de || {}), ...(T?.[lang] || {}) };
  const m = NIVELL_LANGS[lang];
  const flagEl = document.getElementById('lFlag');
  const codeEl = document.getElementById('lCode');
  if (flagEl) flagEl.textContent = m.flag;
  if (codeEl) codeEl.textContent = m.code;
  document.querySelectorAll('.lang-opt, .n-lang-opt').forEach(el => el.classList.toggle('active', el.dataset.lang === lang));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = lang;
}

// ── MOBILE MENU ──
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (menu) menu.classList.toggle('open');
  if (btn) btn.classList.toggle('open');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  setActiveNav();
  checkUrlPromo();

  // Lang dropdown — fully JS-driven so it works regardless of HTML nesting
  document.addEventListener('click', e => {
    // Language option selected
    const opt = e.target.closest('.lang-opt, .n-lang-opt');
    if (opt) {
      const lang = opt.dataset.lang;
      if (lang && window.NIVELL_T) setNivellLang(lang, window.NIVELL_T);
      return;
    }
    // Language button toggled
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      document.querySelectorAll('.lang-btn.open').forEach(b => { if (b !== btn) b.classList.remove('open'); });
      btn.classList.toggle('open');
      return;
    }
    // Click outside — close all
    document.querySelectorAll('.lang-btn.open').forEach(b => b.classList.remove('open'));
  });
});

// ── SCROLL-HIDE NAV ──
(function(){
  var nav=document.querySelector('.n-nav'), p=0;
  if(!nav)return;
  window.addEventListener('scroll',function(){
    var y=window.pageYOffset;
    nav.classList.toggle('hdr-hide',y>p&&y>80);
    p=y;
  },{passive:true});
})();
