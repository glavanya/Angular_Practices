import { Component, OnInit } from '@angular/core';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-ex15pdfview',
  templateUrl: './ex15pdfview.component.html',
  styleUrls: ['./ex15pdfview.component.css']
})
export class Ex15pdfviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open("assets/i-191.pdf");
  }

}
