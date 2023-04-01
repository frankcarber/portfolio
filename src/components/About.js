import React from "react";
import './About.css';

export default function About() {
    return (
 
      <section class = "fit" id="about">
          <div className="centered">
            <p className="text">
              inspired by nostalgic // irreverant visual design.
            </p>
          </div>

          <div className='bg-image hover-zoom'>
          <div class="tenor-gif-embed" data-postid="22025093" data-share-method="host" data-aspect-ratio="1.04918" data-width="100%"><a href="https://tenor.com/view/lpscurse-gif-22025093">Lpscurse Sticker</a>from <a href="https://tenor.com/search/lpscurse-stickers">Lpscurse Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>          </div>

          <div className="centered">
            <a href = "#project-anchor">
              <p className="text">
                ↓ explore my projects below ↓
              </p>        
            </a>
        </div>

      </section>

    );
  }