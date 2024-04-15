import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type btnVariants = 'primary' | 'secondary'

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() variant: btnVariants = 'primary'
  @Input('btn-text') btnText: string = ''
  @Output('submit') onSubmit = new EventEmitter()

  submit() {
    this.onSubmit.emit()
  }
}
