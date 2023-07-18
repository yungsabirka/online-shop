export interface IContacts {
  subtitle: string,
  contacts: string[],
  classes: string
}

export const contactsArray: IContacts[] = [
  {
    subtitle: 'Дзвоніть нам!',
    contacts: [
      '+38 (000) 666 66 66',
      '+38 (666) 000 00 00',
      '+38 (123) 456 78 90'
    ],
    classes: 'contacts_phone phone'
  },
  {
    subtitle: 'Пошта',
    contacts: ['support@support.com.ua'],
    classes: 'contacts_email email'
  },
  {
    subtitle: 'Адреса офісу',
    contacts: ['м. Київ, вул. Київська'],
    classes: 'contacts_address address'
  }
]

