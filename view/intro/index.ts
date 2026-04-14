import { setCurrent } from '../../stores/current.ts'

let presets = document.querySelectorAll<HTMLButtonElement>('.intro_preset')

for (let preset of presets) {
  preset.addEventListener('click', () => {
    let color = preset.dataset.color
    if (color) {
      setCurrent(color)
      preset.blur()
    }
  })
}
