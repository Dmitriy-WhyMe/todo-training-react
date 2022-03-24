import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './components/Screens/Home/Home'
import Layout from './components/Layout/Layout'

ReactDOM.render(
	<React.StrictMode>
		<Layout>
			<Home />
		</Layout>
	</React.StrictMode>,
	document.getElementById('root')
)
