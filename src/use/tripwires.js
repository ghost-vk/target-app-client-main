import phoneInHandsImg from '@/assets/img/tripwire-bg.jpg'

const tripwires = [
  {
    name: 'work-process-with-client',
    title: 'Как работать с клиентами? Пошаговый план работы',
    subtitle: 'Ты поймешь как происходит работа с клиентом <br class="hidden md:block"/> и как правильно использовать данные из брифов для достижения результата',
    forWhom: [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>`,
        title: 'Начинающий таргетолог',
        body: `Если ты только начинающий таргетолог и еще не знаешь, как происходит сам бизнес-процесс с клиентом, то тебе понравится этот материал. В нем я рассказываю про свой опыт и отвечаю на вопросы, которые чаще всего возникают у новичков.`,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
        title: 'Одолевают сомнения',
        body: `Ты сомневаешься, все ли правильно ты делаешь в работе с клиентом. У тебя возникает вопрос, что если клиент подумает, что ты вовсе не специалист? Я покажу свой бизнес-процесс и ты 100% будешь чувствовать себя увереннее.`,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>`,
        title: 'Начинаешь обучение',
        body: `Ты только начинаешь изучать таргет, возможно проходишь курс или обучаешься самостоятельно и тебе интересно, как идет работа таргетолога, от момента первого контакта с клиентом и до запуска рекламной кампании.`,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        title: 'Уже есть навык',
        body: `У тебя уже есть опыт, ты понимаешь современные тенденции рекламы, и возможно у тебя уже есть опыт настройки рекламы для клиента, но ты хочешь убедиться, что все делаешь правильно, хочешь поднять свой уровень как специалиста и стать еще лучше.`,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" /></svg>`,
        title: 'Сложно работать с клиентом',
        body: `Ты понимаешь как выбрать нужную аудиторию, сделать рекламный макет, но тебе сложно взглянуть на этот процесс "сверху". В своем материале я расскажу тебе, как правильно выстроить план работы с клиентом и контролировать рекламные запуски.`,
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 lg:h-12 lg:w-12 mr-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>`,
        title: 'Прошел курс по таргету',
        body: `Ты уже прошел курс по таргету и понимаешь как настроить рекламу, но ты задаешься вопросами: как правильно взаимодействовать с клиентом, выстроить эффективный план работы и наладить коммуникацию.`,
      },
    ],
    aboutInShort: [
      `Я создавала этот материал в первую очередь для начинающих таргетологов. Когда я только начала развиваться в сфере таргетинга, у меня было очень много вопросов по тому как составить эффективный план по работе с клиентом.`,
      `В моем материале вы ознакомитесь со структурой работы с клиентом. Это не просто перечисление шагов, а построение бизнес-процесса. Я полноценно раскрываю каждый этап и ссылаюсь на полезные материалы.`,
      `Вы поймете, какая информация вам необходима для работы с клиентом. Поймете зачем нужны брифы и узнаете их содержание. Разберетесь в том, как общаться с клиентом и как проанализировать рынок перед запуском рекламной кампании.`
    ],
    card: {
      bg: phoneInHandsImg,
      features: [
        'План работы с клиентом',
        'Определение целевой аудитории',
        'Взаимодействие с клиентом',
        'Разработка рекламной стратегии'
      ],
      price: '199 ₽'
    },
    content: [
      {
        title: 'Начало работы с клиентом. Рекламные брифы.',
        body: `Кратко рассказываю что такое бриф, для чего он вообще нужен. В материале приведено требуемое содержание брифов, это поможет вам в настройке рекламной кампании.<br /><br />Одна из причин для чего нужен бриф, это найти целевую аудиторию. Вы поймете как структурированно получить то, что уже знает клиент. Также вы узнаете что делать, если клиент не знает кто его целевая аудитория.`
      },
      {
        title: 'Переговоры с клиентом. Важные моменты.',
        body: `Рассказываю как я организовываю переговоры с клиентом. Важно понять, что клиент - не таргетолог, и вполне возможно, что он никогда не работал с таргетологом и понятия не имеет как сложно сделать запуск рекламной кампании. Здесь я имею в виду, что некоторые клиенты думают, что достаточно лишь отправить вам оплату и предоставить доступ к рекламным инструментам.`
      },
      {
        title: 'Подготовка к рекламному запуску.',
        body: `Рассказываю о самых важных этапах до запуска рекламной кампании. Уже на этих этапах, можно совершить ошибки и быть забаненным Facebook, это все серьезно усложнит запуск и возникнут новые вопросы связанные с блокировками.`
      },
      {
        title: 'Анализ конкурентов. Анализ существующих рекламных кампаний.',
        body: `Перед запуском рекламной кампании необходим полноценный анализ рынка, поиск кейсов в необходимой нише. Я расскажу вам где найти нужную информацию и сделать правильные выводы, которые улучшат рекламные показатели.`
      },
      {
        title: 'Создание офферов и макетов для рекламной кампании.',
        body: `Важно понимать как создаются офферы, какие есть негласные правила для рекламных макетов и офферов, чтобы избежать блокировки на Facebook. Делюсь инструментами, которыми пользуюсь в повседневной работе.`
      },
      {
        title: 'Запуск и контроль рекламной кампании.',
        body: `Когда лучше запускать рекламную кампанию? Как тестировать рекламную кампанию? Какой бюджет нужно выделить на тест? Как найти рабочую связку?`
      }
    ]
  },
]

const quotes = [
  '«Большие идеи — это обычно простые идеи»',
  '«Один миллион, вложенный в эффективную рекламу, продает больше, чем десять миллионов, вложенных в неэффективную рекламу»',
  '«Клиент получает ту рекламу, которую он заслуживает!»',
  '«Существует мнение, что любая реклама – это двигатель торговли. Не любая! Плохая реклама не двигатель, а тормоз»',
  '«Вы не можете принудить людей покупать ваш товар; вы можете лишь заинтересовать их в покупке этого товара»',
  '«Интерес к жизни во всех ее проявлениях – вот секрет великих творческих людей»'
]

export function useTripwires(name) {
  const tripwire = tripwires.filter((t) => t.name === name)
  if (tripwire.length > 0) {
    tripwire[0].quote = quotes[Math.floor(Math.random() * quotes.length)]
  }
  return tripwires.filter((t) => t.name === name)
}
