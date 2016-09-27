# Dotfiles

### Description

A collection of bash profile setup files, including aliases, prompt and ssh config and others.

### Usage

Simply source the .imports file in your ~/.bash_profile to use.

### What Does It Do?

#### Aliases

Here's a non-exhaustive list of aliases this provides:

```bash
commit='git add --all && git commit -m $&'
p='git push'
branch='git branch ${1} && git push --set-upstream origin ${1}'

fc='fleetctl'
fclm='fleetctl list-machines'
fclu='fleetctl list-units'
fcjf='fleetctl journal -f '

l='ls -lta'
c='cd ~/Code'

dynssh='ssh dynpub-uk-tunnel-up.ft.com'
ppssh='ssh pre-prod-tunnel-up.ft.com'
```
#### Prompt

The .prompt file configures the prompt with the format:

```bash
[$user]@$hostname:$current_directory on $git_branch(*)
```

where '*' indicates whether the branch has uncommitted changes or not.
