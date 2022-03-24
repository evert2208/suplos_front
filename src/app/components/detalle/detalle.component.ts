import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Data, Hit } from 'src/app/interface/data';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public imagen: Data | any;



  constructor(private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
    private  location: Location,
    private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params.id;
    console.log(id);

      //  this.servicioService.getDetalles(id)
      // .subscribe(img => {
      //   //console.log(movie);

      //   //sacar al usuario al home si el id no existe
      //   if(!img) {
      //     this.router.navigateByUrl('/home');
      //     return;
      //   }
      //   this.imagen= img;
      // });

    combineLatest([
      this.servicioService.getDetalles(id)
    ]).subscribe(([imagen]) => {
      if(!imagen) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.imagen= imagen;
      console.log(imagen);


    });
  }

  onRegresar(){
    this.location.back();
  }
}
