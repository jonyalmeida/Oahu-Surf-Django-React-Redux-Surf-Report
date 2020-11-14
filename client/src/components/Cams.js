import React from "react";

export default function Cams() {
    return (
        <div className='cams'>
            <div className='cams--webcam'>
                <iframe
                    title='pipeline'
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/DY5RYp4sxYc'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
                <h3>Banzai Pipeline</h3>
            </div>
            <div className='cams--webcam'>
                <iframe
                    title='waimea'
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/wnNrd-VjLsQ'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
                <h3>Waimea Bay</h3>
            </div>
            <div className='cams--webcam'>
                <iframe
                    title='waikiki'
                    width='560'
                    height='315'
                    src='https://www.youtube-nocookie.com/embed/08Zb4fN3JNU'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
                <h3>Waikiki Beach</h3>
            </div>
            <div className='cams--webcam'>
                <iframe
                    title='lahaina resort'
                    width='560'
                    height='315'
                    src='https://www.youtube-nocookie.com/embed/48YML7V3HMc'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
                <h3>Lahaina Resort</h3>
            </div>
        </div>
    );
}
