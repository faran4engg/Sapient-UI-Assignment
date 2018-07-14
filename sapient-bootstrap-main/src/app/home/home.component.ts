import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  bodyText: string;
  image = '../../assets/img/bg-img.jpg';
  states = [
    { id: '1', name: 'MH' },
    { id: '2', name: 'MP' },
    { id: '3', name: 'Karnataka' }
  ];
  countries = [
    { id: '1', name: 'India' },
    { id: '2', name: 'USA' },
    { id: '3', name: 'UK' }
  ];
  constructor ( private modalService: ModalService, private router: Router ) {
  }

  ngOnInit () {
    this.bodyText = 'This text can be updated in modal 1';
  }
  openModal ( id: string ) {
    this.modalService.open( id );
  }

  closeModal ( id: string ) {
    this.modalService.close( id );
  }
  onFileSelect ( event ) {
    const reader = new FileReader();
    reader.readAsDataURL( event.target.files.item( 0 ) );
    reader.onload = () => {
      this.image = reader.result;
    };
  }

  onSubmit ( data ) {
    console.log( data );
    this.closeModal( 'custom-modal-1' );
    this.router.navigate( ['/profile'] );
  }
}
