function contactList(arr) {
    let contactList = arr
        .shift()
        .split(' ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0];

        if (command === 'Add') {
            let contact = arr[i].split(' ')[1];
            let index = Number(arr[i].split(' ')[2]);

            if (contactList.includes(contact)) {
                if (index >= 0 && index < contactList.length) {
                    contactList.splice(index, 0, contact);
                }

            } else {
                contactList.push(contact);
            }

        } else if (command === 'Remove') {
            let index = Number(arr[i].split(' ')[1]);

            if (index >= 0 && index < contactList.length) {
                contactList.splice(index, 1);
            }
            
        } else if (command === 'Export') {
            let startIndex = Number(arr[i].split(' ')[1]);
            let count = Number(arr[i].split(' ')[2]);

            if (startIndex + count <= contactList.length) {
                let result = contactList.slice(startIndex, startIndex + count);
                console.log(result.join(' '));
            } else {
                let result = contactList.slice(startIndex);
                console.log(result.join(' '));
            }

        } else if (command === 'Print') {
            let secondCommand = arr[i].split(' ')[1];

            if (secondCommand === 'Normal') {
                console.log(`Contacts: ${contactList.join(' ')}`);
                break;

            } else if (secondCommand === 'Reversed') {
                let newContact = contactList.reverse();
                console.log(`Contacts: ${newContact.join(' ')}`);
                break;
            }
        }
    }
}

contactList(['Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed']);