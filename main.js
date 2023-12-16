let input = document.querySelector('.input');
let button = document.querySelector('.button');
let showData = document.querySelector('.show-data');

button.onclick = () => {
    showData.innerHTML = '';
    fetchData ();
}

function fetchData () {
    if (input.value == "") {
        
        showData.innerHTML = "<span>Pleas Write GitHup UserName</span>";

    } else {
        fetch (`https://api.github.com/users/${input.value}/repos`).then((repose) =>{
            return repose.json();
        }).then ((data) => {

            data.forEach(e => {
                console.log(e)
                //create Div Contean info repos
                let divmain = document.createElement('div');
                divmain.className = 'repo-box';
                divmain.innerHTML = `<span>${e.name}</span>`;

                //Create Div TO Start And Link
                let divToStartAndLink = document.createElement('div');
                divToStartAndLink.className = "star-and-link";

                //Add Span To Star Count
                divToStartAndLink.innerHTML = `<span>Stars ${e.stargazers_count}</span>`;

                //Create Link
                let link = document.createElement('a');
                link.href = `https://github.com/${input.value}/${e.name}`;
                link.target = "_blank";
                link.innerHTML = "Visit";
                //Add Link to div To Star And Link
                divToStartAndLink.appendChild(link);

                //Add Star And Link  To divmain
                divmain.appendChild(divToStartAndLink)

                //Add divmain to Show DAta
                showData.appendChild(divmain);
            });

        })

    }
}