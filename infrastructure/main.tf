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
    build_command   = "zola build"
    destination_dir = "public"
  }

  deployment_configs {
    preview {
      environment_variables = {
        ZOLA_VERSION = "0.21.0"
      }
    }
    production {
      environment_variables = {
        ZOLA_VERSION = "0.21.0"
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

resource "cloudflare_record" "wwwdns" {
  zone_id = data.cloudflare_zone.jtabbzone.id
  type    = "CNAME"
  name    = "www"
  value   = "jtabb.dev"
  proxied = true
}

resource "cloudflare_list" "redirectwww" {
  account_id = data.cloudflare_accounts.jollyjerr.accounts[0].id
  name       = "redirectwww"
  kind       = "redirect"

  item {
    value {
      redirect {
        source_url            = "www.jtabb.dev/"
        target_url            = "https://jtabb.dev"
        subpath_matching      = "enabled"
        status_code           = 301
        preserve_query_string = "enabled"
        preserve_path_suffix  = "enabled"
      }
    }
  }
}

resource "cloudflare_ruleset" "apply_www_redirect" {
  account_id = data.cloudflare_accounts.jollyjerr.accounts[0].id
  name       = "default"
  phase      = "http_request_redirect"
  kind       = "root"

  rules {
    action      = "redirect"
    description = "apply_www_redirect"
    enabled     = true
    expression  = "http.request.full_uri in $redirectwww"

    action_parameters {
      from_list {
        key  = "http.request.full_uri"
        name = "redirectwww"
      }
    }
  }
}
