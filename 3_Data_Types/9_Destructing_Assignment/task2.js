function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for ([employeeName, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = employeeName;
        }
    }

    return maxName;
}   
