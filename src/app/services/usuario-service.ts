import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dbPath = '/usuarios';

  usuariosRef: AngularFirestoreCollection<Usuario>;

  constructor(private db: AngularFirestore) {
    this.usuariosRef = db.collection(this.dbPath);

  }

  getAll(): AngularFirestoreCollection<Usuario> {
    return this.usuariosRef;

  }

  create(usuario: Usuario) {
    return this.usuariosRef.add({ ...usuario });

  }

  update(id: string, data: any): Promise<void> {
    return this.usuariosRef.doc(id).update(data);

  }

  delete(id: string): Promise<void> {
    return this.usuariosRef.doc(id).delete();
    
  }

}
