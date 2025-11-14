<script lang="ts">
  import { resolve } from "$app/paths";

  const credits = [
    {
      title: "An aerial view of a city and a harbor photo",
      titleLink:
        "https://unsplash.com/photos/an-aerial-view-of-a-city-and-a-harbor-Wc45W-dQFlA",
      author: "Adrian Yu",
      authorLink: "https://unsplash.com/@visualstrance",
      license: "Unsplash License",
      licenseLink: "https://unsplash.com/license",
    },
    {
      title: "Canadian Currency - Canada Money",
      titleLink: "https://www.flickr.com/photos/diversey/53745820454/",
      author: "Tony Webster",
      authorLink: "https://www.flickr.com/people/diversey/",
      modifications: "Cropped from original",
    },
    {
      title: "Davie Street Pride Week 2015",
      titleLink: "https://www.flickr.com/photos/gotovan/19589134774/",
      author: "GoToVan",
      authorLink: "https://www.flickr.com/people/gotovan/",
      modifications: "Cropped from original",
    },
    {
      title:
        "Vancouver Townhouses (West Cordova Street) | Maisons en rangée, Vancouver (rue Cordova Ouest)",
      titleLink: "https://www.flickr.com/photos/ontariomah/20519916391/",
      author: "Municipal Affairs and Housing",
      authorLink: "https://www.flickr.com/people/ontariomah/",
      modifications: "Cropped from original, desaturated, and made translucent",
    },
    {
      title: "09-jan-04",
      titleLink: "https://www.flickr.com/photos/sashafatcat/3169196771/",
      author: "Paul Joseph",
      authorLink: "https://www.flickr.com/people/sashafatcat/",
      modifications: "Cropped from original, desaturated, and made translucent",
    },
  ];
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
          Credits
        </h1>
      </div>
      <div class="space-y-4 text-xl font-semibold">
        <!--
          eslint-disable svelte/no-navigation-without-resolve --
          See https://github.com/sveltejs/eslint-plugin-svelte/pull/1380
          TODO: remove when this gets resolved
        -->
        {#each credits as credit (credit.titleLink)}
          <p>
            <a
              href={credit.titleLink}
              target="_blank"
              rel="external"
              class="text-cyan-800">{credit.title}</a
            >
            by
            <a
              href={credit.authorLink}
              target="_blank"
              rel="external"
              class="text-cyan-800">{credit.author}</a
            >
            is licensed under
            <a
              href={"licenseLink" in credit
                ? credit.licenseLink
                : "https://creativecommons.org/licenses/by/2.0/deed.en"}
              target="_blank"
              rel="external"
              class="text-cyan-800"
              >{"license" in credit ? credit.license : "CC BY 2.0"}</a
            >
            {"modifications" in credit ? "/ ".concat(credit.modifications) : ""}
          </p>
          <hr class="border" />
        {/each}
        <!-- eslint-enable -->
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
