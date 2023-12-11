import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';
import { Router } from '@angular/router';
import Swal, { SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {
  comptes!: Compte[];
  constructor(private compteService:CompteService,
    private router:Router
    ){}
  ngOnInit(): void{

    this.getComptes();

  }
  private getComptes(){
    this.compteService.getComptesList().subscribe(
      data => {this.comptes=data;
      }
    );
  }
  updateCompte(id: number){
    this.router.navigate(['update-compte',id]);

  }
  deleteCompte(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr(e) ?',
      text: 'Vous ne pourrez pas revenir en arrière !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimez-le !',
      cancelButtonText: 'Annuler'
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        this.compteService.deleteCompte(id).subscribe(data => {
          this.getComptes();
          Swal.fire({
            title: 'Suppression réussie !',
            text: 'Le compte a été supprimé avec succès.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        });
      }
    });
  }

}

