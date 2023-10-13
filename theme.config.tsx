import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/hellozoran/docs-notifs-io',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/hellozoran/docs-notifs-io',
  footer: {
    text: 'Notifs.io Documentation',
  },
}

export default config
