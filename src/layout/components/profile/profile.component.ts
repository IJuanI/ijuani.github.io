import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
    `
      .custom-txt {
        font-size: calc(4vw - 10px);
      }
      @media only screen and (max-width: 768px) {
        .custom-txt {
          font-size: 20px;
        }
      }
      .ghost-text {
        font-size: 0.5em;
        letter-spacing: 0.1em;
        position: absolute;
        margin-left: 15%;
      }
    `
  ]
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild('txt0', { read: ElementRef })
  txt0: ElementRef;

  txt0_X: 0;

  ngAfterViewInit() {
    this.txt0_X = this.txt0.nativeElement.offsetLeft;
  }
}
