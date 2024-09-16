const { execSync } = require('child_process');
const fs = require('fs');

function checkCommand(command, errorMessage) {
  try {
    execSync(command, { stdio: 'ignore' });
    console.log(`✅ ${command.split(' ')[0]} is installed`);
  } catch (error) {
    console.error(`❌ ${errorMessage}`);
    process.exit(1);
  }
}

function checkVersion(command, versionRegex, minVersion, name) {
  try {
    const output = execSync(command).toString();
    const version = output.match(versionRegex)[1];
    if (compareVersions(version, minVersion) >= 0) {
      console.log(`✅ ${name} version ${version} is installed (minimum: ${minVersion})`);
    } else {
      console.error(
        `❌ ${name} version ${version} is below the minimum required version ${minVersion}`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(`❌ ${name} is not installed or not accessible`);
    process.exit(1);
  }
}

function compareVersions(v1, v2) {
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;
    if (part1 > part2) return 1;
    if (part1 < part2) return -1;
  }
  return 0;
}

console.log('Checking prerequisites...\n');

// Check Volta
checkCommand(
  'volta --version',
  'Volta is not installed. Please install it from https://docs.volta.sh/guide/getting-started'
);

// Check Python
checkVersion('python --version', /Python (\d+\.\d+\.\d+)/, '3.7.0', 'Python');

// Check Go
try {
  const goVersion = execSync('go version').toString();
  const match = goVersion.match(/go version go(\d+\.\d+)/);
  if (match && compareVersions(match[1], '1.16') >= 0) {
    console.log(`✅ Go version ${match[1]} is installed (minimum: 1.16)`);
  } else {
    console.error(
      `❌ Go version ${match ? match[1] : 'unknown'} is below the minimum required version 1.16`
    );
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Go is not installed or not accessible in the PATH');
  process.exit(1);
}

// Check Rust and Cargo
checkCommand(
  'rustc --version',
  'Rust is not installed. Please install it from https://www.rust-lang.org/tools/install'
);
checkCommand('cargo --version', 'Cargo is not installed. It should be installed with Rust');

// Check Java
checkVersion('java -version 2>&1', /version "(\d+)/, '17', 'Java');

// Check Maven
checkCommand(
  'mvn --version',
  'Maven is not installed. Please install it from https://maven.apache.org/install.html'
);

// Check cargo-watch
checkCommand(
  'cargo watch --version',
  'cargo-watch is not installed. Install it with: cargo install cargo-watch'
);

// Check rustfmt
checkCommand(
  'rustfmt --version',
  'rustfmt is not installed. Install it with: rustup component add rustfmt'
);

// Check gofmt
try {
  const gofmtPath = execSync('which gofmt').toString().trim();
  execSync(`${gofmtPath} -h`, { stdio: 'ignore' }); // Use -h instead of -version
  console.log(`✅ gofmt is installed (path: ${gofmtPath})`);
} catch (error) {
  console.warn('⚠️ Unable to detect gofmt. Checking Go installation...');
  try {
    const goVersion = execSync('go version').toString().trim();
    console.log(`✅ Go is installed: ${goVersion}`);
    console.warn('gofmt should be available with Go. Please check your PATH settings.');
    console.warn('You might need to add the Go bin directory to your PATH.');
  } catch (goError) {
    console.error('❌ Go is not installed or not accessible in the PATH');
  }
}

// Check entr
function checkEntr() {
  try {
    const entrPath = execSync('which entr').toString().trim();
    const entrOutput = execSync(`${entrPath} 2>&1 < /dev/null`).toString().trim();
    const versionLine = entrOutput.split('\n')[0];
    if (versionLine.startsWith('release:')) {
      console.log(`✅ entr is installed: ${versionLine} (path: ${entrPath})`);
      return true;
    } else {
      throw new Error('Unexpected output from entr');
    }
  } catch (error) {
    if (error.stdout && error.stdout.toString().trim().startsWith('release:')) {
      const versionLine = error.stdout.toString().trim().split('\n')[0];
      const entrPath = execSync('which entr').toString().trim();
      console.log(`✅ entr is installed: ${versionLine} (path: ${entrPath})`);
      return true;
    } else {
      console.warn('⚠️ entr is not installed or not accessible in the PATH');
      console.log("You can install entr using your system's package manager:");
      console.log('- On macOS: brew install entr');
      console.log('- On Ubuntu/Debian: sudo apt-get install entr');
      console.log('- On Fedora: sudo dnf install entr');
      console.log('For other systems, please check: http://eradman.com/entrproject/');
      console.log('After installation, ensure the installation directory is in your PATH.');
      return false;
    }
  }
}

const entrInstalled = checkEntr();

// Summary
console.log('\nPrerequisites summary:');
console.log('✅ All critical prerequisites are fulfilled!');
if (!entrInstalled) {
  console.log('⚠️ entr is not installed. Some watch functionality for Go tests may be limited.');
} else {
  console.log('✅ entr is installed. All watch functionality is available.');
}
console.log('\nYou can proceed with the project setup and development.');
