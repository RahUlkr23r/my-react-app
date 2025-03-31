
import React from "react";
class MyClassComponent extends React.Component {

    render(){
        return(
        <>
       <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div className="col-10 col-sm-8 col-lg-6">
    <img
      src="https://th.bing.com/th/id/OIP.9y7bItgIM8r-T_7zhZFYhgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      className="d-block mx-lg-auto img-fluid"
      alt="Bootstrap Themes"
      width={700}
      height={500}
      loading="lazy"
    />
  </div>
  <div className="col-lg-6">
    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
      Responsive left-aligned hero with image
    </h1>
    <p className="lead">
      Quickly design and customize responsive mobile-first sites with Bootstrap,
      the world’s most popular front-end open source toolkit, featuring Sass
      variables and mixins, responsive grid system, extensive prebuilt
      components, and powerful JavaScript plugins.
    </p>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
        Primary
      </button>
      <button type="button" className="btn btn-outline-secondary btn-lg px-4">
        Default
      </button>
    </div>
  </div>
</div>

        </>
        )
    }

   
}export default MyClassComponent