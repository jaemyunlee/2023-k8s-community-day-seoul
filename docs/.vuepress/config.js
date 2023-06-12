import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'ko-KR',
  title: 'k8s network',
  description: 'learn kubernetes network with Minikube',

  theme: defaultTheme({
    logo: '/images/logo.svg',
  }),
})