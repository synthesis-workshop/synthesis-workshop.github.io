import React from 'react';
import ReactPlayer from 'react-player';
import VideoThumbnail from '../../videoThumbnail';

import videos from '../../../shared/videos.json';

const VID_ID = "{VID_ID}";
const YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${VID_ID}/0.jpg`;
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${VID_ID}`;
const allVideos = [
    ...videos["total-synthesis"],
    ...videos["research-spotlight"],
    ...videos["named-reactions"],
    ...videos["culture-of-chemistry"]
].sort((a, b) => {
    return b.episodeNumber - a.episodeNumber;
});

export default () => {
    return (
        <>
            <section id="videos" class="videos">
                <div class="container">

                    <div class="section-title">
                        <h2>Videos</h2>
                    </div>

                    <div class="row">

                        {videos["total-synthesis"].length > 0 && (
                            <>
                                <h4 className="pt-5">Total Synthesis Episodes ({videos["total-synthesis"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["total-synthesis"].map(video => (
                                            <VideoThumbnail
                                                title={video.displayTitle}
                                                episodeNumber={video.episodeNumber}
                                                link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {videos["named-reactions"].length > 0 && (
                            <>
                                <h4 className="pt-5">Named Reaction Episodes ({videos["named-reactions"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["named-reactions"].map(video => (
                                            <VideoThumbnail
                                                title={video.displayTitle}
                                                episodeNumber={video.episodeNumber}
                                                link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {videos["research-spotlight"].length > 0 && (
                            <>
                                <h4 className="pt-5">Research Spotlight Episodes ({videos["research-spotlight"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["research-spotlight"].map(video => (
                                            <VideoThumbnail
                                                title={video.displayTitle}
                                                episodeNumber={video.episodeNumber}
                                                link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {videos["culture-of-chemistry"].length > 0 && (
                            <>
                                <h4 className="pt-5">Culture of Chemistry Episodes ({videos["culture-of-chemistry"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["culture-of-chemistry"].map(video => (
                                            <VideoThumbnail
                                                title={video.displayTitle}
                                                episodeNumber={video.episodeNumber}
                                                link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {allVideos.length > 0 && (
                            <>
                                <h4 className="pt-5">All Videos ({allVideos.length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {allVideos.map(video => (
                                            <VideoThumbnail
                                                title={video.displayTitle}
                                                episodeNumber={video.episodeNumber}
                                                link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </section>
        </>
    )
}