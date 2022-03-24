import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hit } from 'src/app/interface/data';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  public category: string='';
  public imgs: Hit[] =[];
  constructor(private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
    private  location: Location,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      //console.log(params.category);
      this.category=params.category;
      // llama el servicio
      this.servicioService.categoria(params.category).subscribe(imgs =>{
        //console.log(imgs);
        this.imgs=imgs;
      })
    })
  }

  onRegresar(){
    this.location.back();
  }

}
