<template>
    <div>
        <h1>Mail</h1>
        <p>Welcome to the mail page</p>
    </div>
    <div class="flex w-full justify-evenly">
        <div class="w-5/8">
            <h1>Your Mail</h1>
                <div>
                    <li >
                    <!--  <li v-for="item in items">        --> 
                        <div class="border-2 rounded-lg bg-slate-800 text-gray-100" @click="1+1">
                            <!--  <{{ item.from }}       --> 
                            <h3 class="font-bold">Gérard Depardieu</h3>
                            <!--  <{{ item.object }}       --> 
                            <p>Films </p>
                        </div>
                    </li> 
                    
                </div>
        </div>
        <div class="w-3/8">
            <h1>Viewver</h1>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mailView'
}
</script>