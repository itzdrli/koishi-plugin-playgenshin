import { Context } from '@koishijs/client'
import Page from './page.vue'

export default (ctx: Context) => {
  ctx.page({
    name: '原神',
    path: '/genshin',
    component: Page,
  })
}
