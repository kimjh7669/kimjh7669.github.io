# [Jungho Kim](https://kimjh7669.github.io/)

## Private visit records

The public pages include `/js/visit.js`, a small page-load collector. It sends
records to a Cloudflare Worker; no visitor counter, logs, or statistics are
displayed here. The Worker has no public read endpoint.

Records contain the page pathname, UTC timestamp, referring hostname, browser,
device category, and Cloudflare's approximate country/city/coordinates. They do
not include raw IP addresses, cookies, persistent visitor IDs, query strings,
or full referring URLs. DNT/GPC opt-outs are respected. Counts represent page
loads, including reloads, rather than unique people.

The collector source and private local viewer are maintained in
`/mnt/sda/git/kimjh7669_visitor` (viewer: `http://localhost:8767/`).
`js/visit.js` is copied from that project's `site/visit.js`.
When regenerating HTML, retain `<script src="/js/visit.js" defer></script>` on
content pages. Admin pages and redirect-only pages intentionally omit it.

# 📄 Acknowledgement & License

This project uses resources from [mcahny/mcahny.github.io](https://github.com/mcahny/mcahny.github.io), which is licensed under the [Creative Commons Attribution-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/).  

