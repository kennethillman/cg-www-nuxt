<template>
    <div class="container">

        <section v-for="(slice, index) in slices" :key="'slice-' + index">

        <!-- Case / Article -->

            <!-- cg-content -->
            <template v-if="slice.slice_type === 'cg-content'">
                <cg-content :slice="slice"/>
            </template>

            <!-- cg-content-image -->
            <template v-if="slice.slice_type === 'cg-content-image'">
                <cg-content-image :slice="slice"/>
            </template>

            <!-- cg-content-video -->
            <template v-if="slice.slice_type === 'cg-content-video'">
                <cg-content-video :slice="slice"/>
            </template>

            <!-- cg-content-quote -->
            <template v-if="slice.slice_type === 'cg-content-quote'">
                <cg-content-quote :slice="slice"/>
            </template>


            <!-- cg-content-quote -->
            <template v-if="slice.slice_type === 'cg-case-next-previuos'">
                <cg-case-next-previous :slice="slice"/>
            </template>


        <!-- Expertise -->

            <!-- cg-expertise-list -->
            <template v-if="slice.slice_type === 'cg-expertise-list'">
                <cg-expertise-list :slice="slice"/>
            </template>

             <!-- cg-expertise -->
            <template v-if="slice.slice_type === 'cg-expertise'">
                <cg-expertise :slice="slice"/>
            </template>


        <!-- Hello -->

            <!-- cg-person -->
            <template v-if="slice.slice_type === 'cg-person'">
                <cg-person :slice="slice"/>
            </template>


        <!-- Cases -->

            <!-- cg-case-one -->
            <template v-if="slice.slice_type === 'cg_case_one'">
                <cg-case-one :slice="slice"/>
            </template>

            <!-- cg-case-two -->
            <template v-if="slice.slice_type === 'cg-case-two'">
                <cg-case-two :slice="slice"/>
            </template>


        <!-- Startpage -->

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


        </section>
    </div>
</template>

<script>


export default {
  props: ['slices'],
  name: 'slices',
}
</script>
