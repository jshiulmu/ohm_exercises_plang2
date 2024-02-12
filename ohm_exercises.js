// PARSER

import * as fs from "node:fs"
import * as ohm from "ohm-js"

// Tries to match grammar to source code
function matcher(grammar, sourceCode) {
    const match = grammar.match(sourceCode)
    if (!match.succeeded()) throw new Error(match.message)
    return match
}

//Returns true if given filename in ohm-files matches source code, false if not matching
export function matches(filename, sourceCode) {
    const grammar = ohm.grammar(fs.readFileSync("./ohm-files/" + filename + ".ohm"))
    try {
        const match = matcher(grammar, sourceCode)
        return true
    } catch (Error) {
        return false
    }
}


