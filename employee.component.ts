import { Component, OnInit } from '@angular/core';
import { candidate_data } from 'src/datamodel/candidate.model'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  candidates = candidate_data;
  name: string;
  columns: string[];
  sortedColumn: string
  data: any[];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  buttonClick() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.columns = Object.keys(this.candidates[0])
  }

  isDate(val): boolean { return typeof val.getMonth === 'function'; }

  removeCandidate() {
    this.candidates = this.candidates.filter(data => {
      console.log(data.department);
      if (data.department.toLowerCase() != 'development') {
        this.candidates.push(data);
        return data;
      }
    });

  }

  distinctDepartment() {
    let distinct_departments = [];
    this.candidates = this.candidates.filter(data => {

      if (distinct_departments.indexOf(data.department) == -1) {
        distinct_departments.push(data.department);
        return data;
      }
    })
    console.log(this.candidates);
  }

  Search() {
    if (this.name !== "") {
      this.candidates = this.candidates.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })
    } else if (this.name == "") {
      this.candidates = candidate_data;
    }
  }
}
