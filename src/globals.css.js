import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

:root {
  /* Colors */
  /* // Gray Scale (lightest to Darkets) */
    --G100: #FFFFFF;
    --G200: #6A6A6A;
    --G300: #3D3D3D;
    --G400: #000000;

    --color-primary: #ED8F31;

    --ff-primary: Helvetica Neue, "Heebo", sans-serif;
    --ff-secondary: Helvetica,Times New Roman;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, 
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--color-primary);
  }
`