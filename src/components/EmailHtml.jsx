import { Email, Item, Span, A, Box, Image, renderEmail } from 'react-html-email'

import React from 'react'

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()

const sourceURL = 'https://raw.githubusercontent.com/chromakode/react-html-email/master/examples/kitchenSink.js'

const EmailHtml = (
  <Email title="DogGO" headCSS={css}>
    <Item>
      <Span fontSize={15}>Hello, world!</Span>
    </Item>
    <Item>
      <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
        <Item>
          <Span color="gray" lineHeight={20}>Generated by <A href="https://github.com/chromakode/react-html-email">react-html-email</A></Span>
          <Image data-mc-bar="bar" data-mc-baz="baz" alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/100px-React.js_logo.svg.png" width={100} height={100} />
          <A download={sourceURL} href={sourceURL}>Source code</A>
        </Item>
      </Box>
    </Item>
  </Email>
)

export default EmailHtml