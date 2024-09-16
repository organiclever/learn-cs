# cs-py

This project contains algorithms implemented in Python.

## Setup

1. Ensure you have Python 3.7+ installed on your system.
2. Create a virtual environment:
   ```
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```
4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Running the Project

Ensure your virtual environment is activated, then run:

```
python src/hello_world.py
```

## Running Tests

Ensure your virtual environment is activated, then run:

```
python -m pytest
```

## Project Structure

- `src/`: Contains the source code for the algorithms
- `tests/`: Contains the test files
- `requirements.txt`: Lists the project dependencies
- `pytest.ini`: Configuration file for pytest

## Adding New Algorithms

1. Create a new Python file in the `src/` directory
2. Implement your algorithm
3. Create a corresponding test file in the `tests/`
