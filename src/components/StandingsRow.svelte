<script lang="ts">
const {
    no   = 0,
    image = "",
    team  = "",
    teamLg = "",
    point = 0,
    matchWinLose = "",
    netGameWin = 0,
    gameWinLose = "",
    imgAlt= "",
} = $props()

</script>

            <th class="flex gap-1 pt-2">
                <div class="bg-black text-white p-1">{no}</div>
                <img src={`/images/${image}`} alt={imgAlt} class="w-8"/>
                <div class="block lg:hidden">{team}</div>
                <div class="hidden lg:block">{teamLg}</div>
            </th>
            <th class="text-red-500">{point}</th>
            <th>{matchWinLose}</th>
            <th class="text-red-500">{netGameWin}</th>
            <th>{gameWinLose}</th>
