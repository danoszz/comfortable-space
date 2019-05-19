import { createGlobalStyle } from "styled-components"
import { colors } from "./variables"
import { fontFiles, fontAmerigo, fontFormular } from "./fonts"
import "./normalize.css"

export const TypographyStyles = createGlobalStyle`
@font-face {
  font-family: 'AmerigoBT-BoldA';
  src: url("${fontFiles.AmerigoBTBoldEOT}"), 
    url("${fontFiles.AmerigoBTBoldEOT}?#iefix") format('embedded-opentype'),
    url("${fontFiles.AmerigoBTBoldWOFF2}") format('woff2'), 
    url("${fontFiles.AmerigoBTBoldWOFF}") format('woff'), 
    url("${fontFiles.AmerigoBTBoldTT}") format('truetype'), 
    url("${fontFiles.AmerigoBTBoldSVG}#AmerigoBT-BoldA") format('svg');
  font-weight: normal;
  font-style: normal;
}

/* Copyright (c) 2014-2016 by Vyacheslav Kirilenko, Gayane Bagdasaryan. All rights reserved. */

@font-face {
  font-family: 'Formular';
  src: url("${fontFiles.FormularRegularEOT}"), 
    url("${fontFiles.FormularRegularEOT}?#iefix") format('embedded-opentype'), 
    url("${fontFiles.FormularRegularWOFF2}") format('woff2'), 
    url(".${fontFiles.FormularRegularWOFF}") format('woff'), 
    url("${fontFiles.FormularRegularTTF}") format('truetype'), 
    url("${fontFiles.FormularRegularSVG}#Formular") format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: fallback; 
}

html {
  font-family: ${fontFormular}, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}

body {
  text-rendering: geometricPrecision;
  font-family: ${fontFormular};
  background-color: black;
}
h1, h2, h3, h4, h5, h6 {
  font-family:  ${fontAmerigo};
}
h1 {
  margin-bottom: 0;
}

h1 span, p span {
  color: ${colors.green};
}

`
