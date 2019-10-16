import { Component, OnInit } from '@angular/core';
import {Person} from "../person.model";
import {Observable} from "rxjs";
import {PersonService} from "../person.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private personService: PersonService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.persons = this.personService.getPersonsList();
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  PersonDetails(id: number){
    this.router.navigate(['details', id]);
  }

  PersonEdit(id: number){
    this.router.navigate(['update', id]);
  }

}
