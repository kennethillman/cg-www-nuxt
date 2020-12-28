<template>
    <div class="container">

        <section v-for="(slice, index) in slices" :key="'slice-' + index">

            <!-- Test -->
            <template v-if="slice.slice_type === 'test'">
               <slice-test :slice="slice"/>
            </template>

            <!-- Test name -->
            <template v-if="slice.slice_type === 'test_name'">
               <slice-test-name :slice="slice"/>
            </template>

        </section>
    </div>
</template>

<script>


export default {
  props: ['slices'],
  name: 'slices',
}
</script>
