import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'edit-modal',
  imports: [
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './edit-user-modal.html',
  styleUrl: './edit-user-modal.css'
})
export class EditUserModal {
  protected http = inject(HttpClient);

  @Input() apiURL: string = '';
  @Output() usuarioEditado = new EventEmitter<void>();
  nome: string = '';
  email: string = '';

  user: any = null;
  isModalOpen = false;

  openModal(user: any) {
    this.isModalOpen = true;
    this.user = user;
    this.nome = user.nome;
    this.email = user.email;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  editUser() {
    if(this.nome != '' && this.email != '') {
      const dados = {
        id: this.user.id,
        nome: this.nome,
        email: this.email,
      };

      this.http.put(this.apiURL, dados).subscribe({
        next: (res) => {
          console.log('Sucesso:', res);
          alert('Usuário editado com sucesso!');
          this.nome = '';
          this.email = '';
          this.closeModal();
          this.usuarioEditado.emit();
        },
        error: (err) => {
          console.error('Erro:', err);
          alert('Erro ao editar usuário.');
        }
      });
    }
    else { alert('Preencha todos os dados!') }
  }
}
