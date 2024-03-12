let node = document.querySelector("main>article"); // The article in main

/*
let newNode = document.createElement("p");
newNode.textContent = "Hi it's me! ---- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, inventore dolore magnam aspernatur error ratione corporis quasi. Pariatur, earum eos? Dicta quis itaque obcaecati deserunt saepe error corporis veniam nulla?";
node.appendChild(newNode); // attaches the child to the selected element
*/

let count = 5;
let table = document.createElement("table");
table.style.border = "1px solid black";
table.id = "data_table";


for(var index = count; index > 0; index--){
    let newRow = document.createElement("tr");
    let newTableData = document.createElement("td");
    newRow.appendChild(newTableData);
    table.appendChild(newRow);

    newTableData.textContent = index;
}

node.appendChild(table);