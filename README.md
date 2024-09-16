# Computer Science Concepts Learning Repository

Welcome to the Computer Science Concepts Learning Repository! This project is designed to help learners understand fundamental computer science concepts through code examples and explanations.

## Introduction

This repository serves as a practical resource for anyone interested in learning or reviewing core computer science concepts. Each folder in this repository represents a different topic or concept, containing code examples and explanations to help reinforce your understanding.

## Topics Covered

- Data Structures
- Algorithms
- Programming Languages Cookbook

## Project Structure

- [`contents/`](contents/): Contains subprojects for different topics
  - [`algo-ts/`](contents/algo-ts/): Algorithms implemented in TypeScript
  - [`algo-py/`](contents/algo-py/): Algorithms implemented in Python
  - [`algo-go/`](contents/algo-go/): Algorithms implemented in Go

## Project Requirements

To work with this project, you'll need the following installed on your system:

- Volta (for managing Node.js and npm versions)
- Python 3.7+ (for running Python algorithms and tests)
- Go 1.16+ (for running Go algorithms and tests)
- entr (for watching file changes in the Go project)

### Setting up the project

1. Install Volta if you haven't already: https://docs.volta.sh/guide/getting-started
2. Clone this repository
3. Run `npm install` in the root directory to install Node.js dependencies (Volta will automatically use the correct Node.js and npm versions)
4. Run `npm run install:all` to set up all subprojects

### Running tests

- To run all tests: `npm test`
- To watch for changes and run tests automatically: `npm run test:watch`

Note: The Go project's watch functionality requires `entr` to be installed on your system.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
