<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-md" style="padding: 0">
    <q-layout view="lHh lpr lFf" container style="min-height: 100vh" class="shadow-2 rounded-borders">
      

      <q-footer bordered class="bg-white text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
          <router-link  to="/Calculatrice"><q-tab name="Calculatrice" label="Calculatrice"/></router-link>
          <router-link  to="/Map"><q-tab name="Map" label="Map"/></router-link>
          <router-link  to="/pharmacie"><q-tab name="Pharmacie" label="Pharmacie"/></router-link>
          <router-link  to="/Formulaire"><q-tab name="Formulaire" label="Formulaire"/></router-link>
        </q-tabs>
      </q-footer>

      <q-page-container style="padding: 0">
        <q-page class="q-pa-md" style="padding-left: 0">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      tab: 'images',
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .logo{
    max-height: 5vh;
  }
</style>