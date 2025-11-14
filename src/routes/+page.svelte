<script lang="ts">
  import { resolve } from "$app/paths";

  const links = [
    { href: "/start", text: "Start a Game" },
    { href: "/join", text: "Join a Game" },
    { href: "/rules", text: "View the Rules" },
    { href: "/credits", text: "Credits" },
  ] as const;

  const externalLinks = [
    { href: "https://github.com/yangela1/vancouver_deal", text: "Source Code" },
  ] as const;
</script>

{#snippet btn(text: string)}
  <button
    class="rounded-lg bg-cyan-500 px-5 py-2 shadow-md/50 transition hover:bg-cyan-400 hover:shadow-lg/50"
    >{text}</button
  >
{/snippet}

<div class="px-2 py-5 text-center font-display sm:py-10">
  <div class="mx-auto flex max-w-lg rounded-4xl bg-zinc-100 shadow-lg/50">
    <div class="m-3 rounded-3xl border-3 *:px-10 *:py-5">
      <div
        class="rounded-t-[calc(var(--radius-3xl)-3px)] border-b-3 bg-cyan-500"
      >
        <h1
          class="text-4xl font-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] sm:text-5xl"
        >
          Vancouver Housing Market: Deal
        </h1>
      </div>
      <div class="space-y-4 text-xl font-semibold">
        <p class="text-2xl">
          Live out your home ownership dream...now available as a card game!
        </p>
        {#each links as { href, text } (href)}
          <div>
            <a href={resolve(href)}>{@render btn(text)}</a>
          </div>
        {/each}
        {#each externalLinks as { href, text } (href)}
          <div>
            <!-- TODO: remove when this gets resolved -->
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a {href} target="_blank" rel="external">{@render btn(text)}</a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
