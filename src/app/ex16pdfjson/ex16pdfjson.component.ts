import { Component, OnInit } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';
import html2canvas from 'html2canvas';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-ex16pdfjson',
  templateUrl: './ex16pdfjson.component.html',
  styleUrls: ['./ex16pdfjson.component.css']
})
export class Ex16pdfjsonComponent implements OnInit {
  pdfSrc: string='/assets/sample2.pdf';
  isPdfUploaded!: boolean;
  totalPages!: number;
  currentpage!: number;
  isCropImage!: boolean;
  cropper: any;

  public uploadFile(event:any) {
    let $img: any = document.querySelector('#upload-doc');
    if(event.target.files[0].type == 'assets/sample.pdf'){
      if (typeof (FileReader) !== 'undefined') {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.pdfSrc = e.target.result;
        };
        this.isPdfUploaded = true;
        reader.readAsArrayBuffer($img.files[0]);
      }
    } else{
      alert('Please upload pdf file')
    }
 }

 afterLoadComplete(pdf: PDFDocumentProxy) {
  this.totalPages = pdf.numPages;
}
public previous() {
  if (this.currentpage > 0) {
    if (this.currentpage == 1) {
      this.currentpage = this.totalPages;
    } else {
      this.currentpage--;
    }
  }
}

public next() {
  if (this.totalPages > this.currentpage) {
    this.currentpage = this.currentpage + 1 ;
  } else {
    this.currentpage = 1;
  }
}
public crop() {
  html2canvas(document.querySelector(".pdf-container") as HTMLElement).then((canvas: any) => {
    let ctx = canvas.getContext('2d');
    ctx.scale(3, 3);
    let image = canvas.toDataURL("image/png").replace("image/png", "image/png");
    $("#cropper-img").attr('src', image);
    $('#cropper-img').addClass('ready');
    this.isCropImage = true
    let cropImg: any = document.getElementById('cropper-img');
    this.cropper = new Cropper(cropImg, {
      zoomable: true,
      background: false,
      guides: false,
      highlight: false,
      movable: false,
      ready: (e: any) => {
        let cropper = this.cropper;
      },
      crop: (e: any) => {
      }
    });
  })
}
public zoomOut() {
  this.cropper.zoom(0.1)
}
public zoomIn() {
  this.cropper.zoom(-0.1)
}
public onRange(event: any) {
  this.cropper.zoomTo(event.target.value)
}
public onRotate() {
  this.cropper.rotate(90)
}


  ngOnInit(): void {
  }

}
