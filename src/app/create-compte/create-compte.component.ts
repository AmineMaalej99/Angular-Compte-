import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { Compte } from '../compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.css']
})
export class CreateCompteComponent implements OnInit{

  compte: Compte = new Compte();
  constructor(private compteService:CompteService, private router: Router){}
  ngOnInit(): void {

  }
  saveCompte(){
    this.compteService.createCompte(this.compte).subscribe(data=>{
      console.log(data);
      this.goToCompteList();
    },
    error=> console.log(error)
    );
  }
  goToCompteList(){
    this.router.navigate(['/comptes']);
  }
  onSubmit(){
    console.log(this.compte);
    this.saveCompte();
  }

}
