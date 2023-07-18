---
slug: what-is-activity-pub
title: What is ActivityPub?
authors: [salrahman]
tags: [activitypub, tech]
---

When using [Mastodon](https://joinmastodon.org/), you are under no requirement to join the suggested [flagship](/docs/glossary/flagship) `mastodon.social` [server](/docs/glossary/server). You are free to join any other server that *[host](/docs/glossary/host)* an [instance](/docs/glossary/instance) of the Mastodon [software](/docs/glossary/software).

Further, if you wanted to interact with someone on a Mastodon server, you don't even have to exclusively use Mastodon. You can sign up for any server that either host Calckey, Frendica, Pleroma, Akkoma, Misskey, /kbin, Lemmy, or any other [social media](/docs/glossary/social-media) and [social networking](/docs/glossary/social-network) [platform](/docs/glossary/platform) that uses a [protocol](/docs/glossary/protocol) called [ActivityPub](https://www.w3.org/TR/activitypub/#target=_blank), and additionally [WebFinger](https://webfinger.net/#target=_blank).

With ActivityPub, as long as you know the [account address](/docs/specifications/account-address) of a particular [user](/docs/glossary/user), then you can [interact](/docs/glossary/interaction) with that user, even if they are not on the same server as you are on.

This is the power of [federation](/docs/glossary/federation).

It's not anything unique. This idea has been around since at least as far back as the invention of [email](/docs/glossary/email).

ActivityPub is the /docs/glossary/protocol that allows one user from one server to interact with another user from entirely different server.

This is totally contrary to what has traditionally been done; previously, when you signed up for a social media [service](/docs/glossary/service), and you wanted to get in touch with a friend, that friend needs to have had also signed up for the service, otherwise the two of you will need to find an alternative arrangement.

In the case of ActivityPub—along with WebFinger—both you and that friend can still communicate, as long as both services use the same protocols.

## What else is ActivityPub useful for?

ActivityPub is based very heavily on the concept of an [actor](/docs/glossary/actor).