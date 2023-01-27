import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

export class Tablette {
  constructor(
    public _id: number,
    public image: string,
    public name: string,
    public new_price: string,
    public old_price: string
  ) {
  }
}

@Component({
  selector: 'app-tablette',
  templateUrl: './tablette.component.html',
  styleUrls: ['./tablette.component.css']
})
export class TabletteComponent implements OnInit {

  tablettes :Tablette[];
  closeResult:string;
  editForm:FormGroup;
  private deleteId:number;
  dtOptions: any = {};
  posts: any;
  image:any
  myimage: Observable<any>;

  constructor(
    private httpClient : HttpClient,
    private modalService: NgbModal,
    private fb:FormBuilder
  ) { }


  ngOnInit(): void {
    this.getTablettes();
  }


  getTablettes(){
    this.httpClient.get<any>('http://localhost:8182/JumiaWebCrawling/tablette&telephone/Tablette').subscribe(
      response => {
        console.log(response);
        this.tablettes = response;
        setTimeout(()=>{                          
          $('#datatableexample').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25],
            order:[[1,"desc"]],
            destroy:true
        } );
        }, 1);
      }
    );
  }

  openDetails(targetModal: any, tablette: Tablette) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById("pname")?.setAttribute('value',tablette.name);
    document.getElementById('pnew')?.setAttribute('value',tablette.new_price);
    document.getElementById('pold')?.setAttribute('value',tablette.old_price);
    document.getElementById('cim')?.setAttribute('value',tablette.image);
  
   
 }
}
