import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Todo sobre Habituo',
  tagline: 'Cerca de una mejor versión',
  favicon: 'img/favicon.ico',
  url: 'https://docs.habituo.es',
  baseUrl: '/',
  organizationName: 'habituo',
  projectName: 'documentation',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Logotipo de Habituo App',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Accesos',
            items: [
              {
                label: 'Habituo',
                to: 'https://habituo.es',
              },
              {
                label: 'Documentación',
                to: 'https://docs.habituo.es',
              },
              {
                label: 'Tablero',
                to: 'https://habituo.es/dashboard',
              },
            ],
          },
          {
            title: 'Soporte',
            items: [
              {
                label: 'Repositorio',
                href: 'https://github.com/habituo/',
              },
              {
                label: 'Reportar bug',
                href: 'https://github.com/habituo/habituo/issues/new',
              },
              {
                label: 'Contacto',
                href: 'mailto:nataliorabasconavarro@gmail.com',
              },
            ],
          },
          {
            title: 'Temas legales',
            items: [
              {
                label: 'Política de privacidad',
                to: '#',
              },
              {
                label: 'Política de cookies',
                href: '#',
              },
              {
                label: 'Aviso legal',
                href: '#',
              },
            ],
          },
        ],
        copyright: `©${new Date().getFullYear()} Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
