<template>
  <BaseLayout>
    <div class="w-4xl flex flex-col py-16 md:py-10 h-full">
      <div class="flex w-full flex-col items-center">
        <div class="max-w-4xl w-full">
          <h1 class="text-4xl mb-10">Create Launch</h1>
          <div class="card card-border bg-base-100 max-w-4xl w-full">
            <form class="card-body" @submit.prevent="onSubmit" novalidate>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Mission Name *</legend>
                <input
                  v-model="missionName"
                  type="text"
                  class="input"
                  placeholder="Mission"
                  :class="{ 'input-error': v$.missionName.$error }"
                  @input="onChange"
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
                  @input="onChange"
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
                  @input="onChange"
                />
                <p v-if="v$.launchDate.$error" class="text-error">Launch Date is required</p>
              </fieldset>
              <fieldset class="fieldset">
                <legend class="fieldset-legend text-base">Article Link</legend>
                <input
                  v-model="articleLink"
                  type="url"
                  placeholder="https://"
                  class="input lg:w-3/4"
                  :class="{ 'input-error': v$.articleLink.$error }"
                  @input="onChange"
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
                  @input="onChange"
                />
              </fieldset>
              <div class="flex justify-end items-center mt-4">
                <div class="flex gap-6">
                  <span v-if="success" class="text-success flex text-base items-center gap-2">
                    Added <IconCheck class="size-4" />
                  </span>
                  <button class="btn btn-primary w-40" type="submit" :disabled="busy">
                    Submit
                    <span v-if="busy" class="loading loading-spinner" />
                  </button>
                </div>
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
import { v4 as uuidv4 } from 'uuid'
import BaseLayout from '@/components/layout/BaseLayout.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

import type { Launches, Launch } from '@/types.ts'

interface CreateLaunchViewData {
  missionName: string
  rocketName: string
  launchDate: Date | null
  articleLink: URL | null
  details: string | null
  busy: boolean
  success: boolean
}

export default defineComponent({
  components: {
    BaseLayout,
    IconCheck,
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
      busy: false,
      success: false,
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
      this.busy = true
      const isFormCorrect = await this.v$.$validate()

      if (isFormCorrect) {
        const launches: Launches = JSON.parse(localStorage.getItem('launches') || '[]')
        const newLaunch: Launch = this.createNewLaunch()

        launches.push(newLaunch)

        localStorage.setItem('launches', JSON.stringify(launches))

        this.success = true
        this.resetForm()
      }

      this.busy = false
    },
    createNewLaunch() {
      const id = uuidv4()

      const missionName = encodeURIComponent(this.missionName.toString())
      const launchDateUTC = this.getLaunchDateUTC()
      const launchYear = this.getLaunchYear()
      const details = this.details ? encodeURIComponent(this.details) : null
      const articleLink = this.articleLink ? encodeURIComponent(this.articleLink.toString()) : null

      return {
        id,
        mission_name: missionName,
        launch_date_utc: launchDateUTC,
        launch_year: launchYear,
        rocket: {
          rocket_name: encodeURIComponent(this.rocketName),
        },
        details,
        links: {
          article_link: articleLink,
        },
      }
    },
    getLaunchDateUTC() {
      const date = new Date(this.launchDate || '')
      return date.toISOString()
    },
    getLaunchYear() {
      const date = new Date(this.launchDate || '')
      return date.getFullYear().toString()
    },
    getSanitizedUrl() {
      return this.articleLink ? encodeURIComponent(this.articleLink.toString()) : null
    },
    onChange() {
      this.success = false
    },
    resetForm() {
      // Generated with copilot - I didn't want to type it out! ----
      this.missionName = ''
      this.rocketName = ''
      this.launchDate = null
      this.articleLink = null
      this.details = null
      this.busy = false
      // ------
      this.v$.$reset()
    },
  },
})
</script>
