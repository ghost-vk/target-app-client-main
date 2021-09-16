const servicePageQuestions = {
  name: 'servicePageQuestions',
  value: [
    {
      title: 'Часто задаваемый вопрос',
      body: 'Часто отвечаемый ответ',
    },
    {
      title: 'Часто задаваемый вопрос',
      body: 'Часто отвечаемый ответ',
    },
    {
      title: 'Часто задаваемый вопрос',
      body: 'Часто отвечаемый ответ',
    },
    {
      title: 'Часто задаваемый вопрос',
      body: 'Часто отвечаемый ответ',
    },
  ],
}

servicePageQuestions.value.forEach((q) => {
  q.id = Math.random()
  q.isOpened = false
})

export { servicePageQuestions }
