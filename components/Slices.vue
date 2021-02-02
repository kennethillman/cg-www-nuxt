<template>
    <div class="container">

        <section v-for="(slice, index) in slices" :key="'slice-' + index">


            <!-- cg-case-one -->
            <template v-if="slice.slice_type === 'cg_case_one'">
                <cg-case-one :slice="slice"/>
            </template>

            <!-- cg-case-two -->
            <template v-if="slice.slice_type === 'cg-case-two'">
                <cg-case-two :slice="slice"/>
            </template>


            <!-- cg-featured-project -->
            <template v-if="slice.slice_type === 'cg-featured-project'">
                <cg-featured-project :slice="slice"/>
            </template>

            <!-- cg-testamonials -->
            <template v-if="slice.slice_type === 'cg-testamonials'">
                <cg-testamonials :slice="slice"/>
            </template>

            <!-- cg-slider -->
            <template v-if="slice.slice_type === 'cg-slider'">
                <cg-slider :slice="slice"/>
            </template>

            <!-- cg-clients -->
            <template v-if="slice.slice_type === 'cg-clients'">
                <cg-clients :slice="slice"/>
            </template>

            <!-- cg-occasional -->
            <template v-if="slice.slice_type === 'cg-occasional'">
                <cg-occasional :slice="slice"/>
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
