import React from "react";
import videos from "../../../shared/videos.json";

export default () => {
  const allVideos = [
    ...videos["total-synthesis"],
    ...videos["research-spotlight"],
    ...videos["named-reactions"],
    ...videos["culture-of-chemistry"],
  ];

  return (
    <>
      <section id="counts" className="counts section-bg">
        <div className="container">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">{videos.counts.subscribers}</span>
              <p>Subscribers</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">{allVideos.length}</span>
              <p>Videos</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">
                {videos.counts.featuredGuests}
              </span>
              <p>Featured Guests</p>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span data-toggle="counter-up">{videos.counts.totalViews}</span>
              <p>Total Views</p>
            </div>
          </div>

          {/* <div className="social-links text-center pt-3">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div> */}
        </div>
      </section>
    </>
  );
};
