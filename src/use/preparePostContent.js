const expandComponent = (match) => {
  let component = {}
  match
    .replace('{{', '')
    .replace('}}', '')
    .split('|')
    .filter((p) => p)
    .forEach((p) => {
      const keyVal = p.trim().split('=')
      component[keyVal[0]] = keyVal[1]
    })

  if (component.name === 'image') {
    component.style = component.style ? component.style : ''
    component.alt = component.alt ? component.alt : ''
    return `<img class="rounded w-full mx-auto my-4" style="${component.style}" src="${SERVER_PATH}${component.src}" alt="${component.alt}" loading="lazy">`
  }

  return ''
}

export default function preparePostContent(content) {
  if (!content || typeof content !== 'string') {
    return ''
  }
  return content
    .replaceAll('<h3>', '<h3 class="text-3xl font-semibold mt-20 mb-8">')
    .replaceAll('<h6>', '<h6 class="text-base font-semibold mb-3">')
    .replaceAll('<p>', '<p class="mb-3">')
    .replaceAll('<div>', '<div class="mb-3">')
    .replaceAll('<ol>', '<ol class="list-decimal list-inside">')
    .replaceAll('<ul>', '<ul class="list-disc list-inside">')
    .replaceAll(/\{{.+?\}}/gm, expandComponent)
}
