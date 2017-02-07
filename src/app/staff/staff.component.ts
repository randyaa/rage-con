import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff:any[];

  constructor() { }

  ngOnInit() {
    this.staff = [
      {
        name:'Anthony Ventura',
        title:'First Among Equals',
        bio:''
      }, {
        name:'Randy Aldrich',
        title:'Guildmaster of Technology',
        bio:'',
      }, {
        name:'Shawna Susice',
        title:'Master Artisan',
        bio:'',
      }, {
        name:'',
        title:'Battlemaster',
        bio:'',
      }, {
        name:'',
        title:'Master of Finances',
        bio:'',
      }, {
        name:'Matt Dickson',
        title:'Head Ambassador to Combat',
        bio:'',
      }, {
        name:'Dan Deveronica',
        title:'Master Scribe of Broken Dreams and Dashed Hopes',
        bio:'',
      },

    ];


  }

}
