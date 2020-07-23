const { exec } = require('child_process');

exec('git config --global user.name \'Chris Doty\'');
exec('git config --global user.email \'cdotyone@users.noreply.github.com\'');
exec('git commit -am "chore: commit v${{ steps.semver.outputs.new_version }} [ci skip]');
