# SoftUni Technology Fundamentals - Mid Exam 30.06.2019 Group 1
---


## 1. Distance Calculator


 
Create a program that **calculates** what **percentage** you’ve travelled. First, you will **receive** how many steps you’ve made. Then, you will **receive** how long **1 step is in centimeters**. Last, you will **receive** the **distance** you need to travel in **meters**.

Then you have to **calculate what distance** you have travelled with the **steps given**. Have in mind that every **fifth step is 30% shorter** than usual. You have to calculate what **percentage of the distance you’ve travelled**.

In the end, print the percentage of the distance travelled, **formatted to the 2nd decimal place**, in the following format:

**"You travelled {percentage}% of the distance!"**

### Input

•	On the 1st line you will receive the steps made – an integer number in the range [0…100000]

•	On the 2nd line you will receive the length of 1 step – a real number in the range [0.0…50.0]

•	On the 3rd line you will receive the distance you need to travel – an integer number in the range [0…100000]

### Output

•	In the end print the percentage of the distance travelled formatted to the 2nd decimal place in the format described above.

### Constraints

•	The input will always be in the right format.

•	Percentage can be over 100%.
 
 
### Examples

| Input                    | Output                                 |
|--------------------------|----------------------------------------|
| [ '100', '2', '1' ]      | You travelled 188.00% of the distance! |
| [ '5000', '7.5', '500' ] | You travelled 70.50% of the distance!  |

---


## 2. Number Array


   
Create a program that helps you keep track of a number array. First, you are going to **receive the numbers оn a single line, separated by space**, in the following format:

**"{number1} {number2} {number3}… {numbern}"**

Then you will start receiving **commands** until you read the **"End"** message. There are **five** possible commands:

•	**"Switch {index}"** - Find the number on this index in your collection, if the index exists, and switch its sign (negative <-> positive).  

•	**"Change {index} {value}"** - Replace the number on the given index with the number given, if the index exists.

•	**"Sum Negative"**- Print the sum of all negative numbers.

•	**"Sum Positive"**- Print the sum of all positive numbers.

•	**"Sum All"**- Print the sum of all numbers.

In the end, print the **positive numbers on a single line, keeping in mind that 0 is positive**, separated by **a single space** in the following format:

**"{number1} {number2} {number3}… {numbern}"**

### Input

•	On the 1st line you are going to receive the numbers of the array (always integers), separated by a single space.

•	On the next lines, until the "End" command is received, you will be receiving commands.

### Output

•	Print the tasks in the format described above.

### Examples 

| Input                                                                                         | Output                |
|-----------------------------------------------------------------------------------------------|-----------------------|
| [ '1 2 3 4 5', 'Switch 4', 'Change 0 -3', 'Sum Negative', 'End' ]                             | -8  2 3 4             |
| [ '1 2 3 4 5 4 3 2 1 0',   'Switch -4',   'Change 13 0',   'Switch 0',   'Sum All',   'End' ] | 23  2 3 4 5 4 3 2 1 0 |

---

## 3. Contact List

 
Create a program that helps you keep track of the contacts that you have. You will **receive the list of contacts** you already have on **a single line, separated by a single space** in the following format:

**"{contact1} {contact2} {contact3}… {contactn}"**

Then you will receive commands that you need to execute over your list. There are **four possible commands**:

•	**"Add {contact} {index}"**:

o	If {contact} isn’t already contained – add it in the end of the collection.
o	If {contact} is already contained – add it on the given index, if the index exists.

•	**"Remove {index}"** - Remove the contact on the given index, if the index exists.

•	**"Export {startIndex} {count}"** - Print the next {count} contacts starting from the given {startIndex} (including), separated by a single space. If the count requested is more than the contacts- just print them to the end. 
"{contact} {contact} {contact}"

•	**"Print Normal/Reversed"** - Print the contact list in normal (in the order they have been added) or reversed order and then stop the program:

**"Contacts: {contact1} {contact2}… {contactn}"**

### Input

•	On the 1st line, you will receive the starting list with the names of the contacts separated by a single space.

•	On the next lines, you will receive commands in the format described above.

### Output

•	Print the needed output upon the "Export" command.

•	Print the list after the manipulations upon the "Print" command in the format described above.

 
### Examples

| Input                                                                                                                        | Output                                                                                        |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| [ 'Alisson Bellamy Candace Tristan',   'Remove 3',   'Add Bellamy 2',   'Print Normal' ]                                     | Contacts:   Alisson Bellamy Bellamy Candace                                                   |
| [ 'Zayn Katy Ariana Avril Nick Mikolas',   'Remove 3',   'Add Jacob 0',   'Export 0 3',   'Export 3 8',   'Print Reversed' ] | Zayn Katy Ariana     Nick Mikolas Jacob         Contacts: Jacob Mikolas Nick Ariana Katy Zayn |



---

Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/Practice/Index/1682#0;
