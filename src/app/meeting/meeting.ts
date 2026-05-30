import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  imports: [CommonModule, FormsModule],
  templateUrl: './meeting.html',
  styleUrl: './meeting.css',
})

export class Meeting {
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

