---
title: Network Foundations
category: Fundamental
tier: 0
order: 2
topic_type: Interactive
---

## Networking Fundamentals

### Introduction to Networks

A **network** is two or more devices connected so they can share data and resources.

| Type | Scope | Example |
|---|---|---|
| **LAN** | One building / home | Office Ethernet + Wi-Fi |
| **WLAN** | Wireless LAN | Home Wi-Fi |
| **WAN** | Connects LANs over large distances | The internet, company branch links |
| **MAN** | A city or campus | University campus network |
| **PAN** | Around one person | Bluetooth headset ↔ phone |

**Topologies:** star (all devices to a central switch — most common), bus, ring, mesh (every node linked; high redundancy), hybrid.

### Network Concepts

**OSI model** (7 layers — "**P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way", bottom-up):

| # | Layer | Data unit | Examples |
|---|---|---|---|
| 7 | Application | Data | HTTP, DNS, SMTP, FTP |
| 6 | Presentation | Data | TLS/SSL, encoding, compression |
| 5 | Session | Data | Session setup, NetBIOS, RPC |
| 4 | Transport | Segment / datagram | TCP, UDP |
| 3 | Network | Packet | IP, ICMP, routers |
| 2 | Data Link | Frame | Ethernet, MAC, ARP, switches |
| 1 | Physical | Bits | Cables, radio, hubs |

**TCP/IP model** (4 layers): Application (OSI 5–7) · Transport (4) · Internet (3) · Link (1–2).

**TCP vs UDP**

- **TCP** — connection-oriented, reliable, ordered. Uses the **three-way handshake**: `SYN → SYN-ACK → ACK`. Used by HTTP(S), SSH, SMB.
- **UDP** — connectionless, no delivery guarantee, low overhead. Used by DNS, DHCP, VoIP, streaming.

### Components of a Network

- **End devices** — PCs, servers, phones, printers.
- **NIC** — network interface card; has a unique **MAC address** (48-bit, e.g. `00:1A:2B:3C:4D:5E`).
- **Hub** — L1, repeats traffic to every port (obsolete).
- **Switch** — L2, forwards frames by MAC address within a LAN.
- **Router** — L3, forwards packets between networks by IP address.
- **Access point** — connects wireless clients to the wired network.
- **Firewall** — filters traffic according to rules.
- **Modem** — converts signals between your network and the ISP line.
- **Media** — copper (Ethernet, RJ45), fiber optic, wireless.

## Network Communication and Addressing

### Network Communication

Three identifiers work together:

- **MAC address** — L2, identifies a NIC on the local segment.
- **IP address** — L3, identifies a host across networks.
  - **IPv4:** 32 bits, dotted decimal (`192.168.1.10`). **IPv6:** 128 bits, hex (`2001:db8::1`).
  - **Private ranges (RFC 1918):** `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`. Loopback: `127.0.0.1`.
  - **Subnet mask / CIDR:** `/24` = `255.255.255.0` = 256 addresses (254 usable hosts).
- **Port** — L4, identifies the application/service on a host (0–65535; well-known ports 0–1023).

**ARP** resolves an IP address to a MAC address on the local network (`who has 192.168.1.1? → is at aa:bb:…`).

**Common ports**

| Port | Service | Port | Service |
|---|---|---|---|
| 20/21 | FTP | 110 | POP3 |
| 22 | SSH | 143 | IMAP |
| 23 | Telnet | 443 | HTTPS |
| 25 | SMTP | 445 | SMB |
| 53 | DNS | 3389 | RDP |
| 67/68 | DHCP | 3306 | MySQL |
| 80 | HTTP | 161 | SNMP |

### Dynamic Host Configuration Protocol (DHCP)

DHCP hands out IP configuration automatically: IP address, subnet mask, default gateway, DNS servers, lease time.

**DORA** process (UDP 67 server / 68 client):

1. **Discover** — client broadcasts looking for a DHCP server.
2. **Offer** — server offers an address.
3. **Request** — client asks for the offered address.
4. **Acknowledge** — server confirms the lease.

Attacks: **DHCP starvation** (exhaust the pool), **rogue DHCP server** (hand out a malicious gateway/DNS → MITM). Defense: DHCP snooping on switches.

### Network Address Translation (NAT)

NAT rewrites addresses so many private hosts can share one or a few public IPv4 addresses (it eases IPv4 exhaustion).

- **Static NAT** — one private ↔ one public address.
- **Dynamic NAT** — private hosts draw from a pool of public addresses.
- **PAT / NAT overload** — many private hosts share one public IP, told apart by port number (what home routers do).
- **Port forwarding** — map a public port to an internal host (e.g. public `:8080` → `192.168.1.20:80`).

NAT hides internal addressing but is **not** a security control on its own.

### Domain Name System (DNS)

DNS translates names (`www.example.com`) into IP addresses. Mostly UDP **53** (TCP 53 for zone transfers and large responses).

**Resolution path:** local cache / hosts file → recursive resolver → **root** server → **TLD** server (`.com`) → **authoritative** server for the domain.

| Record | Purpose |
|---|---|
| **A** / **AAAA** | Name → IPv4 / IPv6 |
| **CNAME** | Alias to another name |
| **MX** | Mail server for the domain |
| **NS** | Authoritative name servers |
| **TXT** | Free text (SPF, DKIM, verification) |
| **PTR** | Reverse lookup: IP → name |
| **SOA** | Zone authority information |

Useful commands: `nslookup example.com`, `dig example.com A`, `dig -x 8.8.8.8`.
Threats: DNS spoofing / cache poisoning, DNS tunneling, misconfigured zone transfers (AXFR).

