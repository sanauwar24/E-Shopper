import {takeEvery,put} from "redux-saga/effects"
import {ADD_SUBCATEGORY,ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED} from "../Constants"
import { createSubcategoryAPI,getSubcategoryAPI,deleteSubcategoryAPI,updateSubcategoryAPI} from "../Service"

function* createSubcategorySaga(action) //excuter
{
    let response = yield createSubcategoryAPI(action.payload)
    yield put({ type: ADD_SUBCATEGORY_RED, data: response })
}
function* getSubcategorySaga() //excuter
{
    let response = yield getSubcategoryAPI()
    yield put({ type: GET_SUBCATEGORY_RED, data: response })
}
function* deleteSubcategorySaga(action) //excuter
{
    let response = yield deleteSubcategoryAPI(action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, data: response })
}
function* updateSubcategorySaga(action) //excuter
{
    let response = yield updateSubcategoryAPI(action.payload)
    yield put({ type:UPDATE_SUBCATEGORY_RED, data: response })
}

export function* subcategorySaga()//watcher
{
    yield takeEvery(ADD_SUBCATEGORY,createSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga)

}