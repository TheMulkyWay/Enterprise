import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './empservice.service'
import { showStateTrigger, listStateTrigger, stonedStateTrigger} from '../shared/animations';
import { createemployee } from './AddEmployee.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

//   @showStateTrigger
@Component({
  selector: 'fetchemployee',
  templateUrl: './fetchemployee.component.html',
    styleUrls: ['./employee.css'],
    animations: [showStateTrigger, listStateTrigger, stonedStateTrigger]
})

export class FetchEmployeeComponent {
//  public empList: EmployeeData[];

  public empList: any;
  public tab: any;



  constructor(public http: HttpClient, private _router: Router, private _employeeService: EmployeeService,
    private dialog: MatDialog) {
    this.getEmployees();
  }

  getEmployees() {
    this._employeeService.getEmployees().subscribe(
      data => this.empList = data       
    )
    }



  delete(employeeID:any) {
    var ans = confirm("Do you want to delete customer with Id: " + employeeID);
    if (ans) {
      this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
        this.getEmployees();
      }, error => console.error(error))
    }
  }



  onCreate() {
    this.dialog.open(createemployee, {
      panelClass: `mid`,
      width: `42%`,
      position: {
        top: `4%`,
        left: `25%`
      }
    });



  }


  onClose() {
    this.dialog.closeAll();
  }






  t(tab) {
    if (tab.index === 0) { this.getEmployees();}
  }


}






interface EmployeeData {
  id: number;
  name: string;
  gender: string;
  department: string;
  city: string;
}
