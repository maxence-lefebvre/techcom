---
sidebar_label: 0003 Use GitHub Actions
slug: /adr-0003-use-github-actions
---

# 1. Use GitHub Actions

Date: 2021-12-24

## Status

✔ Accepted

## Context

We need a solution for our CI/CD needs.
We could use GitHub Actions / Travis CI / GitLab CI / Circle CI and many over.

## Decision

We will use GitHub Actions.

## Consequences

- We need to use actionlint and dependabot over "actions" to make sure our actions are not at risk.
- We should not rely on @v1 tags but on commit shas, automatically updated by dependabot or consorts.
