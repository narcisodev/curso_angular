import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usando-pipe',
  templateUrl: './usando-pipe.component.html',
  styleUrls: ['./usando-pipe.component.css']
})
export class UsandoPipeComponent implements OnInit {

  livro = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.5642,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
