import React from 'react';
import videos from '../../../shared/videos.json';

export default () => {

    const allVideos = [
        ...videos["total-synthesis"],
        ...videos["research-spotlight"],
        ...videos["named-reactions"],
        ...videos["culture-of-chemistry"]
    ];

    return (
        <>
            <section id="counts" class="counts section-bg">
                <div class="container">

                    <div class="row counters">

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1.12K+</span>
                            <p>Subscribers</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">{allVideos.length}</span>
                            <p>Videos</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">14</span>
                            <p>Featured Guests</p>
                        </div>

                        <div class="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">14.3K+</span>
                            <p>Total Views</p>
                        </div>

                    </div>

                    {/* <div class="social-links text-center pt-3">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div> */}

                </div>
            </section>
        </>
    )
}