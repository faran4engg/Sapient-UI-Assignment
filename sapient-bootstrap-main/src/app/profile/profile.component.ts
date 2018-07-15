import { StorageService } from './../services/storage.service';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData;
  constructor(private modalService: ModalService, private storageService: StorageService) { }

  ngOnInit() {
    this.formData = JSON.parse(localStorage.getItem('formData'));
    console.log(this.formData);

    this.storageService.watchStorage().subscribe((data: string) => {
      this.formData = JSON.parse( this.storageService.getItem('formData') ) ;
      console.log(this.formData);
      // console.log(data);

    });
  }

  onFileSelect(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {

      this.formData.image = reader.result;
      this.storageService.setItem('formData', JSON.stringify(this.formData));
    };
  }
  openModal(id: string) {
    this.modalService.open(id);
  }



}
