import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      gender: new FormControl(''),
      image: new FormControl(''),
      bio: new FormControl(''),
      userName: new FormControl(''),
    });
  }
}
