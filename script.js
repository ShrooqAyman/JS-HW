// function to Create Table with specified rows and columns 
function createTable() {

    var rows = document.getElementById("n1").value;
    var cols = document.getElementById("n2").value;
    if (rows != "" && cols != "" && rows > 0 && cols > 0) {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.appendChild(thead);
        table.appendChild(tbody);
        document.getElementById('body').appendChild(table);
        for (i = 0; i < rows; i++) {
            let row = document.createElement('tr');
            for (j = 0; j < cols; j++) {
                let cell;
                if (i == 0) {
                    cell = document.createElement('th');
                }
                else {
                    cell = document.createElement('td');
                }

                row.appendChild(cell);
            }
            if (i == 0) {
                thead.appendChild(row);
            } else { tbody.appendChild(row); }

        }
    }
    else {
        if (rows == "" && cols == "") {
            document.getElementById("error_msg").innerHTML = "Please Enter The Number of Rows and Number of Columns !";
        }
        else if (rows <= 0 && cols != "") {
            document.getElementById("error_msg").innerHTML = "Please Enter Valid  Number for  Rows !";
        }
        else if (rows != "" && cols <= 0) {
            document.getElementById("error_msg").innerHTML = "Please Enter Valid  Number for  Columns !";
        }
        else if (rows != "" && cols == "") {
            document.getElementById("error_msg").innerHTML = "Please Enter The Number of Columns !";
        }
        else if (rows == "" && cols != "") {
            document.getElementById("error_msg").innerHTML = "Please Enter The Number of Rows !";
        }

    }


}

// function to calculate sphere volume 
function calculateVolume() {

    var radius = document.getElementById("n1").value;
    if (radius != "") {
        let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("n2").value = volume;
    }
    else {
        document.getElementById("error_msg").innerHTML = "Please Enter The Radius !";
    }

}




