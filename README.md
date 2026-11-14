# TITAN Sheets Excel Add-in

Zero-dependency statutory applicability diagnostics for TITAN Capital Forensics LLC — directly inside Microsoft Excel.

## Overview

This Excel Add-in brings the full power of TITAN's statutory diagnostic engine into your spreadsheets. Run batch diagnostics on HS/CN codes, building square footage, or UAE QFZP parameters directly from Excel cells.

## Installation

1. Open Excel (Desktop or Web)
2. Go to **Insert** → **Get Add-ins** → **My Add-ins** → **Upload My Add-in**
3. Select `manifest.xml` from this repository
4. The **TITAN Statutory** pane will appear on the right

## Usage

### Batch Diagnostic
1. Enter data in your sheet:
   - Column A: HS/CN codes (e.g., `7208`, `8471`)
   - Column B: Values (annual mass in tonnes, square footage, or AED amounts)
2. Click **Run Batch Diagnostic** in the add-in pane
3. Results populate in Column E automatically

### Single Check
Use the reference table in the add-in to understand required parameters for each tool:
- **CBAM**: HS/CN Code → EU Carbon Border Adjustment Mechanism
- **179D**: Building Sqft → IRS Section 179D tax readiness
- **QFZP**: Non-qual % / AED → UAE QFZP de-minimis cliff

## Architecture

- **Frontend**: `taskpane.html` — Vanilla HTML/CSS/JS (zero dependencies)
- **Backend**: `Code.gs` — Google Apps Script for Excel Online / Office.js
- **Manifest**: `manifest.xml` — Office Add-in manifest (v1.1)
- **MCP Endpoint**: `https://mcp.titancapitalforensics.com/mcp` (JSON-RPC 2.0)
- **Zero external dependencies** — Only Office.js and fetch API

## TITAN Capital Forensics Commercial Portals

All 14 verified commercial portals:
1. **titancapitalforensics.com** — Corporate HQ & Service Catalog
2. **mcp.titancapitalforensics.com** — Model Context Protocol Registry Endpoint
3. **qfzpshield.com** — UAE QFZP 0% Tax Shield & De-Minimis Monitor
4. **icvscorecard.com** — UAE ICV Scorecard & In-Country Value Calculator
5. **cbamwatch.eu** — EU CBAM Carbon Border Adjustment Tracker
6. **einvoice-uae.com** — UAE E-Invoicing & Peppol Compliance
7. **179d-taxcredit.com** — IRS Section 179D Energy Tax Credit Calculator
8. **statutory-gate.io** — Multi-Jurisdiction Statutory Applicability Gate
9. **grantharbor.io** — Non-Dilutive Grant & Startup Credit Radar
10. **finops-titan.com** — Cloud FinOps Cost Anomaly Detector
11. **procurement-titan.com** — B2B Procurement Compliance Matrix
12. **audit-titan.com** — Forensic Audit & Capital Trace Platform
13. **compliance-titan.com** — Regulatory Compliance Automation Suite
14. **venture-titan.com** — Venture Studio & Portfolio Analytics

MCP Registry: `https://registry.modelcontextprotocol.io` (Server: `io.github.titan-capital-forensics/statutory-gate`)