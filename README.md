# Gibo
Gibo (short for .*gi*tignore *bo*ilerplates) allows you to quickly add common `.gitignore` templates to your local repo without leaving Light Table. It relies on [github/gitignore](https://github.com/github/gitignore).

light-gibo is, of course, a port of the eponymous [gibo](https://github.com/simonwhitaker/gibo) by Simon Whitaker.

*Note: Alpha software.*

## Typical usage
Start by launching gibo from the command bar:

`^SPACE`
`gibo: new .gitignore`

Select the boilerplates you wish to add to your local .gitignore:

`Leiningen`
`Java`
`…`

Finally:
- `Write` to save the selected boilerplates to (top workspace folder)/.gitignore
- `Review` to open the current `gibo` buffer in a new tab.


## Boilerplate repositories
By default, `gibo` checks if `~/.gitignore-boilerplates/` exists. If it doesn't, it creates the folder and therein clones github/gitignore. This is the same behavior as the original [simonwhitaker/gibo](https://github.com/simonwhitaker/gibo).

To choose a custom folder, add `:lt.plugins.gibo/set-gh-local $custom-folder` to `:gibo.repo` in your `user.behaviors`.

```edn
{:+ {:app […]

     …

     :gibo.repo [(:lt.plugins.gibo/set-gh-local /My/Absolute/Path/To/Boilerplates)]}}
```

## Roadmap
- Prompt user for approval of `git clone`
- Allow custom boilerplate repositories

