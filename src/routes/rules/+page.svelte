<script lang="ts">
  import { resolve } from "$app/paths";
  import money_1 from "$lib/assets/money/1.png";
  import east_hastings from "$lib/assets/property/brown/east_hastings.png";
  import black_mint from "$lib/assets/property/wild/black_mint.png";
  import rainbow from "$lib/assets/property/wild/rainbow.png";
  import go from "$lib/assets/action/pass_go.png";
  import increase from "$lib/assets/action/rent_increase.png";
  import house from "$lib/assets/action/laneway_house.png";
  import evasion from "$lib/assets/action/tax_evasion.png";

  const cards = [
    {
      title: "Money Cards",
      src: money_1,
      alt: "Money card worth $1",
      description: `Worth its stated value.
        Place in your wallet.
        Pay to other players.`,
    },
    {
      title: "Property Cards",
      src: east_hastings,
      alt: "Brown property card representing East Hastings",
      description: `Worth the value stated on the top left, but cannot be placed in your wallet.
        Place in your collection.
        Each row shows how much rent to collect, based on how many properties you have in the set.
        Place down the bottom left number of properties of this colour to create a full set.
        After creating a full set, further cards can be used to start a new set.`,
    },
    {
      title: "Wild Property Cards",
      src: black_mint,
      alt: "Wild property card representing black or mint",
      description: `Like a property card, but can be flipped to represent whichever colour is on top.
        Flipping can only be done on your turn and does not count as playing a card.`,
    },
    {
      title: "Rainbow Wild Property Cards",
      src: rainbow,
      alt: "Rainbow wild property card",
      description: `Like a wild property card, but can represent any colour.
        Worth no money.
        A set cannot consist only of rainbow wild property cards.`,
    },
    {
      title: "Action Cards",
      src: go,
      alt: "Pass Go action card",
      description: `Worth the value stated on the top left, if placed in your wallet.
        Otherwise, place in the action pile (except for Laneway House and Condo Tower). Then complete the action as described on the bottom.
        See below for clarifications on certain types of action card.`,
    },
    {
      title: "Rent Increase",
      src: increase,
      alt: "Rent Increase action card",
      description: `Must be played at the same time as a rent card.
        Tax Evasion can nullify the effects of both cards.`,
    },
    {
      title: "Laneway House/Condo Tower",
      src: house,
      alt: "Laneway House action card",
      description: `Place on a complete property set, rather than the action pile.
        If that property set becomes incomplete, discard this card.
        If used to pay other players, transfer to their wallet.
        Each property set may only have one of each.`,
    },
    {
      title: "Tax Evasion",
      src: evasion,
      alt: "Tax Evasion action card",
      description: `Can be played when it is not your turn, in which case card limit does not apply.
        Can be nullified by another Tax Evasion card.
        For cards which affect all players, only nullifies the effect against you.`,
    },
  ] as const;
</script>

<div class="px-2 py-5 text-center font-display sm:py-10">
  <div class="mx-auto flex max-w-lg rounded-4xl bg-zinc-100 shadow-lg/50">
    <div class="m-3 rounded-3xl border-3 *:px-10 *:py-5">
      <div
        class="rounded-t-[calc(var(--radius-3xl)-3px)] border-b-3 bg-cyan-500"
      >
        <h1
          class="text-4xl font-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] sm:text-5xl"
        >
          Rules
        </h1>
      </div>
      <div class="space-y-4 text-xl font-semibold">
        <p>
          The winner is the first player to collect 3 unique sets of properties.
        </p>
        <hr class="border" />
        <h2 class="text-3xl font-bold">On Your Turn</h2>
        <p>
          You will draw 2 cards. If you have no cards in your hand, you will
          instead draw 5 cards.
        </p>
        <p>You may play up to 3 cards.</p>
        <p>
          You may not end the turn with more than 7 cards. If you have excess,
          choose cards to place in the discard pile.
        </p>
        <hr class="border" />
        <h2 class="text-3xl font-bold">Cards</h2>
        {#each cards as { title, src, alt, description } (title)}
          <h3 class="text-2xl">{title}</h3>
          <img class="inline-block h-60 rounded-2xl shadow-md/50" {src} {alt} />
          <p class="whitespace-pre-line">{description}</p>
        {/each}
        <div>
          <a href={resolve("/")}
            ><button
              class="rounded-lg bg-cyan-500 px-5 py-2 shadow-md/50 transition hover:bg-cyan-400 hover:shadow-lg/50"
              >Back</button
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</div>
