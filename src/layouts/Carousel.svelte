<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    let container: HTMLDivElement;

let items = [
    { id: 1, src: "/hero/MPL_ID_S16_VETERAN.jpg", alt: "veteran mpl" },
    { id: 2, src: "/hero/MPL_ID_S16_YOUNGBLOOD.jpg", alt: "young blood mpl" },
    { id: 3, src: "/hero/MPL_ID_S16_TICKET_BANNER.jpg", alt: "ticket banner mpl" },
    { id: 4, src: "/hero/MPL-ID-S16_SAMSUNG-v3.jpg", alt: "samsung mpl" },
 
]

let current = 0;
  let interval: ReturnType<typeof setInterval>;


  function goToSlide(index: number) {
    current = index % items.length;
    if (current < 0) current = items.length - 1;

    container.scrollTo({
      left: container.clientWidth * current,
      behavior: "smooth"
    });
  }

  function next() {
    goToSlide(current + 1);
  }

  function prev() {
    goToSlide(current - 1);
  }

  onMount(() => {
    interval = setInterval(() => {
      next();
    }, 4000); // ganti slide tiap 3 detik
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="relative w-full overflow-hidden">
    <div bind:this={container} class="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
    {#each items as item}
      <div
        class="flex-shrink-0 w-full  flex justify-center items-center snap-center"
      >
        <img src={item.src} alt={item.alt}/>
      </div>
    {/each}
  </div>
  <!-- Tombol -->
  <button
    onclick={prev}
    class="absolute left-2 top-1/2 -translate-y-1/2 bg-white  opacity-30 p-2 rounded-full shadow"
  >
    ◀
  </button>
  <button
    onclick={next}
    class="absolute right-2 top-1/2 -translate-y-1/2 bg-white opacity-30 p-2 rounded-full shadow"
  >
    ▶
  </button>
</div>

<style>
  /* sembunyikan scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
