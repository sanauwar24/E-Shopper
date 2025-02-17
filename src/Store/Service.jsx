//maincategory api
export async function createMaincategoryAPI(data)
{
    var res = await fetch("http://localhost:8000/maincategory",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}


export async function getMaincategoryAPI()
{
    var res = await fetch(`http://localhost:8000/maincategory`,
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        }
    )
    return await res.json()
} 


export async function updateMaincategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/maincategory/`+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 



export async function deleteMaincategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/maincategory/`+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}

//subcategory api 


export async function createSubcategoryAPI(data)
{
    var res = await fetch("http://localhost:8000/subcategory",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}


export async function getSubcategoryAPI()
{
    var res = await fetch(`http://localhost:8000/subcategory`,
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        }
    )
    return await res.json()
} 


export async function updateSubcategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/subcategory/`+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 



export async function deleteSubcategoryAPI(data)
{
    var res = await fetch(`http://localhost:8000/subcategory/`+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 

//brand api 
export async function createBrandAPI(data)
{
    var res = await fetch("http://localhost:8000/brands",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}


export async function getBrandAPI()
{
    var res = await fetch(`http://localhost:8000/brands`,
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        }
    )
    return await res.json()
} 


export async function updateBrandAPI(data)
{
    var res = await fetch(`http://localhost:8000/brands/`+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 



export async function deleteBrandAPI(data)
{
    var res = await fetch(`http://localhost:8000/brands/`+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 

//product api 
export async function createProductAPI(data)
{
    var res = await fetch("http://localhost:8000/Product",
        {
            method:"post",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
}


export async function getProductAPI()
{
    var res = await fetch(`http://localhost:8000/Product`,
        {
            method:"get",
            headers:
            {
                "content-type":"application/json"
            }
        }
    )
    return await res.json()
} 


export async function updateProductAPI(data)
{
    var res = await fetch(`http://localhost:8000/Product/`+data.id,
        {
            method:"put",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 



export async function deleteProductAPI(data)
{
    var res = await fetch(`http://localhost:8000/Product/`+data.id,
        {
            method:"delete",
            headers:
            {
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    return await res.json()
} 