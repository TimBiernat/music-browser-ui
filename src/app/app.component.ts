
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MusicNode, TunesService } from './tunes.service';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  playing: boolean;
  paused: boolean;
  id = -1;
  volumeLevel = 2;
  muted: boolean;
  title = 'music-browser-ui';
  tree: MusicNode[] = [];
  treeControl = new FlatTreeControl<FlatNode>(node => node.level, node => node.expandable);
  private transformer = (node: MusicNode, level: number) => {

    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id: node.id,
      level: level
    };
  }

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private service: TunesService) {
  }

  ngOnInit() {
    this.service.getTunes().subscribe(tree => this.dataSource.data = tree);
  }

  click(id: number) {
    if (this.id !== -1 && this.id !== id) {
      this.service.stop();
      this.playing = false;
      this.paused = false;
      this.id = -1;
      return;
    }
    if (!this.playing) {
      this.service.play(id);
      this.playing = true;
      this.id = id;
      this.service.volume(this.volumeLevel);
    } else {
      if (this.paused) {
        this.service.resume();
        this.paused = false;
      } else {
        this.service.pause();
        this.paused = true;
      }
    }
  }

  volumeUp() {
    this.service.volume(++this.volumeLevel);
  }

  volumeDown() {
    this.service.volume(--this.volumeLevel);
  }

  mute() {
    if (!this.muted) {
      this.service.volume(0);
      this.muted = true;
    } else {
      this.service.volume(this.volumeLevel);
      this.muted = false;
    }
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
