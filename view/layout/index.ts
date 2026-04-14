import { toggleVisibility } from '../../lib/dom.ts'
import { show3d } from '../../stores/settings.ts'
import { url } from '../../stores/url.ts'

let layout = document.querySelector<HTMLDivElement>('.layout')!
let card3d = document.querySelector<HTMLDivElement>('.layout_3d')!

function sync3dHeight(): void {
  card3d.style.setProperty('--layout-3d-height', `${card3d.scrollHeight}px`)
}

show3d.subscribe(enabled => {
  card3d.classList.toggle('is-shown', enabled)
  card3d.setAttribute('aria-hidden', (!enabled).toString())
  if (enabled) {
    sync3dHeight()
    requestAnimationFrame(sync3dHeight)
  }
})

url.subscribe(value => {
  toggleVisibility(layout, value !== '3d')
})

window.addEventListener('resize', () => {
  if (show3d.get()) sync3dHeight()
})
