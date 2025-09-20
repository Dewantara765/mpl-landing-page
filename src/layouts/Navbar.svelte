<script lang="ts">
let showDropdown = $state(false);

function toggleMenu(){
  showDropdown = !showDropdown
}
</script>


<div class="bg-red-900 ps-3 lg:ps-25 flex flex-col lg:flex-row justify-between py-3 pe-10">
  <div class="flex justify-between">
    <div class="flex space-x-3">
      <img src="/images/LOGO_MPL-ID-NEW-2024-400.webp" alt="logo mpl" class="w-[50px]"/>
      <img src="/images/M7 INDONESIA - White.png" alt="logo M7" class="w-[50px]"/>
      <img src="/images/m7-jakarta-id.png" alt="jakarta M7" class="w-[100px]"/>
    </div>
    <button class="block lg:hidden" onclick={toggleMenu} aria-label="toggle Menu">
      {#if showDropdown}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      {/if}
       
    </button>
   </div>

  
   <div>
    {#if showDropdown}
    <div class="flex flex-col lg:flex-row  space-y-2 lg:space-x-3 text-white flex-start lg:items-center">
      <div class="text-red-500">HOME</div>
      <hr class="lg:hidden">
      <div>TIM</div>
      <hr class="lg:hidden">
      <div>TRANSFER</div>
      <hr class="lg:hidden">
      <div>JADWAL</div>
      <hr class="lg:hidden">
      <div>TIKET</div>
      <hr class="lg:hidden">
      <div>KARIR</div>
      <hr class="lg:hidden">
      <div>STATISTIK</div>
      <hr class="lg:hidden">
      <div>BERITA</div>
      <hr class="lg:hidden">
      <div>MPL JOURNEY</div>
      <hr class="lg:hidden">
      <div class="flex space-x-1">
        <img src="/images/id.png" alt="logo id" class="w-[25px]">
        <p>ID</p>
      </div>
    </div>
    {/if}
    </div>

  </div>