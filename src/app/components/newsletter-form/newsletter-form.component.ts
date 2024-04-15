import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
  ],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})

export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false)
  toastr = inject(ToastrService)

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.loading.set(true)

    if (this.newsletterForm.valid) {
      this.toastr.success(
        'Você foi cadastrado em nossa newsletter e receberá todas atualizações',
        'Cadastrado com sucesso!', {
        progressBar:true,
        progressAnimation:'decreasing'
      })
      this.service.sendData(this.newsletterForm.value.name, this.newsletterForm.value.email).subscribe({
        next: () => {
          this.newsletterForm.reset()
          this.loading.set(false)
        }
      })
    }
  }
}
