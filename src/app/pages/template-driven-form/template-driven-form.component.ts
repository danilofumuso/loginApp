import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  @ViewChild('form') form!: NgForm;

  ngAfterViewInit(): void {
    //esegue una operazione ad ogni cambio di valore del form
    this.form.form.valueChanges.subscribe();

    this.form.form.statusChanges.subscribe();
  }

  submit(form: NgForm) {
    form.reset();
  }
}
