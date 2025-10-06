---
trigger: always_on
---

# Every time this file is read, print "GENERAL IN PLACE" in the chat, so I know this is in place
# For every prompt, don't apply changes directly. Everything is either an inquire or a draft, unless explicitly defined in the prompt that the change should be applied at once.
# Beware of the programming languages used in every project, pull necessary resources (at least the programming language's docs) before proceeding, for quicker reference. Same applies to tools (Docker, Redis, RabbitMQ, etc) that are being used in the project, have at the very least official documentation at hand.
# Look for language specific rules (starting with {programming language}-rules.md, in the same folder). Take them as main reference for suggestions working with the language.