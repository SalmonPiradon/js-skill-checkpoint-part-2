// เริ่มเขียนโค้ดตรงนี้
async function getUsers () {
    try {
        const getData = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await getData.json();
        let moreThanSeventeenChar = data.filter((person) => person.name.length > 17).map((person) => person.name);
        console.log(moreThanSeventeenChar);
    } catch (error) {
        console.log('Something went wrong:', error.message);
    }
}

getUsers();