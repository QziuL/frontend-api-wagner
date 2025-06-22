import {Component, inject} from '@angular/core';
import {ListUsers} from './components/list-users/list-users';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ListUsers, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected http = inject(HttpClient);
  // protected users: any = null;
  //
  // constructor() {
  //   this.http.get('/api/api_banco.php').subscribe(data => {
  //     this.users = data;
  //   });
  // }
  //
  // protected title = 'frontend-api';
  // protected readonly length = length;
}
