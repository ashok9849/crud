import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

    Title: string;
    Student: StudentRecord;
    StudentList: StudentRecord[] = [];
    index: any;

    constructor() {
        this.Init();
    }

    Init() {
        this.Title = 'Add Update Delete Operation';
        this.index = 0;
        this.Student = {
            Name:'',
            Surname: '',
            Address: '',
            Marks:''
        }
    }
    SaveRecord() {
        console.log(this.Student);
        if (this.index != 0) {
            this.index = 0;
        }
        else {
            this.StudentList.push(this.Student);
        }
        this.Init();
    }

    EditRecord(i: any) {
        console.log(i);
        this.index = i;
        this.Student = this.StudentList[i];
    }

    DeleteRecord(i: any) {
        console.log(i);
        this.StudentList.splice(i, 1);
    }
}

interface StudentRecord {
    Name: string;
    Surname: string;
    Address: string;
    Marks: any;
}