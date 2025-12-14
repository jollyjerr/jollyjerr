---
title: null-ls Is Archived, What Now?
subtitle: The best path forward for neovim configurations
date: 2023-09-08
tags: nvim
featured: false
draft: false
---

# null-ls is archived, what now?

As of August 11th, 2023, the Neovim community lost a beloved plugin,
[null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim/issues/1621).

If you are not familiar with null-ls, it was an incredible Neovim plugin that
made it possible for non-[LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol)
sources to hook into the LSP client in Neovim and provide standardized
diagnostics and functionality. People typically used it to handle linting,
formatting, and hover/completion tools when an LSP either did not provide them
or when the community around a language use a different standard.

Many developers are struggling to come to terms with this transition because
null-ls was such a beloved plugin that simplified our configuration experience.
I'm here to give three options for a path forward if you use null-ls and are
looking for outside opinions on what you should do next with your neovim config.

## 1. Do Nothing

null-ls is only archived, it is not broken. It seems like many open source
projects and config-heavy-engineers are simply leaving null-ls in place until it
eventually breaks.

I think this is a great strategy and ideal for most people, especially if you
are using a neovim distribution like LazyVim. Let the maintainers handle the
migration process when it is needed, and just hang out until something breaks.
It's likely that null-ls will continue working just fine for a long time and
will only break in a large, advertised, update to Neovim core.

## 2. Other Tools

Some projects are using a combination of [formatter.nvim](https://github.com/mhartington/formatter.nvim) and
[nvim lint](https://github.com/mfussenegger/nvim-lint) to piece together the
tools they used via null-ls. I think this is a valid approach, and it is
exciting to see these other plugins welcome the null-ls community and adapt to
their needs. If you primarily care about getting stuff working quickly, this may
be for you.

## 3. EFM

Personally, I was not happy with either of the above solutions so I went looking
for something that actually replicated null-ls' approach to using tools.

[efm-languageserver](https://github.com/mattn/efm-langserver) is a general
purpose language server that can run arbitrary tools in response to language
server commands. While null-ls simulated an LSP, EFM actually _is_ an lsp that
you can configure to hook into specific tools depending on filetype.

This was the solution I had been looking for, so I set it up in [my dotfiles](https://github.com/jollyjerr/dotfiles).

Here is a sample of the configuration

```lua
local defaults = require('jollyjerr.lsp')

local prettier = {
    formatCommand = 'prettierd "${INPUT}"',
    formatStdin = true,
}

local stylua = {
    formatCommand = 'stylua',
    formatStdin = true,
    rootMarkers = { 'stylua.toml', '.stylua.toml' },
}

require('lspconfig').efm.setup({
    init_options = { documentFormatting = true },
    rootMarkers = { '.git/' },
    settings = {
        languages = {
            lua = { stylua },
            typescript = { prettier },
            typescriptreact = { prettier },
            javascript = { prettier },
            javascriptreact = { prettier },
            svelte = { prettier },
            vue = { prettier },
            markdown = { prettier },
            html = { stylua },
        },
    },
    on_attach = defaults.on_attach,
    capabilities = defaults.get_capabilities(),
})

lspconfig.eslint.setup({
    on_attach = function()
        maps.nmap('<leader>EE', ':EslintFixAll<cr>')
    end,
    capabilities = defaults.get_capabilities(),
})
```

As you can see, I set up lua and javascript formatting via EFM and used
the vscode-eslint language server to handle linting. I also prefer `prettierd`
over `prettier` as the process stays alive and you do not have to wait for
startup time when formatting.

## The Bad News

null-ls was a truly unique plugin, and even with an EFM setup some users report
feeling a little delay while waiting for their command to jump all the way to
EFM and back. Personally I have found it to be just as fast as null-ls, but I
know the projects original goal was to improve performance by removing the need
for an external process.

I hope this blog was helpful! Cheers
