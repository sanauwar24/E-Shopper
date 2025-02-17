import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../Store/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../Store/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../Store/ActionCreators/BrandActionCreators"
import { useParams } from 'react-router-dom'
export default function Shop() {

	var{maincat} = useParams();
	var [mc, setmc] = useState(maincat)
	var [sc, setsc] = useState("All")
	var [br, setbr] = useState("All")
 
	var [min, setmin] = useState(1)
	var [max, setmax] = useState(1000)

	var [shopproduct, setshopproduct] = useState([])
	let product = useSelector((state) => state.ProductStateData)
	var maincategory = useSelector((state) => state.MaincategoryStateData)
	var subcategory = useSelector((state) => state.SubcategoryStateData)
	var brand = useSelector((state) => state.BrandStateData)
	product.reverse()

	let dispatch = useDispatch();

	function getSelected(mc, sc, br) {
		if (mc === 'All' && sc === 'All' && br === 'All') {
			setshopproduct(product)
		}
		else if (mc !== 'All' && sc === 'All' && br === 'All') {
			setshopproduct(product.filter((item) => item.maincategory === mc))
		}
		else if (mc === 'All' && sc !== 'All' && br === 'All') {
			setshopproduct(product.filter((item) => item.subcategory === sc))
		}
		else if (mc === 'All' && sc === 'All' && br !== 'All') {
			setshopproduct(product.filter((item) => item.brand === br))
		}
		else if (mc !== 'All' && sc !== 'All' && br === 'All') {
			setshopproduct(product.filter((item) => item.maincategory===mc && item.subcategory===sc))
		}
		else if (mc !== 'All' && sc === 'All' && br !== 'All') {
			setshopproduct(product.filter((item) => item.maincategory===mc && item.brand===br))
		}
		else if (mc === 'All' && sc !== 'All' && br !== 'All') {
			setshopproduct(product.filter((item) => item.subcategory===sc && item.brand===br))
		}
		else 
		{
			setshopproduct(product.filter((item)=>item.maincategory ===mc && item.subcategory===sc && item.brand===br))
		}
	}


	function getFilter(input) {
		// console.log(input)
		if (input.mc) {
			setmc(input.mc)
			getSelected(input.mc, sc, br)
		}
		else if (input.sc) {
			setsc(input.sc)
			getSelected(mc, input.sc, br)
		}
		else {
			setbr(input.br)
			getSelected(mc, sc, input.br)
		}
	}

	function getPriceFilterData(min,max)
	{
  setshopproduct(product.filter((item)=>item.finalprice>=min && item.finalprice<=max))
	}
 
	function getPriceFilter(e)
	{
		if(e.target.value==="min")
		{
		setmin(e.target.value)
	    getPriceFilterData(e.target.value,max)
		}
		else 
		{
			setmax(e.target.value)
			getPriceFilterData(min,e.target.value)
		}
	}

	function getAllData() {
		dispatch(getProduct())
		dispatch(getMaincategory())
		dispatch(getSubcategory())
		dispatch(getBrand())
		if(maincat==="All")
		setshopproduct(product)
	   else 
          setshopproduct(product.filter((item)=>item.maincategory===maincat))
	}
	useEffect(() => {
		getAllData()
	}, [])
	return (
		<>
			{/* <div class="hero-wrap hero-bread" style={{backgroundImage:"url('assets/images/bg_6.jpg')"}}>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
          <p class="breadcrumbs"><span class="mr-2"><a href="/">Home</a></span> <span>Shop</span></p>
          <h1 class="mb-0 bread">Shop</h1>
          </div>
        </div>
      </div>
    </div> */}

			<section className="ftco-section btn-light">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-10 order-md-last">
							<div className="row">
								{

									shopproduct.map((item, index) => {
										return <div key={index} className="col-sm-12 col-md-6 col-lg-3  d-flex">
											<div className="product d-flex flex-column">
												<a href={`/assets/productImages/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`/assets/productImages/${item.pic1}`} style={{ height: "250px" }} alt="" />
													<span className='brand'>{item.brand}</span>
													<span className='status'>{item.discount}%off</span>
													<div className="overlay"></div>
												</a>
												<div className="text py-3 pb-4 px-3">

													<h3><a href="#">{item.name}</a></h3>
													<div className="pricing">
														<p className="price"><span>&#8377;{item.baseprice}</span><span className='price-sale'>After Discount &#8377;{item.finalprice}</span></p>
													</div>
													<p className="bottom-area d-flex px-3">
														<a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></a>
														<a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></a>
													</p>
												</div>
											</div>
										</div>
									})
								}
							</div>
							<div className="row mt-5">
								<div className="col text-center">
									<div className="block-27">
										<ul>
											<li><a href="#">&lt;</a></li>
											<li className="active"><span>1</span></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#">5</a></li>
											<li><a href="#">&gt;</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4 col-lg-2">
							<div className="sidebar">
								<div className="sidebar-box-2">
									<h2 className="heading">Categories</h2>
									<div className="fancy-collapse-panel">
										<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
											<div className="panel panel-default">
												<div className="panel-heading" role="tab" id="headingOne">
													<h4 className="panel-title">
														<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Maincategory
														</a>
													</h4>
												</div>
												<div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
													<div className="panel-body">
														<ul>
															<li><button className='btn btn-light' onClick={() => getFilter({ mc: 'All' })}>All</button></li>
															{
																maincategory.map((item, index) => {
																	return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ mc: item.name })}>{item.name}</button></li>
																})
															}
														</ul>
													</div>
												</div>
											</div>
											<div className="panel panel-default">
												<div className="panel-heading" role="tab" id="headingTwo">
													<h4 className="panel-title">
														<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Subcategory
														</a>
													</h4>
												</div>
												<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
													<div className="panel-body">
														<ul>
															<li><button className='btn btn-light' onClick={() => getFilter({ sc: 'All' })}>All</button></li>
															{
																subcategory.map((item, index) => {
																	return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ sc: item.name })}>{item.name}</button></li>
																})
															}
														</ul>
													</div>
												</div>
											</div>
											<div className="panel panel-default">
												<div className="panel-heading" role="tab" id="headingThree">
													<h4 className="panel-title">
														<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Brand
														</a>
													</h4>
												</div>
												<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
													<div className="panel-body">
														<ul>
															<li><button className='btn btn-light' onClick={() => getFilter({ br: 'All' })}>All</button></li>
															{
																brand.map((item, index) => {
																	return <li key={index}><button className='btn btn-light' onClick={() => getFilter({ br: item.name })}>{item.name}</button></li>
																})
															}
														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="sidebar-box-2">
									<h2 className="heading">Price Range</h2>
									<form method="post" className="colorlib-form-2">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<label for="guests">Price from:</label>
													<div className="form-field">
														<i className="icon icon-arrow-down3"></i>
														<input type='number' name='min' value={min} className='form-control'
														onChange={getPriceFilter}/>
													</div>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label for="guests">Price to:</label>
													<div className="form-field">
														<i className="icon icon-arrow-down3"></i>
														<input type='number' name='max' value={max} className='form-control'
														onChange={getPriceFilter}/>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
