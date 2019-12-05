# music-browser-ui
## Web-based music player suitable for mobile use.
---
Intuitive browsing, playing (start/pause/resume) and volume control.

Presents tunes in tree hierarchy: genre/artist/album/title.

<img src="screen-shot.png" width="300"/>
---

Built with Angular framework and material design. Leverages music-browser backend that loads, parses and serves up tunes from local filesystem.

Deployment:
* ng build --prod
* (setup corresponding music-browsewr server project)
* copy all files from dist/music-browser-ui to music-browser project public directory
* startup music-browser (npm start)
* point your mobile web browser to to http://{host}:{port}