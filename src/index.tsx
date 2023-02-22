import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  store  from './Redux/store'
import { Provider } from 'react-redux/es/exports'
import axios from 'axios'


axios.defaults.baseURL = "https://localhost:7225/api/"

const userInfo = localStorage.getItem("userInfo")

if(userInfo){
	const userData = JSON.parse(userInfo);
	const userToken = userData.Token
	axios.defaults.headers.common["Authorization"] = "bearer " + userToken
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	
)

reportWebVitals()


{/* <React.StrictMode></React.StrictMode> */}