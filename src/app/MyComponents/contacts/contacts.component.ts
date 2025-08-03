import {ChangeDetectionStrategy, Component, signal, OnInit, Input} from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerInput, MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionPanelHeader
} from '@angular/material/expansion';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {Contact} from "../../models/Contact";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatIcon,
    MatFormField,
    MatDatepickerInput,
    MatInput,
    MatButton,
    MatAccordion,
    MatExpansionPanelHeader,
    MatLabel
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  @Input() contacts: Contact = new Contact();
  ngOnInit() {
  }
}
