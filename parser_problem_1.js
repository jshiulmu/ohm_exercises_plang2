const grammar = ohm.grammar(fs.readFileSync("ohm-files/Problem-1.ohm"))

// Returns the Ohm match if successful, otherwise throws an error
export default function parse(sourceCode) {
    const match = grammar.match(sourceCode)
    if (!match.succeeded()) throw new Error(match.message)
    return match
}