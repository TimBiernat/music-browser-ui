import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MusicNode {
    type: string; // genre, artist, album, title
    name: string;
    id?: number;
    children?: MusicNode[];
}
const API_URL = '';

@Injectable({
    providedIn: 'root',
})
export class TunesService {
    constructor(private http: HttpClient) { }

    getTunes(): Observable<MusicNode[]> {
        return this.http.get<MusicNode[]>(API_URL + '/api/v1/tree');
    }

    play(id: number) {
        return this.http.post(API_URL + '/api/v1/play/' + id, null).subscribe(res => { });

    }

    pause() {
        return this.http.post(API_URL + '/api/v1/pause', null).subscribe(res => { });
    }

    resume() {
        return this.http.post(API_URL + '/api/v1/resume', null).subscribe(res => { });
    }

    stop() {
        return this.http.post(API_URL + '/api/v1/stop', null).subscribe(res => { });
    }

    volume(level: number) {
        return this.http.post(API_URL + '/api/v1/volume/' + level, null).subscribe(res => { });
    }
}
