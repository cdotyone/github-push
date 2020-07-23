const { exec } = require('child_process');
const core = require('@actions/core');

let version = core.getInput('version') || '0';
if(version==="0")  {
  console.log('version is required parameter')
  process.exit(1);
  return;
}

if(version.indexOf('-')>0) {
  version=version.split('-')[0];
}

exec('git config --global user.name \'Chris Doty\'');
exec('git config --global user.email \'cdotyone@users.noreply.github.com\'');
exec(`git commit -am "chore: commit v${version} [ci skip]`);
exec('git push origin:main --tags');
