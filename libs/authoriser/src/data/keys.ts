/**
 * https://auth0.com/docs/secure/application-credentials/generate-rsa-key-pair
 *
 * Generate RSA Key Pair:
 *   1. Generate a private key and a public key in PEM. You should safeguard
 *      the private key and never share it, not even with Auth0:
 *
 *      openssl genrsa -out test_key.pem 2048
 *
 *   2. Extract the public key in PEM format using the following command.
 *      This command extracts the public key details so it can be safely
 *      shared without revealing the details of the private key:
 *
 *      openssl rsa -in test_key.pem -outform PEM -pubout -out test_key.pem.pub
 */

export const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxci1A/tpbdDlPh/P4Ygq
QTBsP3Ug0JiLQCKVnEsLtenNcK63vMwQ8iqKGPQ1rSEwKM5qdyBCGD55sZMC8Lfw
XAOGRlnBrJcK8WGiJtlG/qpom6MbS2qiDH9ipAXXWUUECO2+0v19olBWPMZEjnx8
b6B2TJBGcRklNtRDjh+Lyd7K4Gb3eehyTaaQj6vSdU8HXSQQGYTbpssG4m/BZx/B
4aJEQQ4HkS/O5UxerewT4u5VMDNJOM4xue/n127FdApoIURcrOsPCP41+Wz/Q1BH
4CNbGwUGolHp79X6tmEBO0n57cstV9xBAUFAEYDF0HSyVub8OVopVeVrpKUMEoMc
uQIDAQAB
-----END PUBLIC KEY-----`;

export const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAxci1A/tpbdDlPh/P4YgqQTBsP3Ug0JiLQCKVnEsLtenNcK63
vMwQ8iqKGPQ1rSEwKM5qdyBCGD55sZMC8LfwXAOGRlnBrJcK8WGiJtlG/qpom6Mb
S2qiDH9ipAXXWUUECO2+0v19olBWPMZEjnx8b6B2TJBGcRklNtRDjh+Lyd7K4Gb3
eehyTaaQj6vSdU8HXSQQGYTbpssG4m/BZx/B4aJEQQ4HkS/O5UxerewT4u5VMDNJ
OM4xue/n127FdApoIURcrOsPCP41+Wz/Q1BH4CNbGwUGolHp79X6tmEBO0n57cst
V9xBAUFAEYDF0HSyVub8OVopVeVrpKUMEoMcuQIDAQABAoIBAEr4e3UY9avExUC5
OklZHfs76axcL6YiTJZxBZkK8VNxXohaEhekmr/Q1CwFVdtcey7cn4qsVaFu/R4M
hc7NSnT2eQ1ttHZBgspgoeBr9/dMjP6B4zTBJM/r8W4PMMQL3y2rQOwlXlwKa8X5
ub7w/RIrFuyKu8jfKTYRW9IhrxFDkaHgLB3wDXy2+1SI25DAXOnjFVxHWjW1C2j5
7bFKajR99R9YTP3wfmteKvFq/NMlJ/eHBTdkJMu6WubpdWyYZXhzZ3rB4wF0Hg+h
DWH3KBpKW6K3+BI69hQOYKD3OaaY8YufOSAyRD8IOfLYqANUfrYg+EWkLXfaRyba
Py7OEgECgYEA6F/n+s3UJdxUGVUlQYfB/W3JYTzuqXb23KgSeQq2Ajs/yT0j85OG
VAEogi6JnOTHMMnxWZcrgiQ+UvrQcpTxx1GcwdsM/p/vK8LBGVKlF0T+YXfvmbLw
qbPmO3IzzGO8Vj655pxUGFBBz+HJjKTCejf2B4gGRcE35JwAIYUsWeECgYEA2eR/
v+l5ukRN853S7RSWZjmiNVmkdAvZ14TQwUoW5o2Bpa+Ku0gnHdERzbQlySTWqxSW
7NL7qI7W1p22VMmkjO8jXr0+O+eip9KjcASyQivyhaGlIfk4kCZ0t6r7Z9quDs9l
paDOf0hFsECr9hWeCpYc7xnbuEH4tA43FXOqjdkCgYA/8XQybcU9Dd4OgoGYALV+
+WD64vuBonzXx2Ad8raW8prg03Q7KJNENnVhLVEs3T96y3cgghq02yhTSTVm8ll9
0ZVjOtXek0ALOLJON5G6T3/4bjp+fuD+scRfA1QBoEhJK0WYkdgKQLt7atQ9YXEq
lI+dDu867qpkvBDFKJJFwQKBgQDKbDESRQDFPrd8X16Yyct/ZIOBNKpG9MuIIOce
6omj3kpXdmFX44wTcysrAvUnjIWxogskME2DJlAISbQdyMaJ94/Qb9blKCg/6LvV
UUeZmeJQqv8SNMmLgW5lQv8UWF/jemFgIag1LxsuxqX6k9Ki2xo+NrOc1g0KmTor
P61u4QKBgGDC8lbYlu0EhZ8jZF8RSVWcemNWMUA8tIor519czmGsWH0kjewXzkBD
boHpSseWecbylJ2jcdvBCMBIViPjHXqIsDanAyKNpG9hN3LwIB0sOv1UtkRfrEcM
MBie+jprz1RfF88GwiPHuC5Mxvtpq86CwSXdhv4Izgo31yKZoK7j
-----END RSA PRIVATE KEY-----`;
