<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__info">
        <h3>Example University</h3>
        <p>123 University Avenue</p>
        <p>Example City, ST 12345</p>
      </div>
      <div class="footer__contact">
        <p>Email: contact@example.edu</p>
        <p>Phone: (555) 123-4567</p>
      </div>
      <div class="footer__copyright">
        <p>&copy; 2024 Example University. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #333;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
}

.footer__content {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer__info h3 {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.footer__info p,
.footer__contact p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.footer__copyright {
  text-align: right;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer__content {
    width: 95%;
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: center;
  }

  .footer__copyright {
    text-align: center;
  }
}
</style>