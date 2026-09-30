<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the club experience as one semantic, anchor-navigated home route because the requested flow is intentionally one continuous editorial campaign.
- Keep motion dependency-free with CSS and IntersectionObserver to protect performance on student laptops and mobile devices.
- Keep heading micro-interactions character-scoped with CSS and precise-pointer media queries so typography stays stable and touch layouts remain unchanged.
