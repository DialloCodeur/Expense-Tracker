import express from "express"
import { parse } from 'qs'

const app = express();
app.set('query parser',
    (str) => console.log(parse(str, { /* custom options */ })))

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
