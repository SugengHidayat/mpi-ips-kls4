/* ===========================
   FLIPBOOK CONTAINER
=========================== */
#flipbook {
  width: 100%;
  height: 100vh;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===========================
   BOOK WRAPPER
=========================== */
#book {
  width: 900px;
  height: 550px;
}

/* ===========================
   PAGE STYLE
=========================== */
.page {
  background: white;
  padding: 20px;
  font-size: 18px;
  line-height: 1.6;
}

/* ===========================
   LEFT & RIGHT PAGE EFFECT
=========================== */
.page:nth-child(odd) {
  background: #ffffff;
}

.page:nth-child(even) {
  background: #fdfdfd;
}

/* ===========================
   SHADOW EFFECT (REAL BOOK)
=========================== */
.turn-page {
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

/* ===========================
   PAGE CONTENT
=========================== */
.page h2 {
  color: var(--secondary);
  margin-bottom: 10px;
}

.page p {
  margin-bottom: 10px;
}

/* ===========================
   NEXT BUTTON INSIDE BOOK
=========================== */
.page button {
  margin-top: 20px;
}

/* ===========================
   MOBILE OPTIMIZATION
=========================== */
@media (max-width: 768px) {
  #book {
    width: 100%;
    height: 100%;
  }

  .page {
    font-size: 16px;
  }
}
