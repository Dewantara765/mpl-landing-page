<script lang="ts">

let container: HTMLDivElement ;

let items = [
    { id: 1, src: "https://img.youtube.com/vi/VgxjKg2LS0g/maxresdefault.jpg" },
    { id: 2, src: "https://img.youtube.com/vi/aVAefHY_7g8/maxresdefault.jpg" },
    { id: 3, src: "https://img.youtube.com/vi/709dbS7dweg/maxresdefault.jpg" },
    { id: 4, src: "https://img.youtube.com/vi/zZFwQVz4w8g/maxresdefault.jpg" },
    { id: 5, src: "https://img.youtube.com/vi/CSzcq6G6d4Q/maxresdefault.jpg" },
    { id: 6, src: "https://img.youtube.com/vi/nXSv6aU-4bE/maxresdefault.jpg" },
    { id: 7, src: "https://img.youtube.com/vi/7diIZh0JxHw/maxresdefault.jpg" },
    { id: 8, src: "https://img.youtube.com/vi/1NeTBkyrj2A/maxresdefault.jpg" },
    { id: 9, src: "https://img.youtube.com/vi/X-et2RKIGFc/maxresdefault.jpg" },

]
let current = 0;

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

</script>

<p class="text-center text-3xl mb-10">TRENDING</p>

<div class="relative w-full overflow-hidden">
    <div bind:this={container} class="flex space-x-7 m-5 overflow-x-auto">
        {#each items as item}
            <div
        class=" flex-shrink-0 w-4/5 lg:w-1/5 flex justify-center items-center snap-center"
      >
        <img src={item.src} alt="thumbnail youtube" class="mb-5 object-cover h-150 w-100 rounded-xl"/>
      </div>
        {/each}
    </div>
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