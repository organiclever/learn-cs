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
  - [`algo-rust/`](contents/algo-rust/): Algorithms implemented in Rust
  - [`algo-java/`](contents/algo-java/): Algorithms implemented in Java

## Implemented Algorithms

Currently, the following algorithms are implemented:

- Hello World (example in all languages)
- Linear Search (implemented in all languages)

## Project Requirements

To work with this project, you'll need the following installed on your system:

- Volta (for managing Node.js and npm versions)
- Python 3.7+ (for running Python algorithms and tests)
- Go 1.16+ (for running Go algorithms and tests)
- Rust and Cargo (for running Rust algorithms and tests)
- Java 17 (LTS) and Maven (for running Java algorithms and tests)
- cargo-watch (for watching file changes in the Rust project)
- rustfmt (for formatting Rust code, usually comes with Rust toolchain)
- gofmt (for formatting Go code, usually comes with Go installation)
- entr (for watching file changes in the Go project)

### Setting up the project

1. Install Volta if you haven't already: https://docs.volta.sh/guide/getting-started
2. Install Rust and Cargo if you haven't already: https://www.rust-lang.org/tools/install
3. Install Go if you haven't already: https://golang.org/doc/install
4. Install Java 17 (LTS) if you haven't already: https://adoptium.net/
5. Install Maven if you haven't already: https://maven.apache.org/install.html
6. Install cargo-watch: `cargo install cargo-watch`
7. Install rustfmt (if not already installed): `rustup component add rustfmt`
8. Clone this repository
9. Run `npm install` in the root directory to install Node.js dependencies (Volta will automatically use the correct Node.js and npm versions)
10. Run `npm run install:all` to set up all subprojects

### Running tests

- To run all tests: `npm test`
- To watch for changes and run tests automatically: `npm run test:watch`

Note: The Go project's watch functionality requires `entr` to be installed on your system.

## Prerequisites

Before getting started, make sure you have all the necessary tools installed. You can check your system's readiness by running the doctor script:

```bash
npm run doctor
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
