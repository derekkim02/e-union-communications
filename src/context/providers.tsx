import { ThemeProvider } from '@/context/theme-provider'
import { BrowserRouter } from 'react-router-dom'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
		<BrowserRouter>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				{children}
			</ThemeProvider>
		</BrowserRouter>
  )
}

export default Providers