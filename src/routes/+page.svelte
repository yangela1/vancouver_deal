<script lang="ts">
  const btn =
    "rounded-lg bg-cyan-500 px-5 py-2 shadow-md/50 transition hover:bg-cyan-400 hover:shadow-lg/50";
</script>

<div class="px-5 py-10 text-center font-display">
  <div class="mx-auto flex max-w-lg rounded-4xl bg-zinc-100 shadow-lg/50">
    <div class="m-3 rounded-3xl border-3 *:px-10 *:py-5">
      <div
        class="rounded-t-[calc(theme(borderRadius.3xl)-3px)] border-b-3 bg-cyan-500"
      >
        <h1
          class="text-4xl font-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] sm:text-5xl"
        >
          Vancouver Housing Market: Deal
        </h1>
      </div>
      <div class="space-y-7 text-xl font-semibold">
        <p class="text-2xl">
          Live out your home ownership dream...now available as a card game!
        </p>
        <a href="/start"><button class={btn}>Start a Game</button></a>
        <br />
        <a href="/join"><button class={btn}>Join a Game</button></a>
        <br />
        <a href="/rules"><button class={btn}>View the Rules</button></a>
        <br />
        <a href="/credits"><button class={btn}>Credits</button></a>
        <br />
        <a href="https://github.com/yangela1/vancouver_deal" target="_blank">
          <button class={btn}>Source Code</button>
        </a>
      </div>
    </div>
  </div>
</div>
