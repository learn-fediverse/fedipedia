---
slug: what-is-activity-pub
title: What is ActivityPub?
authors: [salrahman]
tags: [activitypub, tech]
---

![ActivityPub diagram](ac-example.png)

Meta—the company behind [Facebook](https://en.wikipedia.org/wiki/Facebook) and [Instagram](https://en.wikipedia.org/wiki/Instagram)—announced that [Threads is joining the Fediverse](https://creators.instagram.com/blog/introducing-threads). That is, a Threads user can [follow](/docs/glossary/follow) a [Mastodon](https://joinmastodon.org/) user, and vice versa. Further, you may have noticed that Mastodon is just not a single [service](/docs/glossary/service); it's a collection of different service all using the Mastodon [software](/docs/glossary/software), but each [instance](/docs/glossary/instance) can still communictae with each other.

This is all possible because Mastodon [implements](/docs/glossary/implementation)—at least partially—the [ActivityPub](https://www.w3.org/TR/activitypub/#target=_blank) and [WebFinger](https://webfinger.net/#target=_blank) [protocols](/docs/glossary/protocol), and soon Threads will do so, too.

With ActivityPub and WebFinger, as long as you know the [account address](/docs/specifications/account-address) of a particular [user](/docs/glossary/user), then you can interact with that user, even if they are not on the same server as you are on.

This is the power of [federation](/docs/glossary/federation).

This runs contrary to what has traditionally been done; previously, when you signed up for a social media [service](/docs/glossary/service), and you wanted to get in touch with a friend, that friend needs to have had also signed up for the service, otherwise the two of you will need to find an alternative arrangement.

This is not anything unique. This idea has been around since at least as far back as the invention of [email](/docs/glossary/email).

In the case of ActivityPub—along with WebFinger—both you and that friend can still [communicate](/docs/glossary/communication), as long as both services use the same protocols.

## What can ActivityPub do?

ActivityPub has explicitly defined support for the following actions that are often expected on many social media platforms:

- Follow
- Block
- React to an object with a "like"
- Create a [post](/docs/glossary/post)
- Delete a post
- Update a post
- Share another post (via an announce)
- Undo a previous action

## Can ActivityPub do more?

[Developers](/docs/glossary/software-developer) can extend what AcivityPub is capable of.

That said, any extensions implemented in a [Fediverse](/docs/glossary/fediverse) software needs to be supported in other such software, in order for that extension to be fully comprehensible.

Fortunately, software that don't offer support for such extensions can fallback to showing merely what it does understand so far, as well as include a link to the original [content](/docs/glossary/content).

## What else is ActivityPub useful for?

ActivityPub is based very heavily on the concept of an [actor](/docs/glossary/actor), and employs a pattern called the "actor model". In the actor model—as used by ActivityPub—an actor can send messages to other actors.

Actors are often associated with an [account](/docs/glossary/account), but don't always need to be. An actor can be a [bot](/docs/glossary/bot) that merely [reposts](/docs/glossary/repost) content not explicitly on that platform the bot is posting on. This is especially useful for services that expose an ActivityPub endpoint.

In other words, an ActivityPub actor doesn't need to be a user.

A good example of this is an ActivityPub [group](/docs/glossary/group) actor.

With a group actor, you can implement the concept of a group, where people can post to it by sending a note to a group. Once a note has been posted, the group will boost that note to anyone who follows that group.

Both /kbin and Lemmy heavily use the ActivityPub group actor.

## In Summary

ActivityPub is what enables a [decentralized](/docs/glossary/decentralization) social media experience, without requiring everyone to be a part of a single [entity](/docs/glossary/entity)—typically a corporation.

With ActivityPub, you have an actor that you can address, in order to send them messages, and that same actor can respond to the actor associated with your account with messages as well.

ActivityPub is essentially like email, but with added features that allow you to send not only messages, but also follow others, be followed, and broadcast to your followers.