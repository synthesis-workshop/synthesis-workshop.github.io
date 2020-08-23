import React from 'react';
import ReactPlayer from 'react-player';
import VideoThumbnail from '../../videoThumbnail';

import {
    BLUE,
    RED,
    GREEN,
    YELLOW
} from '../../../shared/constants';
import videos from '../../../shared/videos.json';

const VID_ID = "{VID_ID}";
const YOUTUBE_THUMBNAIL_URL = `https://img.youtube.com/vi/${VID_ID}/0.jpg`;
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${VID_ID}`;
const allVideos = [
    ...videos["total-synthesis"].map(video => ({ ...video, type: "total-synthesis" })),
    ...videos["research-spotlight"].map(video => ({ ...video, type: "research-spotlight" })),
    ...videos["named-reactions"].map(video => ({ ...video, type: "named-reactions" })),
    ...videos["culture-of-chemistry"].map(video => ({ ...video, type: "culture-of-chemistry" }))
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

                        <h4>See the latest:</h4>
                        <div class="col-lg-12 col-md-12 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <ReactPlayer
                                controls={true}
                                url={YOUTUBE_WATCH_URL.replace(VID_ID, allVideos[0].videoId)}
                            />
                        </div>
                        <div class="mt-3 col-lg-12 col-md-12 d-flex align-items-stretch justify-content-center" data-aos="zoom-in" data-aos-delay="100">
                            <strong>Episode {allVideos[0].episodeNumber}: {allVideos[0].displayTitle}</strong>
                        </div>

                        {videos["total-synthesis"].length > 0 && (
                            <>
                                <h4 className="pt-5" style={{color: BLUE}}>Total Synthesis Episodes ({videos["total-synthesis"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["total-synthesis"].map(video => (
                                            <VideoThumbnail
                                                color={BLUE}
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
                                <h4 className="pt-5" style={{color: RED}}>Named Reaction Episodes ({videos["named-reactions"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["named-reactions"].map(video => (
                                            <VideoThumbnail
                                                color={RED}
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
                                <h4 className="pt-5" style={{color: GREEN}}>Research Spotlight Episodes ({videos["research-spotlight"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["research-spotlight"].map(video => (
                                            <VideoThumbnail
                                                color={GREEN}
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
                                <h4 className="pt-5" style={{color: YELLOW}}>Culture of Chemistry Episodes ({videos["culture-of-chemistry"].length})</h4>
                                <div class="col-lg-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div class="icon-box">
                                        {videos["culture-of-chemistry"].map(video => (
                                            <VideoThumbnail
                                                color={YELLOW}
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
                                        {allVideos.map(video => {
                                            let color = video.type === "total-synthesis" ? BLUE
                                            : video.type === "research-spotlight" ? GREEN
                                                : video.type === "named-reactions" ? RED
                                                    : YELLOW
                                            return (
                                                <VideoThumbnail
                                                    color={color}
                                                    title={video.displayTitle}
                                                    episodeNumber={video.episodeNumber}
                                                    link={YOUTUBE_WATCH_URL.replace(VID_ID, video.videoId)}
                                                    url={YOUTUBE_THUMBNAIL_URL.replace(VID_ID, video.videoId)}
                                                />
                                            )
                                        })}
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