import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {
  public RegisterProducto !: FormGroup

  constructor(private formBuilder:FormBuilder,private service:ProductosService,private router:Router ){

  }


  ngOnInit(): void {
    this.RegisterProducto = this.formBuilder.group({ 
      Nombre:['',[Validators.required]],
      Marca:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      Precio:['',[Validators.required]],
      Modelo:['',[Validators.required]],


     })
  }


  async AgregarProducto() {
    if (this.RegisterProducto.valid) {
      this.service.addProduct(this.RegisterProducto.value)
        .then(res => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Se ha regitrado correctamente al producto`,
              showConfirmButton: false,
              timer: 1000
            })
            this.router.navigate(['/home'])
          }
        })
        .catch(error => { console.log(error) })

    } else {
      Swal.fire({
        icon: 'warning',
        title: '',
        text: 'Los campos no deben estar vacios!'
      })
    }
  }
}
