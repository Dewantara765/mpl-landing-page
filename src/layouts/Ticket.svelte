<script lang="ts">
    let scrollContainer : HTMLDivElement | null = null;

      function scrollLeft() {
   scrollContainer?.scrollBy({left: -300, behavior: "smooth"})
  }

  function scrollRight() {
    scrollContainer?.scrollBy({ left: 300, behavior: "smooth" })
  }
import MatchTicket from "../components/MatchTicket.svelte";
import SoldOutTicket from "../components/SoldOutTicket.svelte";
</script>

    <div class="relative w-full">
                <button 
                    onclick={scrollLeft} 
                    class="absolute left-0 top-1/2 -translate-y-1/2 bg-rose-900 text-white p-2 rounded-full"
                >
                    ←
                </button>
                <div bind:this={scrollContainer} class="flex overflow-x-auto space-x-4 scroll-smooth no-scrollbar">
                
                    <MatchTicket imgSrc1="/images/dewa-united-500.png" imgAlt1="dewa logo"
                    imgSrc2="/images/rrq-500.png" imgAlt2="rrq logo" date="20 Sep" time="14.15"
                    team1="DEWA" team2="RRQ"/>

                    <MatchTicket imgSrc1="/images/ae-256.png" imgAlt1="ae logo"
                    imgSrc2="/images/TLID-Primary500x500.png" imgAlt2="tlid logo" date="20 Sep" time="17.15"
                    team1="AE" team2="TLID"/>

                    <MatchTicket imgSrc1="/images/evos-500.png" imgAlt1="evos logo"
                    imgSrc2="/images/btr_vit.png" imgAlt2="btr logo" date="20 Sep" time="20.15"
                    team1="EVOS" team2="BTR"/>

                    <MatchTicket imgSrc1="/images/ae-256.png" imgAlt1="ae logo"
                    imgSrc2="/images/NAVI-2.png" imgAlt2="navi logo" date="21 Sep" time="14.15"
                    team1="AE" team2="NAVI"/>

                    <SoldOutTicket imgSrc1="/images/geek-500.png" imgAlt1="geek logo"
                    imgSrc2="/images/onic-b-256.png" imgAlt2="onic logo" date="21 Sep" time="17.15"
                    team1="GEEK" team2="ONIC"/>

                </div>
                <!-- Tombol kanan -->
            <button 
                onclick={scrollRight} 
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-rose-900 text-white  p-2 rounded-full"
            >
                →
            </button>
            
    </div>

<style>
   
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

</style>