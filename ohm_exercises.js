// PARSER

import * as fs from "node:fs"
import * as ohm from "ohm-js"

// Returns the Ohm match if successful, otherwise throws an error
function parse(sourceCode) {
    const match = grammar.match(sourceCode)
    if (!match.succeeded()) throw new Error(match.message)
    return match
}

//Parses through all ohm files in the ohm-files directory
function parse_all_ohms(ohm_code) {
    matches = []
    for (let i = 0; i < cars.length; i++) {
        matches.append(parse(ohm.grammar(fs.readFileSync(ohm_code[i]))));
    }
    return matches
}

//Export parsed files to problem1.test.js
matches = parse_all_ohms(ohm_code)
export default matches
