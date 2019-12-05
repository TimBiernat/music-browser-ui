# music-browser-ui

## Web-based music player suitable for mobile use

---
Intuitive browsing, playing (start/pause/resume) and volume control.

Presents tunes in nested tree hierarchy: genre/artist/album/title.

<img src="screen-shot.png" width="300"/>

---

Leverages [music-browser-api](https://github.com/TimBiernat/music-browser-api) backend that loads, parses and serves up tunes from local filesystem.

Built with Angular framework using Material Design.

Deployment:

* npm install
* ng build --prod
* (setup corresponding [music-browser-api project](https://github.com/TimBiernat/music-browser-api))
* copy all files from dist/music-browser-ui to music-browser project public directory
* startup music-browser (npm start)
* point your mobile web browser to to http://{host}:{port}