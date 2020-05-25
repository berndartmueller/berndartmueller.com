<script>
  function getCurrentYear() {
    return new Date().getFullYear();
  }
</script>

<style>
  footer {
    margin-top: 2rem;
    font-size: 0.9rem;
    text-align: center;
    padding-bottom: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    footer {
      color: #808388;
    }
  }
</style>

<footer>
  <p>
    © {getCurrentYear()} Bernd Artmüller.
    <a href="/imprint">Imprint</a>
  </p>
</footer>
