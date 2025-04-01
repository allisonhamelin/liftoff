<template>
  <BaseLayout>
    <div class="w-4xl flex flex-col py-10 h-full">
      <div class="flex w-full flex-col items-center">
        <div class="max-w-4xl w-full">
          <h1 class="text-4xl mb-10">Create Launch</h1>
          <div class="card card-border bg-base-100 max-w-4xl w-full">
            <form class="card-body" @submit.prevent="onSubmit">
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Mission Name *</legend>
                <input
                  v-model="missionName"
                  type="text"
                  class="input"
                  placeholder="Mission"
                  :class="{ 'input-error': v$.missionName.$error }"
                />
                <p v-if="v$.missionName.$error" class="text-error">Mission Name is required</p>
              </fieldset>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Rocket Name *</legend>
                <input
                  v-model="rocketName"
                  type="text"
                  placeholder="Falcon 1"
                  class="input"
                  :class="{ 'input-error': v$.rocketName.$error }"
                />
                <p v-if="v$.rocketName.$error" class="text-error">Rocket Name is required</p>
              </fieldset>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Launch Date *</legend>
                <input
                  v-model="launchDate"
                  type="datetime-local"
                  class="input"
                  :class="{ 'input-error': v$.launchDate.$error }"
                />
                <p v-if="v$.launchDate.$error" class="text-error">Launch Date is required</p>
              </fieldset>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Article Link</legend>
                <input
                  v-model="articleLink"
                  type="url"
                  placeholder="https://"
                  class="input w-3/4"
                  :class="{ 'input-error': v$.articleLink.$error }"
                />
                <p v-if="v$.articleLink.$error" class="text-error">Article Link must be a url</p>
              </fieldset>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Details</legend>
                <textarea
                  v-model="details"
                  type="textarea"
                  placeholder="Add some details"
                  class="textarea w-full align-top"
                />
              </fieldset>
              <div class="flex justify-end">
                <button class="btn btn-primary w-40 mt-4" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, url } from '@vuelidate/validators'
import BaseLayout from '@/components/layout/BaseLayout.vue'

interface CreateLaunchViewData {
  missionName: string
  rocketName: string
  launchDate: Date | null
  articleLink: URL | null
  details: string | null
}

export default defineComponent({
  components: {
    BaseLayout,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data(): CreateLaunchViewData {
    return {
      missionName: '',
      rocketName: '',
      launchDate: null,
      articleLink: null,
      details: null,
    }
  },
  validations() {
    return {
      missionName: { required },
      rocketName: { required },
      launchDate: { required },
      articleLink: { url },
    }
  },
  methods: {
    async onSubmit() {
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        // TODO: Create new launch
      }
    },
  },
})
</script>
