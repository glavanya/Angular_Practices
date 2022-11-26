import { Component, OnInit,Input } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PDFDocumentLoadingTask } from 'ng2-pdf-viewer';
// import { PDFAnnotationData } from 'pdfjs-dist';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import PSPDFKit from "pspdfkit";


@Component({
  selector: 'app-ex16pdfjson1',
  templateUrl: './ex16pdfjson1.component.html',
  styleUrls: ['./ex16pdfjson1.component.css']
})
export class Ex16pdfjson1Component implements OnInit {

  ngAfterViewInit() {
		PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/Document.pdf",
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;
		});

  }
  ngOnInit(): void {
  }

  

}
