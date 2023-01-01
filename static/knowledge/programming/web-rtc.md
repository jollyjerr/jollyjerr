# WebRTC

WebRTC is an api that handles the networking complexity of connecting two device media streams peer to peer.

Each peer needs to have a `RTCPeerConnection` instance. This API is built in to modern browsers.

The ICE protocol is used to generate media traversal candidates which can be used in WebRTC applications, and which can be successfully sent and received through NATs.

ICE utilizes different technologies and protocols to overcome the challenges posed by different types of NAT mappings. The two most prominent protocols are STUN and TURN. Both STUN and TURN require implementation of client and server-side components.

STUN is used to figure out a path through the NAT configuration and then it goes away. TURN on the otherhand is a paid intermediate service that actually participates in the peer to peer connection.

Typically both parties store their session description protocol (SDP) on an external server (your server) to keep a source of truth on the RTC session. Each peer uses their `RTCPeerConnection.localDescription` to generate this SDP.

## Connecting

There are two implementations of the ICE protocol - trickle and non-trickle. Trickle ICE is when you use websockets (or similar tech) to update the SDP source of truth with up to date ICE candidates whenever there is a state change. Trickle ICE is an OPTIMIZATION on top of ICE, so you can just let all ICE candidates resolve before updating the source of truth with your offer and SDP

## Resources

https://temasys.io/ice-and-webrtc-what-is-this-sorcery-we-explain/
