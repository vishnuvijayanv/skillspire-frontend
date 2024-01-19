import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>

<div className='container justify-content-center' style={{backgroundColor:'grey'}}>
      <hr />
        <div className="row border " >
          <hr style={{color:'black'}} />
        <div className="col-lg-3  d-flex flex-column justify-content-center text-center " style={{textAlign:'justify'}}>
            <h4  style={{color:'yellowgreen'}}>Categories</h4>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://angular.io/'}>Graphics & Design</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://react.dev/'}>Digital Marketing</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=fd555f7038f51d275d373a2c6e627e82'}>Writing & Translation</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://nodejs.org/en'}>Video & Animation </Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://angular.io/'}>Music & Audio</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://react.dev/'}>Programming & Tech</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=fd555f7038f51d275d373a2c6e627e82'}>Data</Link>

          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-center text-center">
            <h4  style={{color:'yellowgreen'}}>Categories</h4>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://angular.io/'}>Graphics & Design</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://react.dev/'}>Digital Marketing</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=fd555f7038f51d275d373a2c6e627e82'}>Writing & Translation</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://nodejs.org/en'}>Video & Animation </Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://angular.io/'}>Music & Audio</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://react.dev/'}>Programming & Tech</Link>
            <Link style={{textDecoration:'none',color:'black'}} to={'https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=bing&utm_campaign=search_bs_pl_evergreen_atlas_core_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=415204524&adgroup=1207264237113792&msclkid=fd555f7038f51d275d373a2c6e627e82'}>Data</Link>

          </div>
          <div className="col-lg-3 d-flex flex-column text-center ">
          <h3  style={{color:'yellowgreen'}}>Guides</h3>
        <Link to={'https://react.dev/'} style={{color:'black' ,textDecoration:'none'}}>Home</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{color:'black' ,textDecoration:'none'}}>Login</Link>
        <Link to={'https://bootswatch.com/'} style={{color:'black' ,textDecoration:'none'}}>Register</Link>

          </div>
          <div className="col-lg-3 d-flex flex-column text-center">
          <h3  style={{color:'yellowgreen'}}>Contact Us</h3>
         <div>
         <Link style={{textDecoration:'none',color:'black'}} to={''}> <i class="fa-solid fa-phone me-3"></i> +91 7306604382</Link><br />
         <Link style={{textDecoration:'none',color:'black'}} to={''}> <i class="fa-solid fa-envelope me-3"></i>skilspire@gmail.com</Link>

         </div>
         <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-5 mt-3 text-center'>
m  
         </div>
         
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 d-flex justify-content-center">
          <p> Copyright ©  2023,All Rights ® Reserverd by <span className='text-primary'>nuɥsıΛ</span></p>

          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer