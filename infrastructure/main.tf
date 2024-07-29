terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

variable "cloudflare_api_token" {
  type        = string
  description = "https://dash.cloudflare.com/profile/api-tokens"
  sensitive   = true
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

data "cloudflare_accounts" "jollyjerr" {
  name = "jollyjerr"
}

data "cloudflare_zone" "jtabbzone" {
  name       = "jtabb.dev"
  account_id = data.cloudflare_accounts.jollyjerr.accounts[0].id
}

resource "cloudflare_pages_project" "jtabb" {
  account_id        = data.cloudflare_accounts.jollyjerr.accounts[0].id
  name              = "jtabb"
  production_branch = "main"

  source {
    type = "github"

    config {
      owner               = "jollyjerr"
      repo_name           = "jollyjerr"
      production_branch   = "main"
      pr_comments_enabled = true
    }
  }

  build_config {
    build_command   = "pnpm build"
    destination_dir = ".svelte-kit/cloudflare"
  }

  deployment_configs {
    preview {
      environment_variables = {
        NODE_VERSION = "22.5.1"
        PNPM_VERSION = "9.6.0"
      }
    }
    production {
      environment_variables = {
        NODE_VERSION = "22.5.1"
        PNPM_VERSION = "9.6.0"
      }
    }
  }
}

resource "cloudflare_pages_domain" "jtabbdomain" {
  account_id   = data.cloudflare_accounts.jollyjerr.accounts[0].id
  project_name = cloudflare_pages_project.jtabb.name
  domain       = "jtabb.dev"
}

resource "cloudflare_record" "jtabbdns" {
  zone_id = data.cloudflare_zone.jtabbzone.id
  type    = "CNAME"
  name    = "@"
  value   = "jtabb.pages.dev"
  proxied = true
}

resource "cloudflare_record" "jtabbwwwdns" {
  zone_id = data.cloudflare_zone.jtabbzone.id
  type    = "CNAME"
  name    = "www"
  value   = "jtabb.pages.dev"
  proxied = true
}
