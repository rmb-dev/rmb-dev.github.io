---
title: Introduction to Information Security
category: Fundamental
tier: 0
order: 1
topic_type: Theory
---

## Introduction

### Structure of InfoSec

Information security (InfoSec) protects data — digital **and** physical — from unauthorized access, use, disclosure, disruption, modification or destruction. Cybersecurity is the part of InfoSec that deals with digital systems and networks.

A security program is usually built in layers:

- **Governance** — policies, standards, procedures and guidelines that say what must be protected and how.
- **Risk management** — identify assets, threats and vulnerabilities; assess likelihood and impact; then *accept, mitigate, transfer or avoid* each risk.
- **Controls** — the safeguards that reduce risk:
  - *Administrative* (policies, training, background checks)
  - *Technical / logical* (firewalls, encryption, MFA, EDR)
  - *Physical* (locks, badges, CCTV)
- **Compliance** — meeting laws, regulations and frameworks (GDPR, HIPAA, PCI DSS, ISO 27001, NIST CSF).

> **Remember:** Risk = Threat × Vulnerability × Impact. No vulnerability, or no threat, means little risk.

### Principles of Information Security

**The CIA triad** is the core model:

| Principle | Meaning | Example controls |
|---|---|---|
| **Confidentiality** | Only authorized people can read the data | Encryption, access control, MFA |
| **Integrity** | Data is accurate and has not been tampered with | Hashing, digital signatures, change control |
| **Availability** | Systems and data are usable when needed | Redundancy, backups, DDoS protection |

Supporting principles:

- **Authentication, Authorization, Accounting (AAA)** — prove who you are, decide what you may do, log what you did.
- **Non-repudiation** — a user cannot deny an action (digital signatures, logs).
- **Least privilege** — grant only the access a task requires.
- **Defense in depth** — several independent layers of controls, so one failure is not fatal.
- **Separation of duties** — no single person controls a critical process end to end.

## InfoSec Domains

### Network Security

Protects the network infrastructure and the data moving across it.

- Firewalls, IDS/IPS, VPNs, network segmentation and VLANs, NAC (network access control).
- Goal: stop unauthorized access and detect malicious traffic.
- Typical attacks: sniffing, man-in-the-middle, spoofing, DoS.

### Application Security

Secures software across its whole life cycle — design, code, test, deploy, maintain.

- Secure SDLC, code review, SAST/DAST scanning, dependency (SCA) checks, WAFs.
- Reference: **OWASP Top 10** (broken access control, injection, cryptographic failures, …).
- Fixing a flaw at design time is far cheaper than after release.

### Operational Security

OPSEC covers the processes and decisions about how data assets are handled and protected day to day.

- User permissions and access reviews, patch management, change management, configuration baselines, logging and monitoring.
- Also means not leaking information that an attacker could piece together (e.g. org charts, internal hostnames on social media).

### Disaster Recovery and Business Continuity

How an organization responds to an incident or disaster and keeps operating.

- **Business Continuity Plan (BCP)** — keep critical business functions running during the disruption.
- **Disaster Recovery Plan (DRP)** — restore IT systems and data afterwards.
- Key metrics:
  - **RTO** (Recovery Time Objective) — how long until the system must be back.
  - **RPO** (Recovery Point Objective) — how much data loss (in time) is acceptable.
- Backups: follow the **3-2-1 rule** — 3 copies, 2 media types, 1 off-site (ideally offline/immutable).

### Cloud Security

Protects data, applications and infrastructure hosted in the cloud.

- **Shared responsibility model:** the provider secures *the cloud* (hardware, facilities, hypervisor); the customer secures what they put *in the cloud* (data, identities, configuration).
- Service models shift that split: **IaaS** → customer manages most; **PaaS** → middle; **SaaS** → provider manages most.
- Common issues: misconfigured storage buckets, over-privileged IAM roles, exposed keys.

### Physical Security

Protects people, hardware and facilities from physical threats.

- Perimeter fences, guards, locks, badge readers, mantraps, CCTV, visitor logs.
- Environmental controls: fire suppression, HVAC, power (UPS, generators).
- Physical access often defeats technical controls — e.g. tailgating into a server room.

### Mobile Security

Protects smartphones, tablets and the data on them.

- Risks: lost/stolen devices, malicious apps, insecure Wi-Fi, outdated OS.
- Controls: **MDM** (mobile device management), device encryption, remote wipe, app vetting, BYOD policies.

### Internet of Things Security

Secures connected devices — cameras, sensors, smart home and industrial (ICS/OT) equipment.

- Weaknesses: default credentials, rarely patched firmware, weak or no encryption, large attack surface.
- Controls: change default passwords, isolate IoT on its own network segment, update firmware, disable unused services.
- Compromised IoT devices are often recruited into botnets (e.g. Mirai).

## Threats

### Distributed Denial of Service

A **DDoS** attack floods a target from many sources (often a botnet) to make it unavailable — an attack on **availability**.

- *Volumetric* — saturate bandwidth (UDP floods, DNS/NTP amplification).
- *Protocol* — exhaust server or network-device state (SYN flood).
- *Application layer (L7)* — expensive requests such as HTTP floods.
- Defenses: CDN / scrubbing services, rate limiting, traffic filtering, over-provisioning.

### Ransomware

Malware that encrypts (and often steals) data, then demands payment for the key.

- **Double extortion:** encrypt *and* threaten to leak the stolen data.
- Common entry points: phishing, exposed RDP/VPN, unpatched services.
- Defenses: offline/immutable backups, patching, MFA, EDR, segmentation, least privilege.

