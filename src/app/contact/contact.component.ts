import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private http = inject(HttpClient);
  private formspreeUrl = 'https://formspree.io/f/xyzjdarr';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitMessage: string = '';

  sendEmail(form: NgForm) {
    if (form.valid) {
      this.http.post(this.formspreeUrl, this.formData).subscribe({
        next: () => {
          this.submitMessage = 'Mensagem enviada com sucesso!';
          form.reset();
        },
        error: () => {
          this.submitMessage = 'Erro ao enviar a mensagem. Tente novamente.';
        },
      });
    } else {
      this.submitMessage = 'Por favor, preencha todos os campos corretamente.';
    }
  }
}
