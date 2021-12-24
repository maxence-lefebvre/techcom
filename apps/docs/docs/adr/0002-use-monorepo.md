---
sidebar_label: 0002 Use monorepo
slug: /adr-use-monorepo
---

# 1. Record architecture decisions

Date: 2021-12-24

## Status

✔ Accepted

## Context

We will need to deploy different services and some frontends.
We could either use a manyrepo, a metarepo or a monorepo approach, all with tradeoffs.

## Decision

We will use nx workspaces as our monorepo engine.

## Consequences

- CI must be generic and be repo agnostic, since it doesn't know which app will be built a priori (use `nx affected`).
- Infra as code will need to be split into multiple "projects" with explicit dependencies.
- Apps and libraries won't need to explicitly declare their dependencies.
