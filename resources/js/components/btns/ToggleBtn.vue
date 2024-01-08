<template>
    <label :for="name">
        <input 
            :id="name" 
            :name="name" 
            v-model="value"
            type="checkbox"
            value="true"
        />
        <span></span>
    </label>
</template>

<script>
export default {
    data(){
        return {
            value: false,
        }
    },
    watch: {
        value() {
            this.$emit('update:modelValue', this.value)
        }
    },
    props:{
        name: {
            type: String,
            default: " "
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    }
}
</script>


<style lang="less" scoped>
@green: '#0AD688';
label {
    @apply relative inline-block w-14 h-7;
    span {
        @apply absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#A3BAC6] transition ease-linear duration-300 rounded-3xl;
        &:before{
            content: '';
            @apply absolute h-5 w-5 left-1 bottom-1 top-1 my-auto bg-white transition ease-linear duration-300 rounded-full;
        }
    }
    input {
        @apply w-0 h-0 opacity-0;
        &:checked + span {
            @apply bg-[@green];
        }
        &:focus + span {
            @apply shadow-md;
        }
        &:checked + span:before{
            content: url('https://api.iconify.design/mdi/check.svg?color=%230ad688');
            @apply translate-x-7 flex justify-center p-0;
        }
    }
}

</style>