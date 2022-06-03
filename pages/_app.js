
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from './theme'

function MyApp({ Component, pageProps }) {
  return( 
    <ThemeProvider theme={theme}><CssBaseline>
      <Component {...pageProps} />
      </CssBaseline>
      </ThemeProvider>
    

  )
}

export default MyApp
