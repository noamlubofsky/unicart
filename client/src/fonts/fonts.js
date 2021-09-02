import { createGlobalStyle } from 'styled-components';

import StencilStdBold from './StencilStdBold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Stencil Std Bold';
        src: local('Stencil Std Bold'), local('Stencil Std Bold'),
        url(${StencilStdBold}) format('woff2'),
        font-weight: 300;
        font-style: normal;
    }
`;