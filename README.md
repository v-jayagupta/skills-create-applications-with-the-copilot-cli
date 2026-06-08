# Create applications with the Copilot CLI

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey v-jayagupta!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/v-jayagupta/skills-create-applications-with-the-copilot-cli/issues/1)

## CLI Calculator

A simple Node.js CLI calculator that implements four basic operations shown in the provided image:

- add (addition)
- sub (subtraction)
- mul (multiplication)
- div (division)

Quickstart
----------

Run directly with node:

  node src/calculator.js add 2 3
  # -> 5

Install locally for a convenient `calc` command:

  npm install
  npm link
  calc mul 4 6
  # -> 24

Examples
--------

  node src/calculator.js add 1.5 2.25    # prints 3.75
  node src/calculator.js div 5 0         # prints Error: division by zero (exit code 3)

Exit codes
----------

- 0: success
- 2: invalid input or usage
- 3: division by zero

Notes
-----

No external dependencies are required. See src/calculator.js for supported operations and implementation details.

