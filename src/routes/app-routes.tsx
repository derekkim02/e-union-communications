import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import ServicesPage from '@/pages/services'
import ContactPage from '@/pages/contact'

const AppRoutes = () => {
	return (
		<>
			<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
		</>
  )
}

export default AppRoutes