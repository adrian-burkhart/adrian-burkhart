/* empty css                           */ import {
  _ as __astro_tag_component__,
  c as createAstro,
  a as createComponent,
  r as renderTemplate,
  b as addAttribute,
  d as renderHead,
  e as renderComponent,
} from '../astro.3ca4c4a2.mjs'
import 'html-escaper'
import { useState } from 'react'
import { jsxs, Fragment, jsx } from 'react/jsx-runtime'

function Counter({ children, count: initialCount }) {
  const [count, setCount] = useState(initialCount)
  const add = () => setCount(i => i + 1)
  const subtract = () => setCount(i => i - 1)
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'counter',
        children: [
          /* @__PURE__ */ jsx('button', {
            onClick: subtract,
            children: '-',
          }),
          /* @__PURE__ */ jsx('pre', {
            children: count,
          }),
          /* @__PURE__ */ jsx('button', {
            onClick: add,
            children: '+',
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'counter-message',
        children,
      }),
    ],
  })
}
__astro_tag_component__(Counter, '@astrojs/react')

const $$Astro = createAstro('https://adrian-burkhart.de')
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
  Astro2.self = $$Index
  const someProps = {
    count: 0,
  }
  return renderTemplate`<html lang="en" class="astro-J7PV25F6">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, 'content')}>
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		
	${renderHead($$result)}</head>
	<body class="astro-J7PV25F6">
		<main class="astro-J7PV25F6">
			${renderComponent(
        $$result,
        'Counter',
        Counter,
        {
          ...someProps,
          'client:visible': true,
          'client:component-hydration': 'visible',
          'client:component-path':
            '/Users/adrian/webdev/adrian-burkhart/src/components/Counter',
          'client:component-export': 'default',
          class: 'astro-J7PV25F6',
        },
        {
          default: $$result2 =>
            renderTemplate`<h1 class="astro-J7PV25F6">Hello, React!</h1>`,
        }
      )}
		</main>
	</body></html>`
}, '/Users/adrian/webdev/adrian-burkhart/src/pages/index.astro')

const $$file = '/Users/adrian/webdev/adrian-burkhart/src/pages/index.astro'
const $$url = ''

const _page0 = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)

export { _page0 as _ }
