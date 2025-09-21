<script lang="ts">
import StandingsRow from "../components/StandingsRow.svelte";
</script>

<p class="text-center text-3xl">PERINGKAT</p>
 
    
<table class="table-auto w-11/12 lg:w-3/4 mx-2 lg:mx-20 my-10">
    <thead>
        <tr class="bg-black">
            <th class="text-white p-2 text-start m-2 w-1/3">TEAM</th>
            <th class="text-red-500">MATCH POINT</th>
            <th class="text-white">MATCH W-L</th>
            <th class="text-red-500">NET GAME WIN</th>
            <th class="text-white">GAME W-L</th>
        </tr>
    </thead>
    <tbody>
        <tr>
           <StandingsRow no={1} team="ONIC" teamLg="ONIC ESPORTS" point={8} matchWinLose="8-0"
           netGameWin={13} gameWinLose="16-3"imgAlt="onic logo" image="onic-b-256.png"/>
        </tr>
        <tr>
            <StandingsRow no={2} team="BTR" teamLg="BIGETRON BY VITALITY" point={5} matchWinLose="6-2"
            netGameWin={5} gameWinLose="13-8" imgAlt="btr logo" image="/btr_vit.png"/>
        </tr>
        <tr>
            <StandingsRow no={3} team="EVOS" teamLg="EVOS" point={4} matchWinLose="4-4"
            netGameWin={3} gameWinLose="11-8" imgAlt="evos logo" image="/evos-500.png"/>
        </tr>
        <tr>
            <StandingsRow no={4} team="RRQ" teamLg="RRQ HOSHI" point={4} matchWinLose="4-4"
            netGameWin={0} gameWinLose="9-9" imgAlt="rrq logo" image="/rrq-500.png"/>
        </tr>
        <tr>
            <StandingsRow no={5} team="NAVI" teamLg="NAVI" point={4} matchWinLose="4-4"
            netGameWin={0} gameWinLose="9-9" imgAlt="rrq logo" image="/NAVI-2.png"/>
        </tr>
        <tr>
            <StandingsRow no={6} team="DEWA" teamLg="DEWA UNITED" point={4} matchWinLose="4-4"
            netGameWin={-1} gameWinLose="9-10" imgAlt="dewa logo" image="/dewa-united-500.png"/>
        </tr>
        <tr>
            <StandingsRow no={7} team="AE" teamLg="ALTER EGO ESPORTS" point={3} matchWinLose="3-4"
            netGameWin={0} gameWinLose="9-9" imgAlt="ae logo" image="/ae-256.png"/>
        </tr>
         <tr>
            <StandingsRow no={8} team="GEEK" teamLg="GEEK FAM" point={2} matchWinLose="2-6"
            netGameWin={-8} gameWinLose="5-13" imgAlt="geek logo" image="/geek-500.png"/>
        </tr>
        <tr>
            <StandingsRow no={9} team="TLID" teamLg="TEAM LIQUID ID" point={0} matchWinLose="0-7"
            netGameWin={-12} gameWinLose="2-14" imgAlt="tlid logo" image="/TLID-Primary500x500.png"/>
        </tr>
    </tbody>

</table>