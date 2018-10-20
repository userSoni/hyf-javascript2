// JavaScript source code

function getList(listName) {
    const ul = document.createElement("ul");

    for (let i = 0; i < listName.length; i++) {
        const li = document.createElement("li");

        li.innerHTML = listName[i];

        ul.appendChild(li);
    }

    return ul;
}

//console.log(getList(repos));