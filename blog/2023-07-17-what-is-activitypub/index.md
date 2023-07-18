---
slug: what-is-activity-pub
title: What is ActivityPub?
authors: [salrahman]
tags: [activitypub, tech]
---

When using [Mastodon](https://joinmastodon.org/), you are under no requirement to join `mastodon.social` [server](/docs/glossary/server). You are free to join any other server that *uses* Mastodon.

Further, you don't even have to sign up for a server that even uses Mastodon. You can sign up for any server that either uses Calckey, Frendica, Pleroma, Akkoma, Misskey, /kbin, Lemmy, or any other [social media](/docs/glossary/social-media) and [social networking](/docs/glossary/social-network) [platform](/docs/glossary/platform) that uses something called [ActivityPub](https://www.w3.org/TR/activitypub/#target=_blank).

With ActivityPub, as long as you know the [account address](/docs/specifications/account-address) of a particular [user](/docs/glossary/user), then you can interact with that user, even if they are not on the same server as you are on.

This is the power of [federation](/docs/glossary/federation).

It's not anything unique. This idea has been around since at least as far back as the invention of [email](/docs/glossary/email).

ActivityPub is the [protocol](/docs/glossary/protocol) that

1. describes specifically how [users](/docs/glossary/user) can [communicate](/docs/glossary/communication) with their respective home [servers](/docs/glossary/server), typically to [post](/docs/glossary/post) [content](/docs/glossary/content) and
2. describes specifically how servers communicate with other servers, typically to relay activities sent from one ActivityPub [actor](/docs/glossary/) to one or many such actors