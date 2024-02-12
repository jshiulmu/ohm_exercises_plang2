import * as ohm from "ohm-js";

const visaGrammar = ohm.grammar(`
  VisaCardNumber {
    VisaCardNumber = "4" Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit  --fifteen
            | "4" Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit Digit --twelve
    Digit = "0".."9"
  }
`);

export function matchesVisaCardNumber(input) {
  const result = visaGrammar.match(input);
  return result.succeeded();
}