import {takeLatest, all, call, put} from 'redux-saga/effects'
import parametersRedux, {ParametersRedux} from '../redux/ParametersRedux'
import ApiSalon from "../ApiSalon";

const api = ApiSalon.create()

function * fetchbrands(api, {from}){
    console.log('saga reached')
    console.log('payload:', JSON.stringify(from))
    const brands = yield call(api.getBrands)
    if(brands?.length>0){
        yield put (parametersRedux.updateBrands(brands))
    }
}

function * fetchEvents(api, {from}){
    console.log('saga reached')
    console.log('payload:', JSON.stringify(from))
    const events = yield call(api.getEvents)
    if(Object.keys(events).length > 0){
        yield put (parametersRedux.updateEvents(events))
    }
}



export default function * root(){
    yield all([
        takeLatest(ParametersRedux.ASK_FOR_BRANDS, fetchbrands, api),
        takeLatest(ParametersRedux.ASK_FOR_EVENTS, fetchEvents, api)
    ])
}