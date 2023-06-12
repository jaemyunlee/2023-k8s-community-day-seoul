import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'ko-KR',
  title: 'k8s network',
  description: 'learn kubernetes network with Minikube',
  base: '2023-k8s-community-day-seoul',
  theme: defaultTheme({
    logo: '/images/logo.svg',
  }),
})