### Social Engineering

Manipulating people into revealing information or performing actions.

- **Phishing** (email), **spear phishing** (targeted), **whaling** (executives), **vishing** (voice), **smishing** (SMS).
- **Pretexting** (invented scenario), **baiting** (infected USB), **tailgating/piggybacking** (following someone through a door).
- Best defense: security awareness training plus technical controls (email filtering, MFA).

### Insider Threat

A risk that comes from people with legitimate access — employees, contractors, partners.

- *Malicious* (theft, sabotage), *negligent* (careless mistakes), or *compromised* (account taken over).
- Controls: least privilege, separation of duties, monitoring/UEBA, prompt offboarding, DLP.

### Advanced Persistent Threats

**APTs** are skilled, well-funded groups (often state-sponsored) that gain access and stay hidden for a long time.

- Goals: espionage, data theft, sabotage.
- Traits: custom tooling, stealth, lateral movement, persistence mechanisms.
- Frameworks to describe them: **Cyber Kill Chain** and **MITRE ATT&CK** (tactics, techniques and procedures — TTPs).

## Cybersecurity Teams

### Threat Actors

Who attacks, and why:

| Actor | Motivation |
|---|---|
| Script kiddies | Curiosity, notoriety — use existing tools |
| Hacktivists | Political or social causes |
| Cybercriminals | Money (ransomware, fraud) |
| Nation-state / APT | Espionage, sabotage, geopolitics |
| Insiders | Revenge, money, negligence |

### Red Team

The **offensive** side. Simulates real adversaries to test an organization's defenses and detection.

- Goal-oriented, often covert, uses the full range of TTPs (including social engineering and physical).
- Differs from a penetration test: a pentest finds as many vulnerabilities as possible in a scope; a red team tests whether defenders can detect and respond.

### Blue Team

The **defensive** side. Protects, detects and responds.

- Monitoring (SIEM), incident response, threat hunting, hardening, vulnerability management, digital forensics.

### Purple Team

Not a separate team so much as a **collaboration** between red and blue.

- Red runs a technique → blue checks if it was detected → both improve detections together.
- Produces fast, measurable improvement in defenses.

## Job Roles

### Chief Information Security Officer

The **CISO** is the senior executive responsible for the security program.

- Sets strategy, policy and budget; manages risk; reports to leadership/board; ensures compliance.
- Bridges technical security and business goals.

### Penetration Testers

Authorized professionals who attack systems to find exploitable weaknesses before criminals do.

- Work within a defined **scope** and **rules of engagement**, with written authorization.
- Phases: pre-engagement → information gathering → vulnerability assessment → exploitation → post-exploitation → **reporting**.
- Testing approaches: black box, grey box, white box.

### Security Operations Center

The **SOC** monitors the organization around the clock and responds to alerts.

- **Tier 1** — triage alerts, separate true from false positives, escalate.
- **Tier 2** — deeper investigation and incident response.
- **Tier 3** — threat hunting, advanced analysis, detection engineering.
- Core tools: SIEM, EDR, IDS, ticketing / SOAR.

### Bug Bounty Hunter

Independent researchers who find and report vulnerabilities through bug bounty programs (HackerOne, Bugcrowd, Intigriti) for rewards.

- Must stay strictly **in scope** and follow the program's disclosure policy.
- Good reports: clear steps to reproduce, impact, and proof of concept.

### Recommendations

How to build a career path:

- Learn the fundamentals first: networking, Linux, Windows, scripting, web basics.
- Practice hands-on: labs (HTB Academy, HTB Labs), CTFs, a home lab.
- Document what you learn — write-ups and notes (like this exam kit).
- Pick a direction (offensive, defensive, GRC) once the basics are solid, and keep learning.

## Exam Kit

### Key Concepts

- **CIA triad:** Confidentiality, Integrity, Availability. DDoS hits *A*, tampering hits *I*, data leaks hit *C*.
- **Risk responses:** accept, mitigate, transfer (e.g. insurance), avoid.
- **Control types:** administrative, technical, physical.
- **Least privilege**, **defense in depth**, **separation of duties**.
- **RTO** = max downtime; **RPO** = max data loss measured in time.
- **Shared responsibility:** provider secures *of* the cloud; customer secures *in* the cloud.
- **Red** attacks, **blue** defends, **purple** = both working together.
- **SOC tiers:** T1 triage → T2 investigate/respond → T3 hunt.

### Quick Quiz

Click a question to reveal the answer.

<details markdown="1"><summary>Which part of the CIA triad does a DDoS attack target?</summary>

**Availability.**
</details>

<details markdown="1"><summary>What does RPO measure?</summary>

The maximum acceptable amount of data loss, expressed as time since the last good backup.
</details>

<details markdown="1"><summary>Who secures the hypervisor in an IaaS deployment?</summary>

The **cloud provider** — physical hosts, facilities and virtualization layer are on their side of the shared responsibility model.
</details>

<details markdown="1"><summary>Following an employee through a badge-controlled door is called…?</summary>

**Tailgating** (or piggybacking, when the employee knowingly lets you in).
</details>

<details markdown="1"><summary>Which team runs covert adversary emulation to test detection and response?</summary>

The **red team**.
</details>

<details markdown="1"><summary>What is the main difference between a red team engagement and a penetration test?</summary>

A pentest aims to find as many vulnerabilities as possible within a scope; a red team pursues a specific objective covertly to test the defenders' detection and response.
</details>

<details markdown="1"><summary>Name the 3-2-1 backup rule.</summary>

3 copies of the data, on 2 different media types, with 1 copy off-site.
</details>
