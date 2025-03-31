export default function Home(){

    return(
    //     <div className="container col-xxl-8 px-4 py-5">
    //     <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    //       <div className="col-10 col-sm-8 col-lg-6">
    //         <img
    //           src="/public/image/WhatsApp Image 2025-03-25 at 19.06.08_40c3bbf5.jpg"
    //           className="d-block mx-lg-auto img-fluid"
    //           alt="Bootstrap Themes"
    //           width={700}
    //           height={500}
    //           id="image"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="col-lg-6">
    //         <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
    //           Responsive left-aligned hero with image
    //         </h1>
    //         <p className="lead">
    //           Quickly design and customize responsive mobile-first sites with
    //           Bootstrap, the world’s most popular front-end open source toolkit,
    //           featuring Sass variables and mixins, responsive grid system, extensive
    //           prebuilt components, and powerful JavaScript plugins.
    //         </p>
    //         <div className="d-grid gap-2 d-md-flex justify-content-md-start">
    //           <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
    //             Primary
    //           </button>
    //           <button type="button" className="btn btn-outline-secondary btn-lg px-4">
    //             Default
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

   <>  
          <section className="container mx-auto px-4 py-5 text-center text-lg-start">
            <div className="row align-items-center g-5">
              {/* Profile Image */}
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <img
                  src="/image/WhatsApp Image 2025-03-25 at 19.06.08_40c3bbf5.jpg" // Place your image inside /public/image/
                  className="img-fluid rounded-circle shadow-lg"
                  alt="Rahul Kumar - Portfolio"
                  width={350}
                  height={350}
                  loading="lazy"
                />
              </div>
      
              {/* Hero Content */}
              <div className="col-12 col-lg-6">
                <h1 className="display-4 fw-bold text-dark">
                  Hi, I'm <span className="text-primary">Rahul Kumar</span> 👋
                </h1>
                <p className="lead text-muted">
                  A passionate **Full-Stack Developer** specializing in **Spring Boot & modern web technologies**.
                  I love building scalable, high-performance applications and solving complex problems.
                </p>
      
                {/* Call to Action Buttons */}
                <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                  <a href="#projects" className="btn btn-primary btn-lg shadow-sm">
                    🚀 View My Work
                  </a>
                  <a href="#contact" className="btn btn-outline-dark btn-lg shadow-sm">
                    📩 Contact Me
                  </a>
                </div>
              </div>
            </div>
          </section>




        
    <section className="container px-4 py-5" id="projects">
      <h2 className="pb-2 border-bottom text-center">🚀 My Projects</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
        
        {/* Project 1 - Virtual Try-On App */}
        <div className="col">
          <div className="card shadow-sm project-card">
            <img
              src="/public/img1.jpg" 
              className="card-img-top"
              alt="Virtual Try-On App"
            />
            <div className="card-body">
              <h3 className="fs-4 text-body-emphasis">Virtual Try-On App</h3>
              <p className="text-muted">
                AI-powered web and mobile app allowing users to try outfits virtually before buying.
              </p>
              <a href="https://github.com/yourusername/virtual-tryon" className="btn btn-primary btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 - Smart Contact Manager */}
        <div className="col">
          <div className="card shadow-sm project-card">
            <img
              src="/public/img2.jpg" 
              className="card-img-top"
              alt="Smart Contact Manager"
            />
            <div className="card-body">
              <h3 className="fs-4 text-body-emphasis">Smart Contact Manager</h3>
              <p className="text-muted">
                A secure contact management system with authentication, search, and SMS integration.
              </p>
              <a href="https://github.com/yourusername/contact-manager" className="btn btn-primary btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 - Online Ride Booking System */}
        <div className="col">
          <div className="card shadow-sm project-card">
            <img
              src="/public/img3.jpg" 
              className="card-img-top"
              alt="Online Ride Booking"
            />
            <div className="card-body">
              <h3 className="fs-4 text-body-emphasis">Online Ride Booking</h3>
              <p className="text-muted">
                A Spring Boot-powered ride-hailing app with real-time tracking and payments.
              </p>
              <a href="https://github.com/yourusername/ride-booking" className="btn btn-primary btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover effect styling */}
      <style jsx>{`u
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>


</>



        );
      }
      
      
      
 
