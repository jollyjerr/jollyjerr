<script>
  import Page from '../components/page.svelte';
  import Profile from '../images/profile.jpg';
</script>

<Page
  title="About"
  image={{
    src: Profile,
    alt: 'Me',
  }}
>
  <h3 class="text-2xl">👋 Welcome!</h3>
  <p class="text-xl">
    I am a full-stack engineer with a passion for turning complicated ideas into
    slick applications.
  </p>
  <p class="text-xl">
    Most of my time is spent understanding problems and building solutions using
    whatever tools necessary. I love writing client facing interfaces with
    React, Vue and Svelte. For server side work, I love Node.js, Golang, Python
    and Elixir.
  </p>
  <p class="text-xl">
    I live and work in Boulder, CO. If I am not coding, you can find my climbing
    rocks all around the US or at home learning a new skill.
  </p>
</Page>
