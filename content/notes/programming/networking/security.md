+++
title = "Network Security"

[extra]
navname = "notes"
+++

# Network Security

Information Security:

- confidentiality (restrict access)
- integrity (no modification)
- availability (available when needed)

## Basics

### Confidentiality

Send a message and keep it secret from all parties but the recipient.

Achieved via cryptography - plaintext into ciphertext. You need the decryption
key to decrypt ciphertext.

##### Symmetric Encryption

Shared key used for both encryption and decryption

```
E
4 5
0100 0101
XOR 1101 0111 (key)
= 1001 0010

can be decrypted XORing with same key
```

Common used example: AES

##### Asymmetric Encryption

Decryption machine generates public and private key.
Anyone can encrypt with public key but only you can decrypt with private key.

Example: RSA

##### Session Key

Use asymmetric encryption to transport short lived symmetric encryption keys

### Integrity

Hash function - calculate a fixed length digest from a variable length message
Should be computationally infeasible to find another message that would result
in the same message digest.

HMAC (hash keyed message authentication code)

Sender and receiver share a secret key - `H(key | H(key | message))`

Digital signatures: use asymmetric keys to enable checking the message has not
changed and that it came from the correct sender. Alice uses private key to
sign, Bob uses Alice's public key to verify.

Digital certificates: bind a public key and identity. A certificate authority
verifies identity and signs the certificate with their private key. The CA's
public key is trusted (pre-installed in a browser)

## IPsec

IPsec is a solution to eavesdropping on network traffic. Create an encrypted
tunnel between two endpoints. Commonly used in VPNs. ISAKMP/IKE protocol is used
to set the parameters and keys used.

Check out StrongSwan

### SA-1 Parameter Exchange: Initiator says what algorithms it supports

(encryption,hash,dh group, auth) and responder chooses.

Diffie Hellman - allow two parties to jointly establish shared secret key over insecure
channel.

1. Pick prime p and base g
2. Pick secret x. Calculate G^x mod p. send value
3. Other party pick secret y. calculate g^y mod p. send value
4. Shared key is take value shared to them ^ secret they picked (mod p)

So you cannot really calculate k without one of the secrets.

### SA-2 Parameter Exchange

Set up security association for traffic exchange. Set up traffic selectors to
determine what traffic is allowed through the tunnel (protocol, src/dest, etc...)

### Traffic Exchange

- AH authenticating header
- ESP encapsulating security payload
- Transport (single endpoint)
- Tunnel (whole site)

## RPKI

Resource Public Key Infrastructure

Protect against man in the middle, fakes by identifying who owns an IP prefix.

Regional Internet Registries (RIRs) digital certificates contain IP prefix, AS
origin, and tie that to the owner.

Validator installs cache of verified prefixes and origins from regional internet
registries onto AS.

## TLS / HTTPs

Attackers could get DNS to respond with wrong IP address or modify plain text
TCP messages.

Digital Certificate -> provides for asymmetrical key exchange -> provides for
shared encrypted key.

Let's Encrypt is a certificate authority but not trusted, it has you prove your
domain ownership before signing a certificate.

### TLS:

- client hello
- server hello
- server sends certificate
- server indicates done with handshake negation
- client picks session key, encrypts with server public key, sends to server
- they agree to encrypt traffic

### Mutual TLS (mTLS)

Client and server both need to validate each other.

Servers have an explicit access control list.
