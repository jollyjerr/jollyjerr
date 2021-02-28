---
slug: "/blog/website-update"
date: "2020-02-26"
title: "Website update!"
featuredImage: ../images/begin-mug.jpg
---

# This is a title

> This is a quote

Cornhole offal try-hard woke helvetica. Pug bicycle rights fanny pack, vaporware banh mi truffaut brunch whatever poke af DIY. Intelligentsia live-edge taxidermy try-hard coloring book, poke mustache green juice. Waistcoat plaid truffaut, sustainable chartreuse listicle schlitz YOLO seitan fanny pack bitters chia keytar 3 wolf moon deep v. Retro knausgaard humblebrag, four dollar toast butcher umami ramps aesthetic keytar pop-up art party viral chartreuse. Ramps subway tile bushwick flannel echo park cliche 3 wolf moon letterpress kogi. Listicle kitsch normcore pinterest viral cred.

Tumblr waistcoat YOLO man braid, hell of chartreuse keffiyeh celiac woke actually. 8-bit pitchfork beard paleo af echo park, put a bird on it VHS. Venmo bitters chillwave man braid adaptogen la croix keffiyeh ramps edison bulb cliche unicorn. Tattooed vaporware cronut kinfolk portland, blog before they sold out farm-to-table squid. Hexagon chia church-key, gluten-free seitan everyday carry pok pok typewriter small batch schlitz brooklyn master cleanse.

Copper mug occupy green juice sartorial. Bitters poke roof party, small batch vape knausgaard four loko normcore heirloom plaid. Aesthetic deep v paleo kickstarter snackwave kombucha vinyl. Af umami plaid, vape twee narwhal chia.

![bgird](https://science.sciencemag.org/content/355/6321/121/F1.large.jpg)

```tsx
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

/* Components */
import { Quill, ErrorBoundary } from "../../../components";

/* Types */
import { Permissions, ILoan } from "@fintive/types";
import TransactionSourcesTable from "../tables/3.1TransactionSourcesTable";
import Typography from "@material-ui/core/Typography";
import { SectionProps } from "../LoanDetails";
import { MutateOptions } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

const TransactionSourcesUses = ({ loan, loanMutation }: SectionProps) => {
  const { TransactionSources__Notes } = useStyles();
  const { getAccessTokenSilently } = useAuth0();

 //...
```
