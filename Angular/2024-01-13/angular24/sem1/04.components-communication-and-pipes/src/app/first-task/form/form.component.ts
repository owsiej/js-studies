import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  public name = '';
  public familyName = '';
  public isDisabled = true;
  @Output() public formChange = new EventEmitter<{
    name: string;
    familyName: string;
  }>();

  onFormChange() {
    this.formChange.emit({ name: this.name, familyName: this.familyName });
    this.isDisabled = true;
  }

  onEdit() {
    this.isDisabled = false;
  }
}
