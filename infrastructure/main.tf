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
    destination_dir = "public"
  }
}
