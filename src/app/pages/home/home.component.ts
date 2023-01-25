import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zapatillas } from 'src/app/interface/zapatillas';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zapatillas!:Zapatillas[];

  constructor(private productos:ProductosService ,private serviciousuario: UsuariosService, private router:Router){}

 ngOnInit(): void {

   this.productos.getZapatillas().subscribe(Zapatillas =>{
    this.zapatillas = Zapatillas
   })
 }
  salir(){
    this.serviciousuario.salir()
    .then( ()=> {
      Swal.fire({
        title: '¡Hasta luego!',
        text: 'Te esperamos de nuevo.',
        imageUrl: 'https://stories.freepiklabs.com/storage/18961/social-networking-rafiki-1660.png',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }

  eliminar(producto:Zapatillas){
    Swal.fire({
      title: 'Desea eliminar producto',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has Eliminado producto exitosamente',
          'success'
        )
        this.productos.deleteProduct(producto)
      }
    })

    
  }
  
  
}
