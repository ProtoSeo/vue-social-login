<template>
    <div>
        <button @click="checkHealth">Health Check</button>
    </div>
</template>

<script>
import axios from "axios";
import constants from "@/constants";

export default {
    name: "Health",
    setup() {
        const API_URL = constants.API_BASE_URL
        const checkHealth = () => {
            axios.get(API_URL + "/api/v1/health"
            ).then((res) => {
                window.alert("Hello world");
            }).catch(() => {
                window.alert("Please check server status");
            });
        }
        return {checkHealth}
    }
}
</script>

<style scoped>

</style>