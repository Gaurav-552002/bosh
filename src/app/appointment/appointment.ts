import { Component } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment {
    searchText = '';

  appointments = [
    {
      visitorName: '-',
      visitorFirm: '-',
      visitDate: '-',
      visitTime: '-'
    }
  ];

  filteredAppointments() {
    return this.appointments.filter(item =>
      item.visitorName
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  addNew() {
    console.log('Add New Clicked');
  }
}

