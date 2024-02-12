// PARSER

import * as fs from "node:fs"
import * as ohm from "ohm-js"
import * as ohm_code from "./ohm-files"

// Returns true if Ohm match is successful, false if not
function matcher(grammar, sourceCode) {
    const match = grammar.match(sourceCode)
    if (!match.succeeded()) throw new Error(match.message)
    return match
}

//Parses through all ohm files in the ohm-files directory
export default function matches(filename, sourceCode) {
    const grammar = ohm.grammar(fs.readFileSync("ohm-files/" + filename + ".ohm"))
    try {
        const match = matcher(grammar, sourceCode)
        return true
    } catch (Error) {
        return false
    }
}


