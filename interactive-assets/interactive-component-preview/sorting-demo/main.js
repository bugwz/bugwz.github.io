'use strict';

(() => {
  const script = document.currentScript
  const root = script && script.parentElement
  if (!root || root.dataset.interactiveReady === 'true') return
  root.dataset.interactiveReady = 'true'

  const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light'
  const emitThemeChange = () => {
    const theme = getTheme()
    root.dataset.theme = theme
    root.dispatchEvent(new CustomEvent('interactive:themechange', { detail: { theme } }))
  }
  const onThemeChange = callback => {
    root.addEventListener('interactive:themechange', event => callback(event.detail.theme))
    callback(getTheme())
  }
  const observer = new MutationObserver(emitThemeChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  emitThemeChange()

  const interactive = Object.freeze({ root, getTheme, onThemeChange })
  try {
const barsContainer = interactive.root.querySelector('.sorting-demo__bars')
const status = interactive.root.querySelector('.sorting-demo__status')
const nextButton = interactive.root.querySelector('[data-action="next"]')
const resetButton = interactive.root.querySelector('[data-action="reset"]')
const initialValues = [...barsContainer.children].map(bar => Number(bar.dataset.value))

let values = []
let outerIndex = 0
let innerIndex = 0

function renderSortingDemo(activeIndexes = []) {
  const sortedFrom = values.length - outerIndex

  values.forEach((value, index) => {
    const bar = barsContainer.children[index]
    bar.dataset.value = value
    bar.style.setProperty('--value', value)
    bar.querySelector('span').textContent = value
    delete bar.dataset.state

    if (index >= sortedFrom) bar.dataset.state = 'sorted'
    if (activeIndexes.includes(index)) bar.dataset.state = 'comparing'
  })
}

function resetSortingDemo() {
  values = [...initialValues]
  outerIndex = 0
  innerIndex = 0
  status.textContent = '准备开始'
  nextButton.disabled = false
  renderSortingDemo()
}

function advanceSortingDemo() {
  if (outerIndex >= values.length - 1) return

  const left = innerIndex
  const right = innerIndex + 1
  const swapped = values[left] > values[right]

  if (swapped) {
    ;[values[left], values[right]] = [values[right], values[left]]
  }

  status.textContent = swapped
    ? `比较 ${values[right]} 和 ${values[left]}：交换位置`
    : `比较 ${values[left]} 和 ${values[right]}：保持不变`

  renderSortingDemo([left, right])
  innerIndex += 1

  if (innerIndex >= values.length - outerIndex - 1) {
    outerIndex += 1
    innerIndex = 0
  }

  if (outerIndex >= values.length - 1) {
    renderSortingDemo()
    status.textContent = '排序完成'
    nextButton.disabled = true
  }
}

nextButton.addEventListener('click', advanceSortingDemo)
resetButton.addEventListener('click', resetSortingDemo)
resetSortingDemo()
  } catch (error) {
    console.error('交互组件 interactive-component-preview/sorting-demo 初始化失败', error)
  }
})()
