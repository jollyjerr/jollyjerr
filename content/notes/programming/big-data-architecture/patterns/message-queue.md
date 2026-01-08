+++
title = "Messaging Queues"
+++

# Messaging Queues

There is a large group of technologies called Message-Oriented Middleware (MOM)
that includes tech like RPC (Remote Procedure Call) and Messaging Queues.

## Rabbit MQ

### AMQP 0-9-1

AMQP 0-9-1 is the primary protocol supported by rabbit. It allows client
applications to communicate with messaging middleware brokers.

Brokers receive messages from publishers (aka producers) and route them to
consumers.

At a high level, publishers send messages to a broker managed "exchange", and
then the exchange copies each message to specific queues, using a routing
rule-set called bindings. Consumers can either be notified of new messages in a
queue they subscribe to, or they can poll on demand.

Consumers are responsible for acknowledging to the broker that they got the message.
If a message sits for a long time in a queue it can be returned to sender or
placed in a dead letter queue.

AMQP exchanges can be durable or transient and come in four types:

- direct
- fanout
- topic
- headers

Queues bind to exchanges with "bindings", and each queue can have many binding
rules.

#### Direct Exchange

A direct exchange uses a messages "routing key" to send it to any queue that is
bound to the exchange with a matching routing key. If multiple queues are bound
to that key then multiple copies of the message are created.

#### Fanout Exchange

Fanout routes the message to all queues bound to it. Routing keys are ignored.

#### Topic Exchange

Topic exchanges route the message to any queue if the messages routing key
fits the binding pattern that the queue used when it was bound.

#### Headers Exchange

Headers is like direct but uses multiple headers rather than one routing key.

### Best Practices

Having more queues and clients requires more CPU context switching, so prefer
less queues and clients for higher throughput with less resources.

Rabbit will not be a performance bottleneck until > 1000 messages a second. Keep
Rabbit empty for best performance.

Small messages are best from a network perspective.

Rabbit uses a "fifth queue" system to write messages to disk as the queue fills
up. Pretty cool read here: https://blog.rabbitmq.com/posts/2011/10/performance-of-queues-when-less-is-more/

#### Performance tips:

https://www.cloudamqp.com/blog/part1-rabbitmq-best-practice.html
