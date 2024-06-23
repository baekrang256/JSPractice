function printList(list) {

    alert(list.value); // output the current item

    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }

}