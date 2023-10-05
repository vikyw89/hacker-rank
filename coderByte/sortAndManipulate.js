import { sortAndManipulate } from "./lib.js"
const URL = "https://coderbyte.com/api/challenges/json/wizard-list"


// TODO: parse the data schema
// init
try {
    const res = await fetch(URL)
    const data = await res.json()

    const refinedData = sortAndManipulate(data)

    console.dir(refinedData, { depth: null })

} catch (err) {

    console.error(err)

}
