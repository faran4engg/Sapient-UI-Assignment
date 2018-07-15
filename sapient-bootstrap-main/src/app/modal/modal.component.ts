import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { FormControl } from '../../../node_modules/@angular/forms';
import { StorageService } from '../services/storage.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  private element: any;
  image = '../../assets/img/avatar.png';
  age = 25;
  address = '';
  // registerForm: FormControl;

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

  tags = [
    { value: 'Cricket', display: 'Cricket' },
    { value: 'Football', display: 'Football' },
    { value: 'Hockey', display: 'Hockey' }
  ];
  profileData;
  addr1: any;
  addr2: any;
  country: any;
  firstName: any;
  lastName: any;
  newsLetter: any;
  number: any;
  state: any;
  email: any;
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: ModalService, private el: ElementRef, private router: Router, private route: ActivatedRoute, private storageService: StorageService) {
    this.element = el.nativeElement;


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
  selectAge(e) {
    // console.log(e.target.value);
    this.age = e.target.value;
  }
  onSubmit(data) {
    // console.log(data);
    this.storageService.setItem('formData', JSON.stringify(data.value));
    this.closeModal('custom-modal-1');
    this.router.navigate(['/profile']);
  }




  ngOnInit(): void {
    const modal = this;

    this.route.url.subscribe(res => {
      const param = res[0].path;
      if (param === 'profile') {
        this.profileData = JSON.parse(localStorage.getItem('formData'));
        if (this.profileData) {

          this.updateModalValues(this.profileData);
        }
      }


    });


    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', function (e: any) {
      if (e.target.className === 'form-modal') {
        modal.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  updateModalValues(profileData) {
    this.addr1 = profileData.addr1;
    this.addr2 = profileData.addr2;
    this.address = profileData.address;
    this.age = profileData.age;
    this.country = profileData.country;
    this.firstName = profileData.firstName;
    this.lastName = profileData.lastName;
    this.image = profileData.image;
    this.newsLetter = profileData.newsLetter;
    this.number = profileData.number;
    this.state = profileData.state;
    this.email = profileData.email;
    this.tags = profileData.tags;
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('form-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('form-modal-open');
  }
}
