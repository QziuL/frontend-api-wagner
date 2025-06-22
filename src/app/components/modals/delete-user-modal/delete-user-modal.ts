import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'delete-modal',
    imports: [
        FormsModule
    ],
  templateUrl: './delete-user-modal.html',
  styleUrl: './delete-user-modal.css'
})
export class DeleteUserModal {
  protected http = inject(HttpClient);

  @Input() apiURL: string = '';
  @Output() usuarioDeletado = new EventEmitter<void>();
  nome: string = '';
  email: string = '';

  user: any = null;
  isModalOpen = false;

  openModal(user: any) {
    this.user = user;
    this.nome = user.nome;
    this.email = user.email;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  deleteUser() {
    this.http.request('DELETE', this.apiURL, {
      body: { id: this.user.id }
    }).subscribe({
      next: (res) => {
        console.log('Sucesso:', res);
        alert('Usuário deletado com sucesso!');
        this.closeModal();
        this.usuarioDeletado.emit();
      },
      error: (err) => {
        console.error('Erro:', err);
        alert('Erro ao deletar usuário.');
      }
    });

    // this.http.delete(this.apiURL, dados).subscribe({
    //   next: (res) => {
    //     console.log('Sucesso:', res);
    //     alert('Usuário editado com sucesso!');
    //     this.nome = '';
    //     this.email = '';
    //     this.closeModal();
    //     this.usuarioEditado.emit();
    //   },
    //   error: (err) => {
    //     console.error('Erro:', err);
    //     alert('Erro ao editar usuário.');
    //   }
    // });
  }
}
