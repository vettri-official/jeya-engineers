import { Component } from '@angular/core';
import swictchColor from 'src/utilities/functions/navbar-color';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  });
  ngOnInit(): void {
    swictchColor('#contact');
  }
}
