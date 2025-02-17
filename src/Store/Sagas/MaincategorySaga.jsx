import {takeEvery,put} from "redux-saga/effects"
import {ADD_MAINCATEGORY,ADD_MAINCATEGORY_RED, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_RED, GET_MAINCATEGORY, GET_MAINCATEGORY_RED, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_RED} from "../Constants"
import { createMaincategoryAPI,deleteMaincategoryAPI,getMaincategoryAPI, updateMaincategoryAPI} from "../Service"

function* createMaincategorySaga(action) //excuter
{
    let response = yield createMaincategoryAPI(action.payload)
    yield put({ type: ADD_MAINCATEGORY_RED, data: response })
}
function* getMaincategorySaga() //excuter
{
    let response = yield getMaincategoryAPI()
    yield put({ type: GET_MAINCATEGORY_RED, data: response })
}
function* deleteMaincategorySaga(action) //excuter
{
    let response = yield deleteMaincategoryAPI(action.payload)
    yield put({ type: DELETE_MAINCATEGORY_RED, data: response })
}
function* updateMaincategorySaga(action) //excuter
{
    let response = yield updateMaincategoryAPI(action.payload)
    yield put({ type:UPDATE_MAINCATEGORY_RED, data: response })
}

export function* maincategorySaga()//watcher
{
    yield takeEvery(ADD_MAINCATEGORY,createMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)

}