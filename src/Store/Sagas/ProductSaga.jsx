import {takeEvery,put} from "redux-saga/effects"
import {ADD_PRODUCT,ADD_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED} from "../Constants"
import { createProductAPI,getProductAPI,deleteProductAPI,updateProductAPI} from "../Service"

function* createProductSaga(action) //excuter
{
    let response = yield createProductAPI(action.payload)
    yield put({ type: ADD_PRODUCT_RED, data: response })
}
function* getProductSaga() //excuter
{
    let response = yield getProductAPI()
    yield put({ type: GET_PRODUCT_RED, data: response })
}
function* deleteProductSaga(action) //excuter
{
    let response = yield deleteProductAPI(action.payload)
    yield put({ type: DELETE_PRODUCT_RED, data: response })
}
function* updateProductSaga(action) //excuter
{
    let response = yield updateProductAPI(action.payload)
    yield put({ type:UPDATE_PRODUCT_RED, data: response })
}

export function* productSaga()//watcher
{
    yield takeEvery(ADD_PRODUCT,createProductSaga)
    yield takeEvery(GET_PRODUCT,getProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga)

}