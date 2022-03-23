import { Component, HostListener, OnInit } from '@angular/core';
import { Hit } from 'src/app/interface/data';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imgs: Hit[]=[];


  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos= (document.documentElement.scrollTop||document.body.scrollTop)+1450;
    const max=(document.documentElement.scrollHeight||document.body.scrollHeight);

    if (pos>max){

     if (this.servicioServices.cargando){return;}

      this.servicioServices.getImg().subscribe(imgs =>{
      this.imgs.push(...imgs);
      })
    }

  }

  constructor(private servicioServices: ServicioService) { }

  ngOnInit(): void {
    this.servicioServices.getImg()
    .subscribe(imgs =>{
      //console.log(resp.hits);
      this.imgs=imgs;


    });
  }

}
