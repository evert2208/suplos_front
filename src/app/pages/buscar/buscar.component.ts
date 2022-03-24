import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hit } from 'src/app/interface/data';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto: string='';
  public imgs: Hit[] =[];
  constructor(private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
    private location: Location) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params.texto);
      this.texto=params.texto;
      //TODO: llamar el servicio
      this.servicioService.buscarImg(params.texto).subscribe(imgs =>{
        console.log(imgs);
        this.imgs=imgs;
      })
    })
  }

  onRegresar(){
    this.location.back();
  }
}
