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
}