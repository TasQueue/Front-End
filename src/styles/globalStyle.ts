// 전체적으로 적용될 스타일

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
font-size: 62.5%; // 1rem = 10px 로 변경 한 것, 바꾼 이유는 사파리에서 폰트가 너무 작은것은 허용하지 않기 때문.
// 참고링크 = https://stackoverflow.com/questions/68790660/setting-root-font-size-not-affecting-rem-units-in-safari-for-margin-padding-et
// 128px => 12.8rem , 4px => 0.4rem
}

body {
    position: relative;
    background: white;
    background-color: ${(props) => props.theme.gray_50};
    margin: 0;
    padding: 0;
    font-family: -apple-system, sans-serif, Roboto;
    
}

.modal-open {
    overflow: hidden;
}

a{
  text-decoration: none;
  color: inherit;
}

button,p{
    all: unset;
}

button{
    cursor: pointer;
}

*{
    box-sizing: border-box;
}

:root{
    --top:9;
}

`;
