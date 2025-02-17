import {takeEvery,put} from "redux-saga/effects"
import {ADD_BRAND,ADD_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED} from "../Constants"
import { createBrandAPI, deleteBrandAPI, getBrandAPI, updateBrandAPI } from "../Service"

function* createBrandSaga(action) //excuter
{
    let response = yield createBrandAPI(action.payload)
    yield put({ type: ADD_BRAND_RED, data: response })
}
function* getBrandSaga() //excuter
{
    let response = yield getBrandAPI()
    yield put({ type: GET_BRAND_RED, data: response })
    
}

function* deleteBrandSaga(action) //excuter
{
    yield deleteBrandAPI(action.payload)
    yield put({ type: DELETE_BRAND_RED, data: action.payload})
    
}
function* updateBrandSaga(action) {
    yield updateBrandAPI(action.payload)
    yield put({ type: UPDATE_BRAND_RED, data: action.payload })
}
export function* brandSaga()//watcher
{
    yield takeEvery(ADD_BRAND,createBrandSaga)
    yield takeEvery(GET_BRAND,getBrandSaga)
    yield takeEvery(DELETE_BRAND,deleteBrandSaga)
    yield takeEvery(UPDATE_BRAND,updateBrandSaga)

}