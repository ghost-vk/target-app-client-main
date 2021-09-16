import { ref } from 'vue'
import placeholder from '@/assets/img/anastasiya-circle.jpg'

const reviewsData = [
  {
    id: 1,
    thumbnail: placeholder,
    name: 'Имя Фамилия',
    vocation: 'Instagram Таргетолог',
    instagram: '#',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores
      beatae consequuntur culpa eius eligendi enim expedita harum ipsum, itaque laudantium
      magni, numquam perspiciatis quis quos! Earum exercitationem ipsum unde?
      <br /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis deleniti
      deserunt eius eos esse excepturi, expedita fuga illum inventore, ipsam libero nemo non
      quam quasi quidem saepe, sint sunt`,
  },
  {
    id: 2,
    thumbnail: placeholder,
    name: 'Имя Фамилия',
    vocation: 'Instagram Таргетолог',
    instagram: '#',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores
      beatae consequuntur culpa eius eligendi enim expedita harum ipsum, itaque laudantium
      magni, numquam perspiciatis quis quos! Earum exercitationem ipsum unde?
      <br /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis deleniti
      deserunt eius eos esse excepturi, expedita fuga illum inventore, ipsam libero nemo non
      quam quasi quidem saepe, sint sunt`,
  },
  {
    id: 3,
    thumbnail: placeholder,
    name: 'Имя Фамилия',
    vocation: 'Instagram Таргетолог',
    instagram: '#',
    body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores
      beatae consequuntur culpa eius eligendi enim expedita harum ipsum, itaque laudantium
      magni, numquam perspiciatis quis quos! Earum exercitationem ipsum unde?
      <br /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis deleniti
      deserunt eius eos esse excepturi, expedita fuga illum inventore, ipsam libero nemo non
      quam quasi quidem saepe, sint sunt`,
  },
]

export const useServiceReviews = () => {
  const reviews = ref(reviewsData)

  return { reviews }
}

