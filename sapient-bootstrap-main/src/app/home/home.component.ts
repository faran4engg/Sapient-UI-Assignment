import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image = '../../assets/img/avatar.png';
  states = [
    // { id: '0', name: 'Select State' },
    { id: 'MH', name: 'MH' },
    { id: 'DL', name: 'DL' },
    { id: 'TN', name: 'TN' }
  ];
  countries = [
    // { id: '0', name: 'Select Country' },
    { id: 'India', name: 'India' },
    { id: 'USA', name: 'USA' },
    { id: 'UK', name: 'UK' }
  ];
  addrType = [
    // { id: '0', name: 'Select Address Type' },
    { id: 'Home', name: 'Home' },
    { id: 'Company', name: 'Company' }
  ];

  items = ['Pizza', 'Pasta', 'Parmesan'];
  constructor(private modalService: ModalService, private router: Router) {
  }

  ngOnInit() {

  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  onFileSelect(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {
      this.image = reader.result;
    };
  }

  onSubmit(data) {
    console.log(data);
    localStorage.setItem('formData', JSON.stringify(data.value));

    this.closeModal('custom-modal-1');
    this.router.navigate(['/profile']);
  }


}
