const url = require('url');

const myUrl = new URL(
    'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Pathname
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);