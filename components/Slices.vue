<template>
    <div class="container">

        <section v-for="(slice, index) in slices" :key="'slice-' + index">

            <!-- cg-featured-project -->
            <template v-if="slice.slice_type === 'cg-featured-project'">
                <cg-featured-project :slice="slice"/>
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
