import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-link',
  templateUrl: './download-link.component.html',
  styleUrls: ['./download-link.component.css']
})
export class DownloadLinkComponent implements OnInit {

  url: String = null;
  filename: String = null;

  constructor() { }

  ngOnInit() {

  }

}