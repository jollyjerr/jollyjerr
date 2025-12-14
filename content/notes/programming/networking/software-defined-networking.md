+++
+++

# Software Defined Networking

Innovated to accelerate the standardization and innovation of the networking
discipline.

Control requirements led to great complexity:

- isolation -> vlan, acl
- traffic engineering -> mpls, ecmp, weights
- packet processing middleboxes -> firewalls, NATs
- payload analysis -> deep packet inspection

Needed to abstract the control plane for simplicity of the discipline.

Legacy switches had hardware (ASIC) and software (JUNOS routing processes).

A Clean Slate 4D Approach - introduced problems with legacy approach

Ethane - Took 4D and put it into practice with OpenFlow

- Discovery (how does centralized controller find out about new server)

Key innovation was an abstraction over switches, Match Action Table

## Match Action Table

Key abstraction to unify different kinds of devices in networking ecosystem:

#### Router

- match: longest destination IP prefix
- action: forward out a link

#### Switch

- match: destination MAC address
- action: forward or flood

#### Firewall

- match: IP addresses and TCP/UDP port numbers
- action: permit or deny

#### NAT

- match IP address and port
- action: rewrite address and port

### Reconfigurable Match Action Table

Adds "compiler" to open flow to parse control flow and configure rules.

Read about P4 Abstract Model
