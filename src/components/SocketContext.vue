<template>
  <div> {{ isOnline ? "Connected" : "Disconnected" }}</div>
</template>

<script lang="ts" setup>
import { useSocketIO } from "../plugins/socket";
import { ref,onMounted,onUnmounted } from "vue";

const { socket } = useSocketIO();

const isOnline = ref(false);

onMounted(() => {
  socket.on("connect", () => {
    isOnline.value = true
  });
});

onUnmounted(() => {
  socket.on("disconnect", () => {
    isOnline.value = false
  })
});

interface SocketMsg{
    message:string,
    ok:boolean
}

socket.on("new_message", (data: SocketMsg) => {
    console.log(data)
})

</script>
