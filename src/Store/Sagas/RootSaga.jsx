import {all} from "redux-saga/effects"
import { maincategorySaga } from "./MaincategorySaga"
import { subcategorySaga } from "./SubcategorySaga"
import { productSaga } from "./ProductSaga"
import {brandSaga} from "./BrandSaga"

export default function* RootSaga()
{
    yield all([maincategorySaga(),subcategorySaga(),
        productSaga(),brandSaga()])
}