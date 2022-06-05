
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from './theme'

function MyApp({ Component, pageProps }) {

  const getLayout= Component.getLayout || ((page)=>page)
  return( 
    <ThemeProvider theme={theme}><CssBaseline>
      {getLayout(<Component {...pageProps} />)}
      </CssBaseline>
      </ThemeProvider>
    

  )
}

export default MyApp
