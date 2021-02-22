<script>
import Navbar from './component/navbar/Navbar.svelte';
import Boxgrid from './layout/Boxgrid.svelte';
</script>

<main>
<Navbar/>
<Boxgrid/>
</main>
<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 500;
    src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
  }
}
</style>