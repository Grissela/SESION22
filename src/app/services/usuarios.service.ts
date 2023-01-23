import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService  {

  constructor( private auth:Auth ) { }


  enviodata({username, password}:any){
    // console.log('registrado')
     return createUserWithEmailAndPassword(this.auth, username, password )
     
  }
  login({username, password}:any){
    return signInWithEmailAndPassword(this.auth, username, password);
  }

  salir(){
    return signOut(this.auth);
  }
}
