import { ModalServiceService } from './../modal-service.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bodyText: string;

  constructor(private modalService: ModalServiceService) {
  }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}



