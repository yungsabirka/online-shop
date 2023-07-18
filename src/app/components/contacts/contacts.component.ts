import {Component, OnInit} from '@angular/core';
import {contactsArray, IContacts} from "../../constants/contacts";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  title: string = 'Контакти'

  contacts: IContacts[] = contactsArray

  name: string = ''
  phone: string = ''
  email: string = ''
  message: string = ''
  constructor() {

  }

  ngOnInit(): void {
  }


}
