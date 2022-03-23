import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hit } from 'src/app/interface/data';

@Component({
  selector: 'app-img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: ['./img-grid.component.css']
})
export class ImgGridComponent implements OnInit {

  @Input() imgs: Hit[] | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(img: Hit){
    //console.log(movie);
    this.router.navigate(['/detalle',img.id]);
  }

}
