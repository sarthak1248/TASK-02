import { WEATHER_DATA_REQUEST, WEATHER_DATA_RESET } from '../constant'
import axios from 'axios'


export const weatherAPI = () => async (dispatch) => {
    try {
        const config = {
            header: { 
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ghaziabad&appid=87c948d44a0dd452a319d8043213d2e0&units=metric', {}, config)
        dispatch({ type: WEATHER_DATA_REQUEST, payload: data })
    }
    catch (error) {
        dispatch({ 
            type: WEATHER_DATA_RESET, 
            payload: error
        })
    }
}