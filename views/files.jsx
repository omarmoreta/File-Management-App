const React = require("react")
const Home = require("./home")

const Files = () => {
    return (
        <Home>   
            <form method="POST" action="/files">
                <div>
                    <label htmlFor="file">Choose a file: </label>
                    <input type="file" id="file" name="file" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Home>
    )
}

module.exports = Files