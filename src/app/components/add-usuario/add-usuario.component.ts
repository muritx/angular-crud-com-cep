import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario-service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {
  usuario: Usuario = new Usuario;
  submitted = false;

  constructor(private usuarioService: UsuarioService) {}

  saveUsuario(): void {
    this.usuarioService.create(this.usuario).then(() => {
      console.log('Cadastrado com sucesso!');
      this.submitted = true;
    });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();

  }



}
