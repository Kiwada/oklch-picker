import { lch, oklch } from '../../lib/colors.ts'
import { colorToValue, current } from '../../stores/current.ts'
import { visible } from '../../stores/visible.ts'

let sample = document.querySelector<HTMLDivElement>('.sample')!
let type = document.querySelector<HTMLDivElement>('.sample_reader')!
let unavailable = document.querySelector<HTMLDivElement>('.sample_unavailable')!
let spaceNote = document.querySelector<HTMLDivElement>('.sample_space')!
let fallbackNote = document.querySelector<HTMLButtonElement>('.sample_action')!

function formatSpace(space: string): string {
  if (space === 'srgb') return 'Espaço sRGB'
  if (space === 'p3') return 'Espaço Display P3'
  if (space === 'rec2020') return 'Espaço Rec. 2020'
  return 'Fora de gamut'
}

visible.subscribe(({ fallback, real, space }) => {
  let isWideGamut = space === 'p3' || space === 'rec2020'
  let isFallback = space !== 'srgb' && !real

  sample.classList.toggle('is-srgb', space === 'srgb')
  sample.classList.toggle('is-wide-gamut', isWideGamut)
  sample.classList.toggle('is-fallback', isFallback)
  sample.classList.toggle('is-extra', isWideGamut || isFallback)

  if (real) {
    unavailable.innerText = ''
  } else if (space === 'p3') {
    unavailable.innerText = 'Display P3 não está disponível neste monitor'
  } else if (space === 'rec2020') {
    unavailable.innerText = 'Rec. 2020 não está disponível neste monitor'
  } else if (space === 'out') {
    unavailable.innerText = 'Fora do gamut disponível em dispositivos atuais'
  }

  type.innerText = formatSpace(space)
  spaceNote.innerText = formatSpace(space)

  sample.style.setProperty('--sample-display', real || fallback)
})

fallbackNote.addEventListener('click', () => {
  let fallback = visible.get().fallback
  let color = COLOR_FN === 'lch' ? lch(fallback) : oklch(fallback)
  current.set(colorToValue(color!))
})
