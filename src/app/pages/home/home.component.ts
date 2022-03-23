import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hit } from 'src/app/interface/data';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgs: Hit[]=[];

  constructor(private servicioServices: ServicioService,
    private router: Router) { }

  ngOnInit(): void {
    this.servicioServices.getImg()
    .subscribe(imgs =>{
      //console.log(resp.hits);
      this.imgs=imgs;


    });
  }

  buscarCat(category: string){
    category= category.trim();
    if(category.length===0){
      return;
    }
    return this.router.navigate(['/cat',category]);

  }

}
