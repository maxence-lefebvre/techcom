---
sidebar_label: Func. Requirements
slug: /functional-requirements
---

# Functional Requirements

## Authn

| Scope   | N°  | Description                                                       |
| ------- | --- | ----------------------------------------------------------------- |
| _Login_ | 1   | A user **MUST** be able to log in using its GitHub account.       |
| _Role_  | 2   | A "tenant owner" "logged-in" user **MUST** be "admin" role.       |
| _Role_  | 3   | A "NOT tenant owner" "logged-in" user **MUST** be "default" role. |
| _Role_  | 4   | A "NOT logged-in" user **MUST** be "guest" role.                  |

## Events

| Role          | N°  | Description                                                                     |
| ------------- | --- | ------------------------------------------------------------------------------- |
| _Default_     | 1   | A "logged-in" user **MUST** be able to add an event.                            |
| _Event owner_ | 2   | A "logged-in" user **MUST** be able to update/delete (U/D) an event they added. |
| _Guest_       | 3   | A user **MUST** be able to see created events in a calendar view.               |
| _Admin_       | 4   | A user with "admin" role **MUST** be able to U/D any event.                     |

## TechIntelligence

| Role          | N°  | Description                                                                                          |
| ------------- | --- | ---------------------------------------------------------------------------------------------------- |
| _Default_     | 1   | A "logged-in" user **MUST** be able to share a post : a link with a short description and some tags. |
| _Default_     | 2   | A "logged-in" user **MUST** be able to share the previous post "anonymously".                        |
| _Event owner_ | 3   | A "logged-in" user **MUST** be able to U/D a post they shared.                                       |
| _Guest_       | 4   | A user **MUST** be able to find those posts using category listing.                                  |
| _Admin_       | 5   | A user with "admin" role **MUST** be able to U/D any post.                                           |

## Out of App sharing

### Slack

| Role                | N°  | Description                                                                                                                                             |
| ------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Default_           | 1   | A "logged-in" user **MUST** be able to link Slack workspaces to the app.                                                                                |
| _Integration owner_ | 2   | A "logged-in" user with "linked Slack workspaces" **MUST** be able to select channels in which the app will post events / posts updates (per category). |
| _Integration owner_ | 3   | A "logged-in" user with "linked Slack workspaces" **MUST** be able to remove a Slack integration.                                                       |

### Twitter

| Role                | N°  | Description                                                                                             |
| ------------------- | --- | ------------------------------------------------------------------------------------------------------- |
| _Default_           | 1   | A "logged-in" user **MUST** be able to link their Twitter account to the app.                           |
| _Integration owner_ | 2   | A "logged-in" user with "linked Twitter account" **MUST** be able to unlink their Twitter account.      |
| _Integration owner_ | 3   | A "logged-in" user with "linked Twitter account" **MUST** be able to cross-post a tech post to Twitter. |
