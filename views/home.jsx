const React = require("react")

const Home = (html) => {
    return (
        <html>
            <head>
                <title>File Management</title>
            </head>
            <body>
                <nav>Navbar</nav>
                { html.children }
                <footer>Footer</footer>
            </body>
        </html>
    )
}

module.exports = Home