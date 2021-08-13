# SCALARA UI Repository <!-- omit in toc -->

- [Git Flow](#git-flow)
  - [Master Branch](#master-branch)
    - [Hotfix](#hotfix)
  - [Development Branch](#development-branch)
  - [Feature Branch](#feature-branch)
    - [Getting new Development changes](#getting-new-development-changes)
- [Contribution rules](#contribution-rules)
  - [Conventions for Branches](#conventions-for-branches)
  - [Changelog generation](#changelog-generation)
  - [Conventions for Commits](#conventions-for-commits)
- [Swagger](#swagger)
- [Project Structure](#project-structure)
- [Integration Testing](#integration-testing)
- [Endpoints](#endpoints)
    - [Local development](#local-development)
        - [Login Credentials](#login-credentials)
- [Remarks](#remarks)
    - [Windows setup](#windows-setup)

# Git Flow

Instead of a single master branch, this workflow uses two branches to record the history of the project.

## Development Branch

The development branch stores the wip for our internal dev team. It is the base for the Stage and Development environment.

## Feature Branch

Each new feature should reside in its own branch, until its completion

```sh
$ git checkout development
$ git checkout -b feature_branch
```

After completion, the creator will issue a merge request into the [Development Branch](#development-branch)

```sh
$ git push -o merge_request.create -o merge_request.target=development
```

## Conventions for Commits

`commit message` can be any arbitrary text that roughly describes what this commit will change when applied. Commit-messages are written in english and in imperative.

Examples of commits:

- `Add a check to avoid accessing an undefined object`
- `Add a not yet functional delete-button to modals`
- `Add rule to ban console.logs`
