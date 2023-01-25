import { Injectable } from '@angular/core';
import { collectionData ,collection, Firestore } from '@angular/fire/firestore';  
import { addDoc, deleteDoc, doc, } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Zapatillas } from '../interface/zapatillas';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  /*variable firestore es para utilizar la BD de Firebase*/
  constructor(private firestore:Firestore) {}


  getZapatillas():Observable<Zapatillas[]>{
    const zapatillasRef = collection(this.firestore, '1');/*1 es nombre de la coleccion*/
    console.log(zapatillasRef)
    return collectionData(zapatillasRef, {idField:'id'}) as Observable<Zapatillas[]>

  }

  addProduct(producto:Zapatillas){
    const zapatillasRef = collection(this.firestore, '1')
    return addDoc(zapatillasRef,producto)
  }

  deleteProduct(producto:Zapatillas){
    const zapatillasRef = doc(this.firestore,'1/'+producto.id)
    return deleteDoc(zapatillasRef)
  }
}
