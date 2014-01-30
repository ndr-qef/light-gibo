# Gibo
Gibo (short for .**gi**tignore **bo**ilerplates) allows you to quickly add common `.gitignore` templates to your local repo without leaving Light Table. It relies on [github/gitignore](https://github.com/github/gitignore).

light-gibo is, of course, a port of the eponymous [gibo](https://github.com/simonwhitaker/gibo) by Simon Whitaker.

## Typical usage
Launch gibo from the command bar:

`^SPACE`
`Gibo: new gitignore`

Select the boilerplates you wish to add to your local .gitignore:

`Leiningen`
`Java`
`…`

If you make a mistake:

`-` to remove the latest boilerplate

Finally:
- `Gibo: Write` to save the selected boilerplates to (top workspace folder)/.gitignore
- `Gibo: Review` to open the current `gibo` buffer in a new tab.


## Boilerplate repositories
Upon first launch of the command, `gibo` checks if a repository exists at the configured location; if it doesn't, it creates the folder and therein clones github/gitignore. The default repository is `~/.gitignore-boilerplates` (consistently with [gibo.sh](https://github.com/simonwhitaker/gibo)), but a custom one can be set by adding `:lt.plugins.gibo/set-gh-local $custom-folder` to `:gibo.repo` in your `user.behaviors`.

```clojure
{:+ {:gibo.repo [(:lt.plugins.gibo/set-gh-local /Absolute/Path/To/Repo)]}}
```

## Roadmap
- Prompt user for approval of `git clone`
- Allow custom boilerplate repositories

