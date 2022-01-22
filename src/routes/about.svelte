<script>
  import Link from '../components/common/link.svelte';
  import Page from '../components/common/page.svelte';
  import Work from '../images/work.jpg';
</script>

<Page
  title="Experience"
  image={{
    src: Work,
    alt: 'My cute cats next to some code!',
  }}
>
  <h3 class="text-2xl">💼 Experience</h3>
  <p class="text-xl">
    I spend the majority of my time building data-driven/iot applications with
    the awesome team at <Link href="https://smartrent.com/">SmartRent</Link>. I
    also work as an engineer for other projects - building modern applications
    with a variety of technologies.
  </p>
  <p class="text-xl">
    Previously, I have worked on computational linguistics pipelines to
    transform unstructured medical text into meaningful datapoints to assist
    with patient tracking and diagnosis. I have also spent time building custom
    functionality into the Microsoft Dynamics application suite.
  </p>
</Page>
