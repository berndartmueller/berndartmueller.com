<script>
  import { cubicInOut } from 'svelte/easing';
  let duration = 200;
  let delay = duration;

  const transitionIn = (node, { offset = window.scrollY }) => {
    const o = +getComputedStyle(node).opacity;

    return {
      duration,
      delay,
      easing: cubicInOut,
      css: t => `opacity: ${t * o};`,
    };
  };

  const transitionOut = (node, { offset = window.scrollY }) => {
    const o = +getComputedStyle(node).opacity;

    return {
      duration,
      delay: 0,
      easing: cubicInOut,
      css: t => `opacity: ${t * o};  margin-top: -${offset}px`,
    };
  };
</script>

<div in:transitionIn out:transitionOut>
  <slot />
</div>
