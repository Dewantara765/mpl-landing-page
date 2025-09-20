<script lang="ts">
const {
    imgSrc1 = "",
    imgAlt1 = "",
    imgSrc2 = "",
    imgAlt2 = "",
    team1 = "",
    team2 = "",
    date = "",
    time = "",
} = $props();
</script>
<div class="flex flex-col flex-shrink-0 w-45 overflow-x-auto">
    <div class="flex justify-between m-5 mt-2">
        <div>
            <img src="images/corner-left.png" alt="sudut atas kiri" class="w-[30px] rotate-90"/>
        </div>
        <div>
            <img src={imgSrc1} alt={imgAlt1} class="w-[25px] grayscale-100"/>
            <span class="font-semibold text-sm">{team1}</span>
        </div>
        <div>vs</div>
        <div>
            <img src={imgSrc2} alt={imgAlt2} class="w-[25px] grayscale-100"/>
            <span class="font-semibold text-sm">{team2}</span>
        </div>
        <div>
            <img src="images/corner-left.png" alt="sudut atas kiri" class="w-[30px] rotate-180"/>
        </div>
    </div>
    <div class="mx-auto text-xs">{date}. {time} WIB</div>
    <div class="flex justify-between m-5">
        <img src="images/corner-left.png" alt="sudut atas kiri" class="w-[30px]"/>
        <img src="/images/soldout-btn.png" alt="ticket habis" class="w-[80px]">
        <img src="images/corner-left.png" alt="sudut atas kiri" class="w-[30px] rotate-270"/>
    </div>
</div>

<style>

   
</style>
