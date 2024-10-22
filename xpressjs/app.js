const express = require('express');
const ConnRoutes = require('./routes/ConnRoutes');
const MhsRoutes = require('./routes/MhsRoutes');
const app = express();

// Middleware untuk mengurai JSON
app.use(express.json());

// Menggunakan rute yang ada di ConnRoutes
app.use('/api', ConnRoutes,MhsRoutes);

const port = 3000;

// Jalankan server langsung dari app.js
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
