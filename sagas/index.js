import {takeLatest, all, call, put} from 'redux-saga/effects'
import parametersRedux, {ParametersRedux} from '../redux/ParametersRedux'
import ApiFood from '../ApiFood'

const api = ApiFood.create()

function * fetchFoods(api, {categorie}){
    console.log('saga reached')
    console.log('payload:', JSON.stringify(categorie))
    const foods = yield call(api.getFoods)
    console.log('foods from saga:', JSON.stringify(foods))
    if(foods?.length>0){
        yield put (parametersRedux.updateMonTitre(foods[0].titre))
    }
}

export default function * root(){
    yield all([
        takeLatest(ParametersRedux.ASK_FOR_FOODS, fetchFoods, api)
    ])
}