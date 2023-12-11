import { Component, OnInit } from '@angular/core';
import { CompteService } from '../compte.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../compte';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  id!: number;
  compte: Compte = new Compte();

  constructor(private compteService: CompteService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.compteService.getCompteById(this.id).subscribe(data =>{
      this.compte= data;},
      error => console.log(error));


      }

  onSubmit() {
    this.compteService.updateCompte(this.id, this.compte).subscribe(data =>{
      this.goToCompteList();

    },
    error => console.log(error));
}
goToCompteList(){
  this.router.navigate(['/comptes']);
}


}

