import React from 'react'

function Rating() {
  return (
   <>
      <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
        <h4 className='text-center fw-bold 'style={{color:' #00A7AC'}}>CUSTOMER REVIEWS</h4>
        <h1 className='text-center fs-4'>Let’s Hear It From Them: What Our Customers Are Saying</h1>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6 border shadow">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
              <div className='d-flex'>
                <img src="https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg" width={'75px'} style={{borderRadius:'50%'}} alt="" />
                 <h5 className='fw-bold m-3'>Hiran Das</h5>
              </div>
              <div className='mt-3  d-flex'>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star  "></span>
                    <span class="fa fa-star  "></span>
                </div>
            </div>
            <div className="col-lg-12 mt-4">
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure, vitae eligendi ad facere adipisci. Cumque adipisci et ipsa, possimus laborum fugit voluptas mollitia rerum neque quam aut deleniti sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta assumenda libero voluptas magni non nulla distinctio rem blanditiis vel reiciendis temporibus error ullam, excepturi voluptatum! Neque ipsa minima perferendis at.</p>
            </div>
          </div>

        </div>
        <div className="col-lg-6 border shadow">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
              <div className='d-flex'>
                <img src="https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg" width={'75px'} style={{borderRadius:'50%'}} alt="" />
                 <h5 className='fw-bold m-3'>Hiran Das</h5>
              </div>
              <div className='mt-3  d-flex'>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star checked  "></span>
                    <span class="fa fa-star  "></span>
                    <span class="fa fa-star  "></span>
                </div>
            </div>
            <div className="col-lg-12 mt-4">
              <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iure, vitae eligendi ad facere adipisci. Cumque adipisci et ipsa, possimus laborum fugit voluptas mollitia rerum neque quam aut deleniti sed. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta assumenda libero voluptas magni non nulla distinctio rem blanditiis vel reiciendis temporibus error ullam, excepturi voluptatum! Neque ipsa minima perferendis at.</p>
            </div>
          </div>

        </div>
      </div>

       
   </>
  )
}

export default Rating