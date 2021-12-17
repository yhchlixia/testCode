<template>
    <div class="table">
        <div class="thead">
            <div class="th" v-for="column in columns" :key="column.id" :style="{ width: column.width || '120px' }">
                {{ column.label }}
            </div>
        </div>
        <div class="tbody">
            <div class="td" v-for="data in datas" :key="data.id">
                <div class="space" v-for="column in columns" :key="column.id" :style="{ width: column.width || '120px' }">
                    {{ data[column.key] || '-' }}
                </div>
            </div>
        </div>
        <div class="pagation" v-if="pagation">
            {{ pagation.total }}
            <button @click="changeTotalC">total</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        columns: Array,
        datas: Array,
        style: {},
        pagation: {},
        changeTotal: () => {}
    },
    name: 'Table',
    data() {
        return {

        }
    },
    methods: {
        changeTotalC() {
            this.$emit('changeTotal', 5, 'total')
        }
    }
}
</script>

<style lang="less" scoped>
.table {
    .thead {
        display: flex;
    }
    .tbody {
        .td {
            display: flex;
        }
    }
}
</style>