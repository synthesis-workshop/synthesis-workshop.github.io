import React from 'react';
import ReactPlayer from 'react-player';
import videos from '../../../shared/videos.json';

const YOUTUBE_THUMBNAIL_URL = "https://img.youtube.com/vi/{VID_ID}/0.jpg";
const YOUTUBE_WATCH_URL = "https://www.youtube.com/watch?v={VID_ID}";

export default () => {
    return (
        <>
            <section id="videos" class="videos">
                <div class="container">

                    <div class="section-title">
                        <h2>Videos</h2>
                    </div>

                    <div class="row">

                        <h4 className="pt-5">Total Synthesis Episodes</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <h4 className="pt-5">Named Reaction Episodes</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <h4 className="pt-5">Research Spotlight Episodes</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <h4 className="pt-5">Culture of Chemistry Episodes</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <h4>All Videos</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}