## Internet Architecture and Wireless Technologies

### Internet Architecture

- **Client–server** — clients request, central servers respond (web, email).
- **Peer-to-peer (P2P)** — every node is both client and server (BitTorrent).
- **Hybrid** — central server for coordination, P2P for data (some messaging/VoIP apps).
- **Cloud** — on-demand resources from a provider (IaaS, PaaS, SaaS).
- **Software-defined networking (SDN)** — the control plane (decisions) is separated from the data plane (forwarding) and managed centrally.

The internet is a network of networks: ISPs and autonomous systems exchange routes using **BGP**.

### Wireless Networks

- Standard: **IEEE 802.11** (Wi-Fi) — a/b/g/n/ac/ax (Wi-Fi 6), on 2.4 GHz, 5 GHz, and 6 GHz bands.
- **SSID** — the network name; **BSSID** — the AP's MAC address.
- **Security protocols:**
  - **WEP** — broken, never use.
  - **WPA** — deprecated (TKIP).
  - **WPA2** — AES-CCMP; Personal (PSK) or Enterprise (802.1X/RADIUS).
  - **WPA3** — SAE replaces PSK handshake, resists offline dictionary attacks.
- Threats: evil twin / rogue AP, deauthentication attacks, WPA2 handshake capture + offline cracking, weak passphrases.
- Other wireless: Bluetooth, cellular (4G/5G), NFC.

## Network Security and Data Flow Analysis

### Network Security

Key controls and where they sit:

- **Firewall** — allows/blocks traffic by rules. *Stateless* (each packet alone) vs *stateful* (tracks connections) vs *NGFW* (application-aware, deep packet inspection).
- **IDS** — detects and alerts (passive). **IPS** — sits inline and blocks (active). Detection is *signature-based* or *anomaly-based*.
- **VPN** — encrypted tunnel over an untrusted network (IPsec, OpenVPN, WireGuard).
- **Segmentation** — VLANs, subnets and a **DMZ** for public-facing servers limit lateral movement.
- **NAC** — only allows compliant, authenticated devices onto the network (802.1X).
- **Zero Trust** — "never trust, always verify"; no implicit trust based on network location.

### Data Flow Example

What happens when you browse to `https://www.example.com`:

1. **DHCP** already gave your host an IP, gateway and DNS server.
2. **DNS** — the host resolves `www.example.com` to an IP address.
3. **ARP** — the host finds the MAC address of the default gateway.
4. **TCP handshake** — `SYN → SYN-ACK → ACK` to the server's port **443**.
5. **TLS handshake** — negotiate encryption, verify the server certificate.
6. **HTTP request/response** — `GET /` and the server returns the page.
7. **NAT** on your router rewrites your private source IP to the public IP on the way out, and back on the way in.
8. Each hop encapsulates/decapsulates: data → segment (L4) → packet (L3) → frame (L2) → bits (L1).

Tools to watch this happen: `ping`, `traceroute` / `tracert`, `ip a` / `ipconfig`, `ss -tulpn` / `netstat`, **Wireshark**, `tcpdump`.

## Exam Kit

### Key Concepts

- **OSI layers 1–7:** Physical, Data Link, Network, Transport, Session, Presentation, Application.
- **Switch = L2 (MAC)**, **router = L3 (IP)**, **hub = L1**.
- **TCP** reliable + handshake; **UDP** fast + connectionless.
- **Private IPv4:** `10/8`, `172.16/12`, `192.168/16`.
- **DHCP = DORA**; **ARP = IP → MAC**; **DNS = name → IP**.
- **PAT** lets many hosts share one public IP using ports.
- **IDS alerts, IPS blocks.**

### Commands Cheat Sheet

```bash
ip a                    # interfaces and IP addresses (Windows: ipconfig /all)
ip route                # routing table / default gateway
ping -c 4 10.10.10.1    # reachability (ICMP)
traceroute 8.8.8.8      # path to a host (Windows: tracert)
ss -tulpn               # listening ports and owning processes
dig example.com MX      # DNS lookup for a record type
dig -x 8.8.8.8          # reverse DNS lookup
nslookup example.com    # DNS lookup (Windows and Linux)
arp -a                  # ARP cache
sudo tcpdump -i eth0 port 53   # capture DNS traffic
```

### Quick Quiz

Click a question to reveal the answer.

<details markdown="1"><summary>At which OSI layer does a switch operate, and what address does it use?</summary>

Layer 2 (Data Link), using **MAC** addresses.
</details>

<details markdown="1"><summary>Spell out the steps of DHCP.</summary>

**D**iscover, **O**ffer, **R**equest, **A**cknowledge (DORA).
</details>

<details markdown="1"><summary>Which DNS record maps a name to an IPv6 address?</summary>

**AAAA**.
</details>

<details markdown="1"><summary>What is the TCP three-way handshake?</summary>

`SYN` → `SYN-ACK` → `ACK`.
</details>

<details markdown="1"><summary>How many usable host addresses are in a /24 network?</summary>

**254** (256 minus the network and broadcast addresses).
</details>

<details markdown="1"><summary>Which protocol resolves an IP address to a MAC address?</summary>

**ARP** (Address Resolution Protocol).
</details>

<details markdown="1"><summary>What port do SSH, SMB and RDP use?</summary>

SSH **22**, SMB **445**, RDP **3389**.
</details>

<details markdown="1"><summary>Which Wi-Fi security protocol replaces the PSK handshake with SAE?</summary>

**WPA3**.
</details>
