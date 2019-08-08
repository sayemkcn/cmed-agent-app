import {Component, OnInit} from '@angular/core';
import {BloodGroupServiceService} from '../../service/blood-group-service.service';
import {AuthService} from '../../../auth/shared/auth.service';
import {BaseComponent} from '../../../shared/base/base.component';
import {IBloodGroup} from '../../models/blood-group.model';

@Component({
  selector: 'app-bottom-right-chart-blood-group',
  templateUrl: './bottom-right-chart-blood-group.component.html',
  styleUrls: ['./bottom-right-chart-blood-group.component.scss']
})
export class BottomRightChartBloodGroupComponent extends BaseComponent implements OnInit {

  bloodStats: IBloodGroup;


  constructor(private bloodService: BloodGroupServiceService, private auth: AuthService) {
    super(auth);

  }

  ngOnInit() {
    this.bloodService.getBloodGroups(this.auth.getCompanyCode()).subscribe(stats => {
      this.bloodStats = stats;
    }, err => this.handleError(err));


  }

  isValid(bloodGroup: string) {
    return bloodGroup == 'A+' || bloodGroup == 'A-'
      || bloodGroup == 'B+' || bloodGroup == 'B-'
      || bloodGroup == 'O+' || bloodGroup == 'O-' || bloodGroup == 'AB+' || bloodGroup == 'AB-' || bloodGroup == 'Unknown';
  }


  getColor(bloodGroupName: string) {
    if (bloodGroupName == 'A+') {
      return '#E64B61';
    } else if (bloodGroupName == 'A-') {
      return '#DF9A83';
    } else if (bloodGroupName == 'B+') {
      return '#22D1D8';
    } else if (bloodGroupName == 'B-') {
      return '#22AEE3';
    } else if (bloodGroupName == 'O+') {
      return '#5874C1';
    } else if (bloodGroupName == 'O-') {
      return '#CB6CC8';
    } else if (bloodGroupName == 'AB+') {
      return '#FBD332';
    } else if (bloodGroupName == 'AB-') {
      return '#30C69F';
    } else if (bloodGroupName == 'Unknown') {
      return '#4F5D6F';
    }
  }

  getHeight(height: number) {
    return ((height * 100) / 1906) + 10 + "%";
  }


}
