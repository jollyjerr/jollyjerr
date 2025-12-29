+++
+++

# Cryptography

Use a code or cypher to transmit messages over a public space without the
messaging being readable in the space.

Typically examples in this space use "Alice", "Bob", and "Charlie".

## Private Key

If you have the message and a passcode, you encrypt to mHat. To read mHat you
need the passcode to decrypt the message.

Requires n^2 keys for n members of party in communication.

## Public Key

### Secrecy

Everyone has two passwords - one is public key and one is secret key.

With message m, you encrypt using one key and decrypt with the other key. Alice
can encrypt message m with private and Bob can read it with Alice's public key.
Bob can ask Alice to encrypt with Bob's public key and then only Bob can read it
with their private key.

2 n passwords for n members of party in communication.

### Authentication

On the messages, Alice adds a signature that is encrypted with her private key
so Bob can decrypt with her public key and identify that it is Alice.

## Topics

- [rsa](./rsa.md)
