const educationPageQuestions = {
  name: 'educationPageQuestions',
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

educationPageQuestions.value.forEach((q) => {
  q.id = Math.random()
  q.isOpened = false
})

export { educationPageQuestions }
