import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
  ngOnInit(): void {}

  onButtonGroupClick(event: { target: any; srcElement: any }) {
    let clickedElement = event.target || event.srcElement;
    if (clickedElement.nodeName === 'BUTTON') {
      let isCertainButtonAlreadyActive =
        clickedElement.parentElement.querySelector('.active');

      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }

      clickedElement.className += ' active';
    }
  }
}
