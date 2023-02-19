import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LOGOUT,
	USER_LOGIN_FAIL,
} from './userConstant'
import { RootState } from './store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const login =
	(
		email: String,
		password: String
	): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
	async (
		dispatch: ThunkDispatch<RootState, unknown, AnyAction>
	): Promise<void> => {
		//console.log(email)

		try {
			dispatch({
				type: USER_LOGIN_REQUEST,
			})

			const response = await axios
				.post('https://localhost:7225/api/User/Login', {
					email,
					password,
				})
				.then((response) => {
					alert('Login successfull')
					return response.data.detail
				})
				.catch((error) => {
					if (error.response.data.user) {
						alert(error.response.data.user)
					} else {
						alert(error)
					}
				})

			console.log(response)
			//alert('Login successfull')

			const userData = {
				Email: response.email,
				Token: response.token,
				//Password: response.password,
			}

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: userData,
			})

			localStorage.setItem('userInfo', JSON.stringify(userData))
		} catch (error) {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload:
					(error as any).response &&
					(error as any).response.data.message
						? (error as any).response.data.message
						: (error as any).message,
			})

			//alert('login failed')
		}
	}
