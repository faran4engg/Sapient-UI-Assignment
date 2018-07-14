import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData;
  constructor() { }

  ngOnInit() {
    this.formData = JSON.parse(localStorage.getItem('formData'));
    console.log(this.formData);
  }

}
