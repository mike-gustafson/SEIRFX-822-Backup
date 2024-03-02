console.log('working ...');

// go ahead and our url set to use for fetch
const UNSPLASH_ACCESS_KEY = 'qfSDIbX4zTGEmN7KAjzGxRCBWv9oT8Zv_0R5idY37Ok';
// we need to use a temperate literal to pass the access key
`https://api.unsplash.com/search/photos?page=1&query=office/&client_id=${UNSPLASH_ACCESS_KEY}`

let searchQuery = 'basketball'
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchQuery}/&client_id=${UNSPLASH_ACCESS_KEY}`)
.then(response => {
    console.log('--- status ---', response.status);
    return response.json();
})
.then(data => {
    console.log('--- 🏀 ----');
    console.log(data);
    console.log('--- 🏀 ---');
})
.catch(error => {
    console.log('--- 🏎 ---');
    console.log(error);
    console.log('--- 🏎 ---');
})