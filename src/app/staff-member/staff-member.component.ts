import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rc-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent implements OnInit {

  @Input("staff-member") staff:any;

  constructor() { }

  ngOnInit() {
  }

}
