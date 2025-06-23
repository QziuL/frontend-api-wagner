import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'create-user-modal-component',
  templateUrl: './modal.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./modal.css']
})
export class ModalComponent {
  @Input() apiURL: string = '';
  @Output() usuarioAdicionado = new EventEmitter<void>();

  protected http = inject(HttpClient);

  isModalOpen = false;
  nome: string = '';
  email: string = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveUser() {
    if(this.nome != '' && this.email != '')
    {
      const dados = {
        nome: this.nome,
        email: this.email
      };

      this.http.post(this.apiURL, dados).subscribe({
        next: (res) => {
          console.log('Sucesso:', res);
          alert('Usuário adicionado com sucesso!');
          this.nome = '';
          this.email = '';
          this.closeModal();
          this.usuarioAdicionado.emit();
        },
        error: (err) => {
          console.error('Erro:', err);
          alert('Erro ao adicionar usuário.');
        }
      });
    }
    else { alert('Preencha todos os campos!'); }
  }
}
