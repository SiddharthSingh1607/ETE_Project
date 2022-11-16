import React from 'react'

export default function Reviews() {
  return (

    <>



      <div id="carouselExampleIndicators" data-aos="fade-left" data-aos-duration="1000" className="p-3 review carousel slide " data-bs-ride="true">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"> </button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>

        </div>
        <div className="carousel-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <div className="carousel-item active">

            <img src="https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              class="reimg"

              alt="Destination"
              loading="lazy"
            />



          </div>


          <div className="carousel-item ">

            <img src="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80"
              class=""

              alt="Destination"
              loading="lazy"
            />



          </div>
          <div className="carousel-item ">

            <img src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class=""

              alt="Destination"
              loading="lazy"
            />



          </div>
          <div className="carousel-item ">

            <img src="https://wallpaperaccess.com/full/288727.jpg"
              class=""

              alt="Destination"
              loading="lazy"
            />



          </div>

          <div className="carousel-item ">

            <img src="https://wallpaperaccess.com/full/288742.jpg"
              class=""

              alt="Destination"
              loading="lazy"
            />



          </div>






        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div></>
  )
}
