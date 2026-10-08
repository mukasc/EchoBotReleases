import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EchoBot",
  description: "Assistente Inteligente de Voz e Campanha para RPG",
  lang: 'pt-BR',
  base: process.env.BASE_URL || '/EchoBotReleases/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'EchoBot',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia de Início', link: '/guia/instalacao' },
      { text: 'Funcionalidades', link: '/recursos/voz-e-stt' },
      { text: 'Suporte & FAQ', link: '/suporte/solucao-problemas' },
      { text: 'Releases', link: 'https://github.com/mukasc/EchoBotReleases' }
    ],
    sidebar: {
      '/guia/': [
        {
          text: 'Primeiros Passos',
          items: [
            { text: 'Requisitos do Sistema', link: '/guia/requisitos' },
            { text: 'Instalação (.exe)', link: '/guia/instalacao' },
            { text: 'Guia de Primeiro Uso', link: '/guia/primeiro-uso' }
          ]
        }
      ],
      '/recursos/': [
        {
          text: 'Funcionalidades',
          items: [
            { text: 'Voz & Transcrição (STT/TTS)', link: '/recursos/voz-e-stt' },
            { text: 'Integrações (VTT & Discord)', link: '/recursos/integracoes' },
            { text: 'Worldbuilding & Lore', link: '/recursos/worldbuilding' }
          ]
        }
      ],
      '/suporte/': [
        {
          text: 'Suporte',
          items: [
            { text: 'Solução de Problemas', link: '/suporte/solucao-problemas' },
            { text: 'Histórico de Versões', link: '/suporte/changelog' }
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mukasc/EchoBot' }
    ],
    footer: {
      message: 'Documentação e Releases Oficiais do EchoBot.',
      copyright: 'Copyright © 2026 EchoBot Team'
    }
  }
})
