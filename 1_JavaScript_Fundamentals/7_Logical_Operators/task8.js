if (-1 || 0) alert( 'first' ); //alerted, conditional returns -1
if (-1 && 0) alert( 'second' ); //not alerted, conditional returns 0
if (null || -1 && 1) alert( 'third' ); //alerted, conditional returns 1