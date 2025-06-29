const core = require('@actions/core');

try {
  const greeting = core.getInput('greeting');
  console.log(`${greeting}, World!`);
} catch (error) {
  core.setFailed(error.message);
}