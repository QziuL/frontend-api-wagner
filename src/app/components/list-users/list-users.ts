import {Component, inject, Input, input, ViewChild} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import {ModalComponent} from '../modals/create-user-modal/modal';
import {EditUserModal} from '../modals/edit-user-modal/edit-user-modal';
import {DeleteUserModal} from '../modals/delete-user-modal/delete-user-modal';

@Component({
  selector: 'app-list-users',
  imports: [
    MatIconModule,
    ModalComponent,
    EditUserModal,
    DeleteUserModal
  ],
  templateUrl: './list-users.html',
  styleUrl: './list-users.css'
})
export class ListUsers {
  protected http = inject(HttpClient);
  protected users: any = null;
  @Input() apiURL: string = '';
  @ViewChild('editModal') editUserModal!: EditUserModal;
  @ViewChild('deleteModal') deleteUserModal!: DeleteUserModal;

  ngOnInit(): void
  {
    if (this.apiURL) { // Verifica se a URL não está vazia
      this.http.get(this.apiURL).subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.error('Erro ao carregar usuários:', error);
        }
      );
    } else {
      console.warn('Api URL não foi fornecida ao ListUsersComponent.');
    }
  }

  openEditModal(user: any) {
    this.editUserModal.openModal(user);
  }

  openDeleteModal(user: any) {
    this.deleteUserModal.openModal(user);
  }

}
