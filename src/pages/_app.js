
import { CssBaseline, ThemeProvider } from "@mui/material"
import theme from "./theme.css"

function MyApp({ Component, pageProps }) {

  const getLayout= Component.getLayout || ((page)=>page)
  return( 
    <ThemeProvider theme={theme}><CssBaseline/>
      {getLayout(<Component {...pageProps} />)}
      
      </ThemeProvider>
    

  )
}

export default MyApp
