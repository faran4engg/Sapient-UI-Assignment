import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear;
  ngOnInit() {
    // always showing current year -- not hardcoded 2014 :)
    this.currentYear = new Date().getFullYear();
  }

}
