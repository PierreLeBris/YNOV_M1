import axios from 'axios';

export const CALL_HARRY = 'CALL_HARRY';

export const callHarry = payload => ({
    type: callHarry,
    value: payload
})

export const callApi = () => dispatch => {
    axios.get('https://hp-api.herokuapp.com/api/characters').then((response) =>{
        dispatch(callHarry(response.data));
    })
    console.log(dispatch);
}