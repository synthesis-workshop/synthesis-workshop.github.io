import React from 'react';

export default ({ title, link, url, episodeNumber, color }) => {
    return (
        <a href={link} class="video-thumbnail">
            <span>
                <img height="150px" width="200px" src={url} alt={title} />
                <p class="episode-title" style={{color}}>Episode {episodeNumber}: {title}</p>
            </span>
        </a>
    )
}