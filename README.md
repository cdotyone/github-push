# github-push
Used to push files after build

## Example

```yaml
name: Generate
jobs:
  generate:
    steps:
      - uses: actions/checkout@v2
      - name: Push
        id: semver
        uses: "cdotyone/github-push@main"
        env:
          GITHUB_TOKEN: "${{ github.token }}"
```

